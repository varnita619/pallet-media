import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";
import { NavBar, PostCard, SuggestionsSideBar } from "../../Components";
import { getAllPosts } from "../../store/postSlice";

export const Explore = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);
  console.log(posts);

  return (
    <>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "29%",
          margin: "0 0px",
        }}
      >
        <SuggestionsSideBar />
      </Box>
    </>
  );
};
