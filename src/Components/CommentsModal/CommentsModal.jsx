import * as React from "react";
import { Button, Box, Typography, Fade, Modal, Backdrop } from "@mui/material";

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
}) => {
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
                style={{ width: "100%", border: "none" }}
                placeholder="Enter Your Text Here"
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
