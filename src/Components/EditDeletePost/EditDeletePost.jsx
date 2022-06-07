import * as React from "react";
import Typography from "@mui/material/Typography";
import { Popover } from "@mui/material";
import { Button } from "@mui/material";
import { deletePost } from "../../store/postSlice";
import { UpdatePostModal } from "../../Components";
import { useSelector, useDispatch } from "react-redux";

export const EditDeletePost = ({
  editDeleteModalOpen,
  handleEditDeleteModalClose,
  anchorEl,
  post,
}) => {
  const [updatePostModalOpen, setUpdatePostModalOpen] = React.useState(false);
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleUpdatePostModalOpen = () => {
    setUpdatePostModalOpen(true);
  };

  const handleUpdatePostModalClose = () => {
    setUpdatePostModalOpen(false);
  };

  const deletePostHandler = () => {
    dispatch(deletePost({ postId: post._id, token: token }));
  };

  return (
    <>
      <UpdatePostModal
        updatePostModalOpen={updatePostModalOpen}
        handleUpdatePostModalClose={handleUpdatePostModalClose}
        post={post}
      />
      <Popover
        open={editDeleteModalOpen}
        onClose={handleEditDeleteModalClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography
          variant="p"
          component="p"
          sx={{
            borderBottom: "1px solid black",
            fontWeight: "bold",
            fontSize: "15px",
            textAlign: "center",
            p: 2,
          }}
        >
          <Button
            sx={{ color: "black" }}
            onClick={() => handleUpdatePostModalOpen()}
          >
            EDIT
          </Button>
        </Typography>
        <Typography
          variant="p"
          component="p"
          sx={{
            p: 2,
            fontSize: "15px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          <Button sx={{ color: "black" }} onClick={() => deletePostHandler()}>DELETE</Button>
        </Typography>
      </Popover>
    </>
  );
};
