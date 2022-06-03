import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// assets
import dlabs from "../assets/dlabs-pic.png";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#1665ff",
    },
    secondary: {
      main: "#fcce29",
    },
  },
});

export default function landing() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          my: 5,
        }}
      >
        <Box sx={{ mr: 5 }}>
          <h2 style={{ fontSize: "38px", color: "#448aff" }}>
            Testing made simple.
          </h2>
          <h1
            style={{
              fontSize: "72px",
              color: "#448aff",
              margin: "0px",
              padding: "0px",
            }}
          >
            Choose{" "}
          </h1>
          <h1
            style={{
              fontSize: "72px",
              color: "#448aff",
              margin: "0px",
              padding: "0px",
            }}
          >
            labs using{" "}
          </h1>
          <h1
            style={{
              fontSize: "72px",
              color: "#1665ff",
              margin: "0px",
              padding: "0px",
            }}
          >
            Dashlabs.ai
          </h1>

          <p style={{ fontSize: "18px", color: "##16327e" }}>
            ✅ Available across the Philippines
          </p>
          <p style={{ fontSize: "18px", color: "##16327e" }}>
            ✅ +99.99% accuracy
          </p>
          <p style={{ fontSize: "18px", color: "##16327e" }}>
            ✅ Served ~2 million RT-PCR tests in 6 months
          </p>
          <p style={{ fontSize: "18px", color: "##16327e" }}>
            ✅ Fast, convenient and real-time
          </p>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 5,
              color: "#16327e",
              display: "block",
              mr: 2,
              fontSize: "20px",
            }}
          >
            Get Tested
          </Button>
        </Box>

        <Box sx={{ ml: 5 }}>
          <img
            src={dlabs}
            style={{
              width: "auto",
              height: "500px",
              ml: "auto",
              mr: "auto",
              textAlign: "center",
            }}
          />
        </Box>
      </Box>
      <h1
        style={{
          fontSize: "32px",
          color: "#448aff",
          margin: "0px",
          padding: "0px",
          textAlign: "center",
          marginBottom: "50px",
        }}
      >
        Trusted by the best names in health, governance, and industry{" "}
      </h1>
    </ThemeProvider>
  );
}
