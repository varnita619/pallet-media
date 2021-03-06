import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Avatar,
  Box,
  Button,
  Modal,
  Popover,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { editComments, deleteComments } from "../../store/postSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: "16px",
  borderRadius: "5px",
};

export const Comments = ({ comment, _id }) => {
  const { userInfo, token } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const [comments, setComments] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const editCommentsHandler = () => {
    dispatch(
      editComments({
        postId: _id,
        commentId: comment._id,
        commentData: comments,
        token: token,
      })
    );

    handleModalClose();
    handleClose();
  };

  const deleteCommentsHandler = () => {
    dispatch(
      deleteComments({
        postId: _id,
        commentId: comment._id,
        commentData: comments,
        token: token,
      })
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openModal, setOpenModal] = useState(false);
  const handleModalOpen = () => {
    setComments(comment.text);
    setOpenModal(true);
  };
  const handleModalClose = () => setOpenModal(false);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "0 16px 16px 16px",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={userInfo?.avatar}
          sx={{
            width: 30,
            height: 30,
            position: "relative",
            marginRight: "10px",
          }}
        />

        <Typography
          sx={{
            color: "#616161",
            fontSize: ".9rem",
            backgroundColor: grey[100],
            width: " 100%",
            padding: "0.5rem .5rem .5rem 1rem",
            borderRadius: "10px",
            fontFamily: "var(--kanit-font-family)",
          }}
          variant="h6"
          component="h6"
        >
          {comment.text}
          <MoreVertIcon
            onClick={handleClick}
            sx={{ cursor: "pointer", float: "right" }}
          />
        </Typography>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
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
            onClick={handleModalOpen}
            sx={{ fontSize: "16px", color: "black" }}
            variant="text"
          >
            Edit
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
          <Button
            onClick={() => deleteCommentsHandler()}
            sx={{ fontSize: "16px", color: "black" }}
            variant="text"
          >
            Delete
          </Button>
        </Typography>
      </Popover>

      <Modal
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Edit Comment
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "30px",
            }}
          >
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              style={{
                width: 300,
                border: "none",
                outline: "none",
                resize: "none",
              }}
            />
          </Box>
          <Button
            onClick={() => editCommentsHandler()}
            sx={{ color: "black", border: "1px solid #111 " }}
            variant="text"
          >
            Update
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
