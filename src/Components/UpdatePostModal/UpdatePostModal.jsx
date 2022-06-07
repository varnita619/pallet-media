import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Box,
  IconButton,
  Typography,
  Fade,
  Modal,
  Backdrop,
  Paper,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ThemeProvider } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { theme } from "../../theme";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { editPost, deletePost } from "../../store/postSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: ".5px solid #000",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const Input = styled("input")({
  display: "none",
});

export const UpdatePostModal = ({
  updatePostModalOpen,
  handleUpdatePostModalClose,
  post,
}) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [postData, setPostData] = React.useState({
    content: post?.content,
    imgUrl: post?.imgUrl,
  });
  const [name, setName] = React.useState("");

  const updatePostHandler = () => {
    if (postData.imgUrl) {
      const file = postData.imgUrl;
      setName(file.name);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (reader.readyState === 2) {
          dispatch(
            editPost({
              id: post._id,
              content: postData.content,
              imgUrl: reader.result,
              token: token,
            })
          );
        }
      };
    } else {
      dispatch(
        editPost({
          id: post._id,
          content: postData.content,
          token: token,
        })
      );
      toast.success("Post Updated");
      handleUpdatePostModalClose()
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={updatePostModalOpen}
            onClose={handleUpdatePostModalClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={updatePostModalOpen}>
              <Box sx={style}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  Update Post
                  <span>
                    <CloseIcon
                      onClick={handleUpdatePostModalClose}
                      sx={{ cursor: "pointer" }}
                    />
                  </span>
                </Typography>
                <div className="input-container">
                  <Typography
                    variant="textarea"
                    component="textarea"
                    style={{ width: "100%", border: "none" }}
                    placeholder="What's Happening?"
                    value={postData.content}
                    onChange={(event) =>
                      setPostData((prev) => ({
                        ...prev,
                        content: event.target.value,
                      }))
                    }
                  ></Typography>
                </div>
                <div className="action-btn-container">
                  <label htmlFor="icon-button-file">
                    <Input
                      accept="image/*"
                      id="icon-button-file"
                      type="file"
                      onChange={(event) =>
                        setPostData((prev) => ({
                          ...prev,
                          imgUrl: event.target.files[0],
                        }))
                      }
                    />
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                    {name}
                  </label>
                  <Button
                    variant="contained"
                    sx={{
                      padding: ".2rem .6rem",
                      height: "2rem",
                      borderRadius: ".3rem",
                    }}
                    onClick={() => updatePostHandler()}
                  >
                    Post
                  </Button>
                </div>
              </Box>
            </Fade>
          </Modal>
        </div>
      </Paper>
    </ThemeProvider>
  );
};
