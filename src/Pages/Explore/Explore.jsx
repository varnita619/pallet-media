import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import { NavBar, PostCard, SuggestionsSideBar } from "../../Components";
import { getAllPosts } from "../../store/postSlice";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";
import { getAllUsers } from "../../store/userSlice";
import { Typography } from "@mui/material";
import { getTrendingPosts } from "../../store/postSlice";

export const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
    dispatch(getAllUsers());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  const oldPost = [...posts].reverse();

  const trendingPost = [...posts].sort(
    (a, b) => b.likes.likeCount - a.likes.likeCount
  );

  const newPost = [...posts].sort(
    (a, b) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
  );

  const filteredPostsHandler = (posts, type) => {
    if (type === "trending") {
      dispatch(getTrendingPosts({ trendingPost: [...posts] }));
    } else if (type === "newPost") {
      dispatch(getTrendingPosts({ trendingPost: [...posts].reverse() }));
    } else if(type === "oldPost") {
      dispatch(getTrendingPosts({ trendingPost: posts }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
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
            <h1>Explore </h1>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginLeft: "670px",
                gap: "16px",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => filteredPostsHandler(trendingPost, "trending")}
              >
                Trending Posts
              </Button>
              <Button
                variant="outlined"
                onClick={() => filteredPostsHandler(newPost, "newPost")}
              >
                New Posts
              </Button>
              <Button
                variant="outlined"
                onClick={() => filteredPostsHandler(oldPost, "oldPost")}
              >
                Old Posts
              </Button>
            </Box>
            {/* Post Cards */}
            {posts.length === 0 ? (
              <Typography variant="h3" component="h3">
                Be the first one to post.
              </Typography>
            ) : (
              <Box>
                {posts?.map((post) => (
                  <PostCard post={post} key={post._id} />
                ))}
              </Box>
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
        </Box>
      </Box>
    </ThemeProvider>
  );
};
