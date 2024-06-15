// React
import { useState, useEffect } from "react";

// AWS Amplify
import { generateClient } from "aws-amplify/data";

// Components
import Navbar from "../components/Navbar";
import { listMessages } from "../../amplify/functions/sendEmail/graphql/queries";

const ViewMessagesPage = () => {
  const client = generateClient();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await client.graphql({
        query: listMessages,
        variables: {
          limit: 10,
        },
      });

      setMessages(res.data.listMessages.items);
    };

    fetchMessages();
  }, [client]);
  return (
    <div>
      <Navbar />
      {messages.map((message) => {
        return (
          <div key={message.id}>
            <h2>{message.title}</h2>
            <p>{message.message}</p>
            <p>{message.deliveryDate}</p>
          </div>
        );
      })}
      <h1>View Messages</h1>
    </div>
  );
};

export default ViewMessagesPage;
