// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// MUI
// import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <Navbar />
      <Container
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
          style={{ textAlign: "center", color: "white" }}
        >
          <Grid item xs={12}>
            <Typography variant="h2" component="h1">
              Hello there
            </Typography>
            <Typography
              variant="h6"
              component="p"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              This is a fullstack scheduling app that uses{" "}
              <span style={{ color: "#00FF00" }}>Material UI</span> for styling,
              <span style={{ color: "#FF0000" }}>
                {" "}
                Amazon EventBridge Scheduler
              </span>{" "}
              to future date the messages,{" "}
              <span style={{ color: "#0000FF" }}>React</span> and{" "}
              <span style={{ color: "#FF00FF" }}>AWS Amplify Gen2</span>
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/schedule-message")}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default HomePage;
