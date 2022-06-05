import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { NavBar, PostCard, SuggestionsSideBar } from "../../Components";
import { getAllPosts } from "../../store/postSlice";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";
import { getAllUsers } from "../../store/userSlice";

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
      <Box className="user-profile-container">
        <Box className="user-profile-inside-container">
          <Box
            sx={{
              width: "100%",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              marginLeft: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
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
    </ThemeProvider>
  );
};
