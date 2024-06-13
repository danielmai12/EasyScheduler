import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ color: "HighlightText", flexGrow: 1, fontFamily: "fantasy" }}
        >
          Easy Scheduler
        </Typography>
        <Button sx={{ color: "white" }}>View Messages</Button>
        <Button
          sx={{ color: "white" }}
          onClick={() => navigate("/schedule-message")}
        >
          Schedule Message
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
