import { generateClient } from "aws-amplify/api";
import { type Schema } from "../../data/resource";
import { configureAmplify } from "./configureAmplify";
import { sendHTMLEmail } from "./utils/sendHtmlEmail";
import { getMessage } from "./graphql/queries";
import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";

export const handler = async (event: { messageId: string; ctx: any }) => {
  await configureAmplify();
  console.log("ctx is", event.ctx);

  const client = generateClient<Schema>({
    authMode: "iam",
  });
  const { data } = await client.graphql({
    query: getMessage,
    variables: {
      id: event.messageId,
    },
  });

  const userAttributes = await fetchUserAttributes();
  console.log("userAttributes", userAttributes);

  console.log("the data is", data);
  console.log("the email is", event);

  if (userAttributes.email) {
    await sendHTMLEmail(
      "techwithdmai@gmail.com",
      [userAttributes.email],
      data.getMessage?.title as string,
      `<h1>Your message:</h1> 
      <p>${data.getMessage?.message}</p>`
    );
    return "Message sent successfully!";
  } else {
    return `Error sending message: user not found.`;
  }
};
