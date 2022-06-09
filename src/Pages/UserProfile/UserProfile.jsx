import * as React from "react";
import { Avatar, Stack, Button, Typography,Link } from "@mui/material";
import {
  NavBar,
  PostCard,
  SuggestionsSideBar,
  FollowersModal,
  FollowingModal,
} from "../../Components";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfile } from "../../Components";
import { theme } from "../../theme";
import { getUserPosts } from "../../store/postSlice";
import { followUser, getAllUsers, unfollowUser } from "../../store/userSlice";

export const UserProfile = () => {
  const [editModalOpen, setEditModalOpen] = React.useState(false);
  const [followersModalOpen, setFollowersModalOpen] = React.useState(false);
  const [followingModalOpen, setFollowingModalOpen] = React.useState(false);

  const handleEditModalOpen = () => setEditModalOpen(true);
  const handleEditModalClose = () => setEditModalOpen(false);

  const handleFollowersModalOpen = () => setFollowersModalOpen(true);
  const handleFollowersModalClose = () => setFollowersModalOpen(false);

  const handleFollowingModalOpen = () => setFollowingModalOpen(true);
  const handleFollowingModalClose = () => setFollowingModalOpen(false);

  const {
    posts: { userPosts },
    users: { users },
    auth: { userInfo, token },
  } = useSelector((state) => state);
  const { username } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (username) {
      dispatch(getAllUsers());
      dispatch(getUserPosts(username));
    }
  }, [dispatch, username]);

  const currentUserDetails = users?.find(
    (userInfo) => userInfo.username === username
  );

  const isFollowed = () =>
    currentUserDetails?.followers.some(
      (users) => users.username === userInfo.username
    );

  const followUnfollowHandler = () => {
    isFollowed()
      ? dispatch(
          unfollowUser({ followUserId: currentUserDetails?._id, token: token })
        )
      : dispatch(
          followUser({ followUserId: currentUserDetails?._id, token: token })
        );
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {currentUserDetails && (
        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Box sx={{ display: "flex", width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  borderRadius: "5px",
                  marginTop: "15px",
                  width: "800px",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <Stack
                  direction="column"
                  spacing={2}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  margin="1rem 0"
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={currentUserDetails?.avatar}
                    sx={{ width: 100, height: 100 }}
                  />
                  {userInfo?.username === currentUserDetails?.username && (
                    <Button variant="outlined" onClick={handleEditModalOpen}>
                      Edit Profile
                    </Button>
                  )}
                  {userInfo.username !== currentUserDetails.username && (
                    <Button
                      variant="outlined"
                      sx={{ left: "10px" }}
                      onClick={followUnfollowHandler}
                    >
                      {isFollowed() ? "Following" : "Follow"}
                    </Button>
                  )}
                  <EditProfile
                    handleEditModalClose={handleEditModalClose}
                    editModalOpen={editModalOpen}
                  />
                </Stack>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    gap: "0.6rem",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  <Typography
                    component="span"
                    variant="span"
                    sx={{ fontWeight: "bold", fontSize: "18px" }}
                  >
                    {currentUserDetails?.firstName}{" "}
                    {currentUserDetails?.lastName}
                  </Typography>
                  <Typography component="span" variant="span">
                    @{currentUserDetails?.username}
                  </Typography>
                  <Typography
                    component="span"
                    variant="span"
                    sx={{ width: "300px", wordWrap: "break-word" }}
                  >
                    {currentUserDetails?.bio}
                  </Typography>
                  <Link
                    href={currentUserDetails?.website}
                    target="_blank"
                    sx={{
                      width: "300px",
                      wordWrap: "break-word",
                      textDecoration: "underline",
                      color: "#f73378",
                      cursor: "pointer",
                    }}
                  >
                    {currentUserDetails?.website}
                  </Link>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-around",
                      gap: "2rem",
                      marginTop: "0.2rem",
                      marginBottom: "0.5rem",
                      cursor: "pointer",
                      fontWeight: "bold",
                    }}
                  >
                    <Button sx={{ color: "black" }}>
                      {userPosts?.length} post
                    </Button>

                    <Button
                      sx={{ color: "black" }}
                      onClick={handleFollowersModalOpen}
                    >
                      {currentUserDetails?.followers.length} follower
                    </Button>

                    <Button
                      sx={{ color: "black" }}
                      onClick={handleFollowingModalOpen}
                    >
                      {currentUserDetails?.following.length} following
                    </Button>
                  </Box>
                </Box>
              </Box>

              {/* Post Cards */}
              {userPosts.length !== 0 ? (
                <Box>
                  {userPosts.map((post) => (
                    <PostCard post={post} key={post._id} />
                  ))}
                </Box>
              ) : (
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ padding: "10px" }}
                >
                  No Posts Yet!
                </Typography>
              )}
            </Box>

            {/* Suggestion Box */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "30%",
                margin: "0 0px",
              }}
            >
              <SuggestionsSideBar />
            </Box>

            <FollowersModal
              followersModalOpen={followersModalOpen}
              handleFollowersModalClose={handleFollowersModalClose}
              followers={currentUserDetails?.followers}
            />
            <FollowingModal
              followingModalOpen={followingModalOpen}
              handleFollowingModalClose={handleFollowingModalClose}
              following={currentUserDetails?.following}
            />
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
};
