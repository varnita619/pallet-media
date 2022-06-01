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

  return (
    <Box>
      <NavBar />
      <Box className="user-profile-container">
        <Box>
          {posts.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            width: "39%",
            margin: "0 0px",
          }}
        >
          <SuggestionsSideBar />
        </Box>
      </Box>
    </Box>
  );
};
