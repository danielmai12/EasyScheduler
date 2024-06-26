import { generateClient } from "aws-amplify/api";
import { type Schema } from "../../data/resource";
import { configureAmplify } from "./configureAmplify";
import { sendHTMLEmail } from "./utils/sendHtmlEmail";
import { getMessage } from "./graphql/queries";

export const handler = async (event: {
  messageId: string;
  userEmail: string;
}) => {
  console.log("event", event);
  await configureAmplify();

  const client = generateClient<Schema>({
    authMode: "iam",
  });
  const { data } = await client.graphql({
    query: getMessage,
    variables: {
      id: event.messageId,
    },
  });

  await sendHTMLEmail(
    "techwithdmai@gmail.com",
    [event.userEmail],
    data.getMessage?.title as string,
    `<h1>Your message:</h1> 
      <p>${data.getMessage?.message}</p>`
  );
  return "Message sent successfully!";
};
