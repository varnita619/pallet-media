import * as React from "react";
import { Avatar, Stack, Button, Typography } from "@mui/material";
import { NavBar, PostCard, SuggestionsSideBar } from "../../Components";
import { Box } from "@mui/system";
import "./UserProfile.css";
import { Link, useParams } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfile } from "../../Components";
import { theme } from "../../theme";
import { getAllPosts } from "../../store/postSlice";
import { getAllUsers } from "../../store/userSlice";

export const UserProfile = () => {
  const [editModalOpen, setEditModalOpen] = React.useState(false);

  const handleEditModalOpen = () => setEditModalOpen(true);
  const handleEditModalClose = () => setEditModalOpen(false);
  const {
    posts: { posts },
    users: { users },
  } = useSelector((state) => state);
  const { userInfo, token } = useSelector((state) => state.auth);
  const { username } = useParams();
  console.log(userInfo,posts)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, [dispatch]);

  const currentUserDetails = users?.find(
    (userInfo) => userInfo.username === username
  );

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {currentUserDetails && (
        <Box className="user-profile-container">
          <Box className="user-profile-inside-container">
            <Box
              sx={{
                width: "100%",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "5px",
                  marginTop: "16px",
                  width: "800px",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
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
                    src={currentUserDetails?.avatar}
                    sx={{ width: 80, height: 80 }}
                  />

                  <Button
                    sx={{ left: "10px" }}
                    variant="outlined"
                    onClick={handleEditModalOpen}
                  >
                    Edit Profile
                  </Button>
                  <EditProfile
                    handleEditModalClose={handleEditModalClose}
                    editModalOpen={editModalOpen}
                  />
                </Stack>
                <Box className="user-details-container">
                  <Typography
                    component="span"
                    variant="span"
                    className="original-name"
                  >
                    {currentUserDetails?.firstName}{" "}
                    {currentUserDetails?.lastName}
                  </Typography>
                  <Typography
                    component="span"
                    variant="span"
                    className="user-name"
                  >
                    @{currentUserDetails?.username}
                  </Typography>
                  <Typography component="span" variant="span" className="bio">
                    {currentUserDetails?.bio}
                  </Typography>
                  <Link to="" className="web-link">
                    {currentUserDetails?.website}
                  </Link>
                  <Box className="followers-details">
                    <Typography component="span" variant="span">
                      {" "}
                      2 post
                    </Typography>
                    <Typography component="span" variant="span">
                      0 follower
                    </Typography>
                    <Typography component="span" variant="span">
                      0 following
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Post Cards */}

              <Box>
                {posts?.map((post) => (
                  <PostCard post={post} key={post._id} />
                ))}
              </Box>
            </Box>

            {/* Suggestion Box */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "39%",
                margin: "0 0px",
              }}
            >
              <SuggestionsSideBar />
            </Box>
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
};
