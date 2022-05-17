import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { NavBar, PostCard } from "../../Components";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, IconButton } from "@mui/material";
import { Paper } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

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

    if(dark){
      setLightDisplay("none")
      setDarkDisplay("block")
    }
    else{
      setLightDisplay("block")
      setDarkDisplay("none")
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Paper className="user-profile-container">
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
            sx={{ width: 76, height: 76 }}
          />

          <Button sx={{ left: "10px" }} variant="outlined">
            Edit Profile
          </Button>
        </Stack>
        <Box className="user-details-container">
          <span className="original-name">Adarsh Balika</span>
          <span className="user-name">@adarshbalika</span>
          <span className="bio">
            Bio | More Bio | Some Bio | Work At | Previously Worked
          </span>
          <Link to="" className="web-link">
            https://varnitamakrariya.netlify.app/
          </Link>
          <div className="followers-details">
            <span> 1 post</span>
            <span>1 follower</span>
            <span>1 following</span>
          </div>
        </Box>

        {/* Post Cards */}

        <Box sx={{ margin: "2rem 0" }}>
          <PostCard />
        </Box>

        <Box>
          <IconButton>
            <DarkModeIcon
              onClick={() => changeMode()}
              sx={{ display: `${darkDisplay}` }}
            ></DarkModeIcon>
            <LightModeIcon onClick={() => changeMode()} sx={{ display: `${lightDisplay}` }}></LightModeIcon>
          </IconButton>
        </Box>
      </Paper>
    </ThemeProvider>
  );
};

export { UserProfile };
