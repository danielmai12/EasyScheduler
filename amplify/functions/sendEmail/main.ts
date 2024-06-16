import { generateClient } from "aws-amplify/api";
import { type Schema } from "../../data/resource";
import { configureAmplify } from "./configureAmplify";
import { sendHTMLEmail } from "./utils/sendHtmlEmail";
import { getMessage } from "./graphql/queries";

export const handler = async (event: {
  messageId: string;
  userEmail: string;
  ctx: any;
}) => {
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

  console.log("the data is", data);
  console.log("the email is", event);

  await sendHTMLEmail(
    "techwithdmai@gmail.com",
    [event.userEmail],
    data.getMessage?.title as string,
    `<h1>Your message:</h1> 
		<p>${data.getMessage?.message}</p>`
  );

  return "Hello, World!";
};
