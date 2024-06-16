// Amplify
import {
  Authenticator as AmplifyAuthenticator,
  ThemeProvider as AmplifyThemeProvider,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

// MUI
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// const style = {
//   container: {
//     background: `linear-gradient(
//       180deg,
//       rgba(72, 78, 91, 0.6) 25%,
//       rgba(14, 13, 96, 0.7) 75%
//     )`,
//     height: "100%",
//     display: "flex",
//     justifyContent: "center",
//     fontFamily: "Arial",
//     top: "0",
//     boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
//   },
// };

const Authenticator = ({ children }) => {
  const theme = {
    name: "EasyScheduler",
    tokens: {
      colors: {
        font: {
          secondary: { value: "{colors.brand.primary.90}" },
        },
        brand: {
          primary: {
            10: { value: "{colors.overlay.10}" },
            20: { value: "{colors.overlay.20}" },
            40: { value: "{colors.overlay.40}" },
            60: { value: "{colors.overlay.60}" },
            80: { value: "{colors.overlay.90}" },
            90: { value: "{colors.black}" },
            100: { value: "{colors.black}" },
          },
          secondary: {
            10: { value: "{colors.neutral.10}" },
            20: { value: "{colors.neutral.20}" },
            40: { value: "{colors.neutral.40}" },
            60: { value: "{colors.neutral.60}" },
            80: { value: "{colors.neutral.80}" },
            90: { value: "{colors.neutral.90}" },
            100: { value: "{colors.neutral.100}" },
          },
        },
      },
      radii: {
        small: { value: "0.75rem" },
      },
      components: {
        authenticator: {
          router: {
            borderWidth: { value: "0" },
          },
          state: {
            inactive: {
              backgroundColor: { value: "{colors.brand.primary.100}" },
            },
          },
        },
        tabs: {
          item: {
            borderColor: { value: "{colors.brand.primary.100}" },
          },
        },
      },
    },
  };
  return (
    <AmplifyThemeProvider theme={theme}>
      <AmplifyAuthenticator
        variation="modal"
        formFields={{
          signIn: {
            username: {
              label: "Email",
              placeholder: "Enter your email",
              required: true,
            },
          },
          signUp: {
            fullname: {
              label: "Full Name",
              placeholder: "Enter your full name",
              required: true,
            },
          },
        }}
        components={{
          Header: () => (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                background: "#000",
                color: "#fff",
                py: "1rem",
                borderRadius: "1rem 1rem 0 0",
              }}
            >
              <Typography
                variant="h4"
                sx={{ fontWeight: 550, fontFamily: "fantasy" }}
              >
                Easy Scheduler
              </Typography>
            </Box>
          ),
          Footer: () => (
            <Box
              sx={{
                background: "#fff",
                borderRadius: "0 0 1rem 1rem",
                py: "0.4rem",
              }}
            />
          ),
        }}
      >
        {children}
      </AmplifyAuthenticator>
    </AmplifyThemeProvider>
  );
};

export default Authenticator;
