import * as React from "react";
import { Button, Box, Typography, Fade, Modal, Backdrop } from "@mui/material";
import { postComments } from "../../store/postSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

export const CommentsModal = ({
  handleCommentsModelClose,
  commentsModelOpen,
  post
}) => {
  const [commentData, setCommentData] = React.useState('')
  const dispatch = useDispatch();
  const {token} = useSelector((state) => state.auth);

  const commentsByUser = () =>{
    if(commentData === ''){
      toast.error("Please write something to comment.", {position:"top-right"})
    }
    else{
        dispatch(postComments({postId: post._id, commentData: commentData, token: token }))
    }
    setCommentData("")
    handleCommentsModelClose()
  }


  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={commentsModelOpen}
        onClose={handleCommentsModelClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={commentsModelOpen}>
          <Box sx={style}>
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              Comment
            </Typography>
            <Box className="input-container">
              <Typography
                variant="textarea"
                component="textarea"
                style={{ width: "100%", border: "none", resize:'none' }}
                placeholder="Enter Your Text Here"
                value={commentData}
                onChange={(e) => setCommentData(e.target.value)}
              ></Typography>
            </Box>
            <div className="action-btn-container">
              <label htmlFor="icon-button-file"></label>
              <Button
                variant="contained"
                sx={{
                  padding: ".2rem .6rem",
                  height: "2rem",
                  borderRadius: ".3rem",
                }}
                onClick={() => commentsByUser()}
              >
                Post
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
