import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// assets
import dlabs from "../assets/dlabs-pic.png";
import dgifs from "../assets/dashlabs-gif.gif";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      fontFamily: "DM Sans",
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
        }}
      >
        <Box sx={{ mr: 10 }}>
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              my: 5,
            }}
          >
            <Box sx={{ pr: 2, pt: 3 }}>
              <img src="https://uploads-ssl.webflow.com/61239791c9d56b5ef659fcf8/621301280149a107f8545383_Calendar%20icon.svg" />
            </Box>
            <Box>
              <p
                style={{
                  color: "#1665ff",
                  fontSize: "18px",
                  marginBottom: "0px",
                }}
              >
                Are you a lab of healthcare institution?
              </p>
              <p
                style={{
                  textDecoration: "underline",
                  color: "#1665ff",
                  fontSize: "18px",
                  margin: "0px",
                  paddingTop: "0px",
                }}
              >
                Book a demo
              </p>
            </Box>
          </Box>
        </Box>

        <Box sx={{ ml: 10 }}>
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

      <img
        src={dgifs}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          width: "50%",
          marginBottom: "30px",
        }}
      />
    </ThemeProvider>
  );
}
