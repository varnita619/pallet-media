import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  AppBar,
  Button,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Avatar,
  Tooltip,
  MenuItem,
  Menu,
  Fade,
  Modal,
  Backdrop,
  Paper,
  Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { theme } from "../../theme";
import "./NavBar.css";
import { Bookmark, Explore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { createNewPost } from "../../store/postSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

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

export const NavBar = () => {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [postData, setPostData] = React.useState({ content: "", imgUrl: "" });
  const [name, setName] = React.useState("");

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    navigate("/user-profile");
    setAnchorElUser(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Typography variant="p" textAlign="center">
            {setting}
          </Typography>
        </MenuItem>
      ))}
    </Menu>
  );

  const newPostHandler = (e) => {
    e.preventDefault();
    if (postData.content === "") {
      toast.error("Please write something to post..");
    } else if (postData.imgUrl) {
      const file = postData.imgUrl;
      setName(file.name);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch(
            createNewPost({
              content: postData.content,
              imgUrl: reader.result,
              token: token,
            })
          );
        }
      };
    } else {
      dispatch(
        createNewPost({
          content: postData.content,
          token: token,
        })
      );
      toast.success("New Post added");
    }
    setPostData({ content: "", imgUrl: "" });

    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            color="inherit"
            sx={{ borderBottom: "1px solid #d1d4d7" }}
          >
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
                      cursor: "pointer",
                    },
                  }}
                >
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/explore");
                    }}
                    sx={{
                      display: {
                        fontStyle: "italic",
                        fontWeight: "bold",
                        fontSize: 30,
                        cursor: "pointer",
                        border: "none",
                      },
                    }}
                  >
                    Palletgram
                  </Button>
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
                <IconButton
                  size="large"
                  title="explore"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/explore");
                  }}
                >
                  <Explore />
                </IconButton>
                <IconButton
                  size="large"
                  onClick={handleOpen}
                  title="create post"
                >
                  <AddCircleIcon />
                </IconButton>
                <IconButton
                  size="large"
                  title="bookmark"
                  onClick={() => navigate("/explore")}
                >
                  <Bookmark />
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
                  <Typography
                    variant="textarea"
                    component="textarea"
                    style={{ width: "100%", border: "none" }}
                    placeholder="What's Happening?"
                    value={postData.content}
                    onChange={(event) =>
                      setPostData((prev) => ({
                        ...prev,
                        content: event.target.value,
                      }))
                    }
                  ></Typography>
                </div>
                <div className="action-btn-container">
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={(event) =>
                        setPostData((prev) => ({
                          ...prev,
                          imgUrl: event.target.files[0],
                        }))
                      }
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                    {name}
                  </label>
                  <Button
                    variant="contained"
                    sx={{
                      padding: ".2rem .6rem",
                      height: "2rem",
                      borderRadius: ".3rem",
                    }}
                    onClick={(e) => newPostHandler(e)}
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
