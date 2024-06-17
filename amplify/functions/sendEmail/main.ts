import { generateClient } from "aws-amplify/api";
import { type Schema } from "../../data/resource";
import { configureAmplify } from "./configureAmplify";
import { sendHTMLEmail } from "./utils/sendHtmlEmail";
import { getMessage } from "./graphql/queries";
import { fetchUserAttributes } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";
import env from "../../../amplify_outputs.json";

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

  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: env.auth.user_pool_id,
        userPoolClientId: env.auth.user_pool_client_id,
      },
    },
  });

  const userAttributes = await fetchUserAttributes();
  console.log("userAttributes", userAttributes);

  console.log("the data is", data);
  console.log("the email is", event);

  if (userAttributes?.email) {
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
