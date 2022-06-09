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

  const trendingPost = [...posts].sort(
    (a, b) => b.likes.likeCount - a.likes.likeCount
  );

  const sortByDate = [...posts].sort(
    (a, b) => new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate()
  );

  const filteredPostsHandler = (posts, type) => {
    if (type === "trending") {
      dispatch(getTrendingPosts({ trendingPost: [...posts] }));
    } else if (type === "sortByDate") {
      dispatch(getTrendingPosts({ trendingPost: [...posts].reverse() }));
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", width: "100%" }}>
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
              justifyContent={{ md: "center", xs: "flex-end" }}
            >
              <Button
                variant="outlined"
                onClick={() => filteredPostsHandler(trendingPost, "trending")}
              >
                Trending Posts
              </Button>
              <Button
                variant="outlined"
                onClick={() => filteredPostsHandler(sortByDate, "sortByDate")}
              >
                New Posts
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
