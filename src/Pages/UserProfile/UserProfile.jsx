import * as React from "react";
import { Avatar, Stack, Button, Typography } from "@mui/material";
import {
  NavBar,
  PostCard,
  SuggestionsSideBar,
  FollowersModal,
  FollowingModal,
} from "../../Components";
import { Box } from "@mui/system";
import "./UserProfile.css";
import { Link, useParams } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditProfile } from "../../Components";
import { theme } from "../../theme";
import { getAllPosts } from "../../store/postSlice";
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
    posts: { posts },
    users: { users },
    auth: { userInfo, token },
  } = useSelector((state) => state);
  const { username } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllPosts());
  }, [dispatch]);

  const currentUserPosts = posts.filter(
    (eachPost) => eachPost.username === userInfo.username
  );

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
                  {userInfo?.username === currentUserDetails?.username && (
                    <Button
                      sx={{ left: "10px" }}
                      variant="outlined"
                      onClick={handleEditModalOpen}
                    >
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
                    <Button sx={{ color: "black" }}>
                      {currentUserPosts?.length} post
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
              {currentUserPosts.length !== 0 ? (
                <Box>
                  {currentUserPosts.map((post) => (
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
                width: "39%",
                margin: "0 0px",
              }}
            >
              <SuggestionsSideBar />
            </Box>

            <FollowersModal
              followersModalOpen={followersModalOpen}
              handleFollowersModalClose={handleFollowersModalClose}
              followers = {currentUserDetails?.followers}
            />
            <FollowingModal
              followingModalOpen={followingModalOpen}
              handleFollowingModalClose={handleFollowingModalClose}
              following = {currentUserDetails?.following}
            />
          </Box>
        </Box>
      )}
    </ThemeProvider>
  );
};
