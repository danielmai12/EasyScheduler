import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import Navbar from "../components/Navbar";
import { listMessages } from "../../amplify/functions/sendEmail/graphql/queries";
import { Container, Typography, Card, CardContent, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { CfnDocumentationVersion } from "aws-cdk-lib/aws-apigateway";

const ViewMessagesPage = () => {
  const client = generateClient();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await client.graphql({
        query: listMessages,
        variables: {
          limit: 100, // Increase the limit if you have more messages
        },
      });

      const sortedMessages = res.data.listMessages.items.sort(
        (a, b) => new Date(a.deliveryDate) - new Date(b.deliveryDate) < 0
      );

      setMessages(sortedMessages);
    };

    fetchMessages();
  }, [client]);

  const currentDateTime = new Date();

  return (
    <div>
      <Navbar />
      <Container>
        <Box mt={4} mb={4} textAlign="center">
          <Typography variant="h4" gutterBottom>
            Scheduled Messages
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {messages.map((message) => {
            const isPast = new Date(message.deliveryDate) < currentDateTime;
            return (
              <Grid item xs={12} md={6} key={message.id}>
                <Card
                  style={{
                    backgroundColor: isPast ? "#f0e68c" : "#98fb98",
                  }}
                >
                  <CardContent>
                    <Typography variant="h6">{message.title}</Typography>
                    <Typography variant="body1">{message.message}</Typography>
                    <Typography variant="body2">
                      {new Date(message.deliveryDate).toLocaleString()}
                    </Typography>
                    <Typography variant="body2">
                      Status: {isPast ? "Past" : "Active"}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default ViewMessagesPage;
