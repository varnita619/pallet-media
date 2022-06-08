import * as React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, CardHeader, Modal, Typography } from "@mui/material";

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

export const FollowersModal = ({
  handleFollowersModalClose,
  followersModalOpen,
  followers,
}) => {
  return (
    <div>
      <Modal
        open={followersModalOpen}
        onClose={handleFollowersModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {followers.length > 0 ? (
          <Box sx={style}>
            <Typography
              sx={{
                cursor: "pointer",
              }}
              variant="h5"
              component="span"
            >
              Folllowers
            </Typography>
            {followers.map((user) => (
              <Box key={user._id}>
                <Link
                  onClick={handleFollowersModalClose}
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
              No Followers Yet
            </Typography>
          </Box>
        )}
      </Modal>
    </div>
  );
};
