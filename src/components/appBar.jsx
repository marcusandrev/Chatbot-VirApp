import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// assets
import logo from "../assets/dashlabs-logo.svg";

const theme = createTheme({
  typography: {
    button: {
      textTransform: "none",
      fontFamily: "DM Sans",
      fontSize: "16px",
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

const pages = ["About Us", "Resources", "Product"];
const pages1 = ["For Patients", "For Laboratories"];

function AppBar1() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElNav1, setAnchorElNav1] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu1 = (event) => {
    setAnchorElNav1(event.currentTarget);
  };

  const handleCloseNavMenu1 = () => {
    setAnchorElNav1(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="inherit">
        <Container maxWidth="xl" sx={{ my: 1 }}>
          <Toolbar disableGutters>
            <IconButton
              size="medium"
              color="inherit"
              aria-label="menu"
              sx={{ pr: 5 }}
            >
              <img src={logo} style={{ width: "100%", height: "auto" }} />
            </IconButton>

            {/*First Box */}

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              {/* Hamburger stack */}
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block", mr: 2 }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* Second Box */}

            <Box sx={{ flexGrow: 0 }}>
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu1}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav1}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav1)}
                  onClose={handleCloseNavMenu1}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages1.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu1}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages1.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu1}
                    sx={{ my: 2, color: "#1665ff", display: "block", mr: 2 }}
                  >
                    {page}
                    <KeyboardArrowDownIcon
                      style={{ verticalAlign: "middle" }}
                    />
                  </Button>
                ))}

                {/* Contained Buttons */}

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ my: 2, color: "#16327e", display: "block", mr: 2 }}
                >
                  Get Tested
                </Button>
                <Button
                  variant="contained"
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Book A Demo
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default AppBar1;
