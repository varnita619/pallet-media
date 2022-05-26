import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NavBar, PostCard, SuggestionsSideBar } from "../../Components";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, IconButton } from "@mui/material";
import { Paper } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Typography from "@mui/material/Typography";

const UserProfile = () => {
  const [dark, setDark] = React.useState(false);
  const [darkDisplay, setDarkDisplay] = React.useState("block");
  const [lightDisplay, setLightDisplay] = React.useState("none");

  const theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
    },
  });

  const changeMode = () => {
    setDark(!dark);

    if (dark) {
      setLightDisplay("none");
      setDarkDisplay("block");
    } else {
      setLightDisplay("block");
      setDarkDisplay("none");
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Paper className="user-profile-container">
        <Box className="user-profile-inside-container">
          <Box
            sx={{
              width: "100%",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              marginLeft:'20px',
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{borderRadius:'5px',marginTop:'16px', width:'800px' }}>
              <Stack
                direction="row"
                spacing={2}
                display="flex"
                alignItems="center"
                justifyContent="center"
                margin="1rem 0"
              >
                <Avatar
                  alt="Remy Sharp"
                  src="./img/user.jpg"
                  sx={{ width: 80, height: 80 }}
                />

                <Button sx={{ left: "10px" }} variant="outlined">
                  Edit Profile
                </Button>
              </Stack>
              <Box className="user-details-container">
                <Typography component="span" variant="span" className="original-name">Adarsh Balika</Typography>
                <Typography component="span" variant="span" className="user-name">@adarshbalika</Typography>
                <Typography component="span" variant="span" className="bio">
                  Bio | More Bio | Some Bio | Work At | Previously Worked
                </Typography>
                <Link to="" className="web-link">
                  https://varnitamakrariya.netlify.app/
                </Link>
                <Box className="followers-details">
                <Typography component="span" variant="span"> 1 post</Typography>
                <Typography component="span" variant="span">1 follower</Typography>
                <Typography component="span" variant="span">1 following</Typography>
                </Box>
              </Box>
            </Box>

            {/* Post Cards */}

            <Box
              sx={{
                margin: "2rem 0",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <PostCard />
            </Box>

            <Box>
              <IconButton>
                <DarkModeIcon
                  onClick={() => changeMode()}
                  sx={{ display: `${darkDisplay}` }}
                ></DarkModeIcon>
                <LightModeIcon
                  onClick={() => changeMode()}
                  sx={{ display: `${lightDisplay}` }}
                ></LightModeIcon>
              </IconButton>
            </Box>
          </Box>

          <Box
           
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "29%",
              margin:'0 30px'
            }}
          >
            <SuggestionsSideBar />
          </Box>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export { UserProfile };
