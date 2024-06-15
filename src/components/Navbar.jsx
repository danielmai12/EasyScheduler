// React
import { useNavigate } from "react-router-dom";

// Amplify
import { useAuthenticator } from "@aws-amplify/ui-react";

// MUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

const Navbar = () => {
  const { user, signOut } = useAuthenticator();
  const navigate = useNavigate();
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <Button
            sx={{
              color: "HighlightText",
              fontFamily: "fantasy",
              fontSize: 22,
              "&.MuiButton-root:hover": { bgcolor: "transparent" },
            }}
            onClick={() => navigate("/")}
          >
            Easy Scheduler
          </Button>
        </Typography>
        <Button
          sx={{ color: "white" }}
          onClick={() => navigate("/view-messages")}
        >
          View Messages
        </Button>
        <Button
          sx={{ color: "white" }}
          onClick={() => navigate("/schedule-message")}
        >
          Schedule Message
        </Button>
        <Stack direction="row" spacing={2} alignItems="end">
          <Typography sx={{ display: { xs: "none", md: "inline" } }}>
            {user &&
              user?.attributes?.given_name +
                " " +
                user?.attributes?.family_name}
          </Typography>
          <Typography sx={{ display: { xs: "none", md: "inline" } }}>
            |
          </Typography>
          <Link onClick={signOut} color="#fff">
            Sign out
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
