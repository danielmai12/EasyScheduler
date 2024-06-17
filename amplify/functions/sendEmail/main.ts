import { generateClient } from "aws-amplify/api";
import { type Schema } from "../../data/resource";
import { configureAmplify } from "./configureAmplify";
import { sendHTMLEmail } from "./utils/sendHtmlEmail";
import { getMessage } from "./graphql/queries";
import { fetchUserAttributes } from "aws-amplify/auth";
import { Amplify } from "aws-amplify";

export const handler = async (event: {
  messageId: string;
  userPoolId: string;
  clientId: string;
}) => {
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

  // This is a work around to get the user email specifically
  // for an existing bug in the Amplify library.
  // `ctx` does not have the email attribute if passed using the access token.
  Amplify.configure({
    Auth: {
      Cognito: {
        userPoolId: event.userPoolId,
        userPoolClientId: event.clientId,
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
