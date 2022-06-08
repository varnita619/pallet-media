import * as React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  CardHeader,
  Modal,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
  p: 4,
};

export const FollowingModal = ({
  followingModalOpen,
  handleFollowingModalClose,
  following,
}) => {
  const { userInfo } = useSelector((state) => state.auth);
  return (
    <div>
      <Modal
        open={followingModalOpen}
        onClose={handleFollowingModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {following.length > 0 ? (
          <Box sx={style}>
            <Typography
              sx={{
                cursor: "pointer",
              }}
              variant="h5"
              component="span"
            >
              Following
            </Typography>
            {following.map((user) => (
              <Box key={user._id}>
                <Link
                  onClick={handleFollowingModalClose}
                  to={`/user-profile/${user?.username}`}
                  style={{ textDecoration: 'none' }}
                >
                  <CardHeader
                    titleTypographyProps={{
                      sx: { fontSize:'15px', color:"black", fontWeight:'bold' },
                    }}
                    avatar={<Avatar src={user?.avatar} aria-label="recipe" />}
                    title={user?.firstName + " " + user?.lastName}
                    subheader={`@${user?.username}`}
                  />
                </Link>
              </Box>
            ))}
          </Box>
        ) : (
          <Box sx={style}>
            <Typography
              sx={{ textAlign: "center" }}
              variant="h6"
              component="h6"
            >
              No Following Yet
            </Typography>
          </Box>
        )}
      </Modal>
    </div>
  );
};
