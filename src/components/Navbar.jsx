import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Amplify
import { useAuthenticator } from "@aws-amplify/ui-react";
import { fetchUserAttributes } from "aws-amplify/auth";

// MUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const menuOptions = ["Schedule message", "View messages", "Sign out"];

const Navbar = () => {
  const [userAttributes, setUserAttributes] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();
  const { signOut } = useAuthenticator();

  useEffect(() => {
    const getUserAttributes = async () => {
      const attributes = await fetchUserAttributes();
      setUserAttributes(attributes);
    };

    getUserAttributes();
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    const option = event.target?.innerText;
    switch (option) {
      case "Sign out":
        signOut();
        break;
      case "Schedule message":
        navigate("/schedule-message");
        break;
      case "View messages":
        navigate("/view-messages");
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <Button
            sx={{
              color: "black",
              fontFamily: "fantasy",
              fontSize: 22,
              "&.MuiButton-root:hover": { bgcolor: "transparent" },
            }}
            onClick={() => navigate("/")}
          >
            Easy Scheduler
          </Button>
        </Typography>
        {userAttributes && (
          <div>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="inherit"
                >
                  <AccountCircleIcon />
                  <Typography>{userAttributes.name}</Typography>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {menuOptions.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
