import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#04121F",
        color: "white",
        p: 2,
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <Typography variant="body2">
        Made with ❤️ by{" "}
        <Link
          href="https://focusotter.com"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "green", textDecoration: "underline" }}
        >
          Daniel Mai
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
