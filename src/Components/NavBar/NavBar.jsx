import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Avatar,
  Tooltip,
  MenuItem,
  Menu,
  Fade,
  Modal,
  Backdrop,
  Paper
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { theme } from "../../theme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./NavBar.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: ".5px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#d2cfcfbd",
  "&:hover": {
    backgroundColor: "#f3f5f7",
  },
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const Input = styled("input")({
  display: "none",
});

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  color: "black",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const settings = ["Profile", "Explore", "BookMark", "Liked Posts", "Logout"];

const NavBar = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
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
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}>
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" color="inherit" sx={{borderBottom:'1px solid #d1d4d7'}}>
            <Toolbar>
              <Box className="heading">
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    display: {
                      backgroundColor: "neutral",
                      fontStyle: "italic",
                      fontWeight: "bold",
                      fontSize: 30,
                    },
                  }}
                >
                  Palletgram
                </Typography>
              </Box>
              <Box className="searchBar">
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
              </Box>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" aria-label="show 4 new mails">
                  <Badge badgeContent={4} color="primary">
                    <MailIcon color="" />
                  </Badge>
                </IconButton>
                <IconButton size="large" aria-label="show 7 new notifications">
                  <Badge badgeContent={7} color="primary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton size="large" onClick={handleOpen}>
                  <AddAPhotoIcon />
                </IconButton>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                    aria-controls={mobileMenuId}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="./img/user.jpg"
                      sx={{ width: 36, height: 36, ml: 1 }}
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </Box>

        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  New Post
                  <span>
                    <CloseIcon
                      onClick={handleClose}
                      sx={{ cursor: "pointer" }}
                    />
                  </span>
                </Typography>
                <div className="input-container">
                  <textarea style={{width:'100%'}} placeholder="Enter Your Text Here"></textarea>
                </div>
                <div className="action-btn-container">
                  <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                  <Button
                    variant="contained"
                    sx={{
                      padding: ".2rem .6rem",
                      height: "2rem",
                      borderRadius: ".3rem",
                    }}
                  >
                    Post
                  </Button>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export { NavBar };
