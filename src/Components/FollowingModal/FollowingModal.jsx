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
import { useDispatch,useSelector } from "react-redux";
import {unfollowUser} from "../../store/userSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
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
  const {token} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
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
              <Box key={user._id} sx={{display:'flex', justifyContent:'space-between'}}>
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
                <Box sx={{padding:'6px'}}>
                <Button variant="outlined" sx={{borderRadius:'10px', padding:'10px', textTransform:'inherit'}} onClick={() => dispatch(unfollowUser({followUserId: user._id, token: token}))}>Unfollow</Button>
                </Box>
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
