import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { NavBar, PostCard } from "../../Components";
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
        </Box>
      </Box>
    </ThemeProvider>
  );
};
