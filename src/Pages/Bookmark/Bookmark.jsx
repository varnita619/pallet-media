import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { NavBar, PostCard, SuggestionsSideBar } from "../../Components";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";

export const Bookmark = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const { bookmark, posts } = useSelector((state) => state.posts);

  const bookmarkPost = bookmark.map((eachBookMark) => {
    return posts?.find((post) => post._id === eachBookMark);
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      {bookmarkPost?.length === 0 ? (
        <Typography
          sx={{
            textAlign: "center",
            margin: "20px 0",
            fontWeight: "450",
            height: "100vh",
          }}
          variant="h4"
          component="h4"
        >
          You haven't BookMarked any post yet!
        </Typography>
      ) : (
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
                marginLeft: "20px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* Post Cards */}

              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontWeight: "250",
                  }}
                  variant="h5"
                  component="h5"
                >
                  BookMarked Posts
                </Typography>
                {bookmarkPost?.map((eachPost) => {
                  return <PostCard post={eachPost} key={eachPost._id} />;
                })}
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
