import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Avatar, Box, Button, Input, Modal, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProfile } from "../../store/userSlice";
import toast from "react-hot-toast";

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

export const EditProfile = ({ handleEditModalClose, editModalOpen }) => {
  const dispatch = useDispatch();
  const { userInfo, token } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    bio: userInfo.bio,
    website: userInfo.website,
    avatar: userInfo.avatar,
  });

  const updateImage = (img) => {
    const file = img;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData((prev) => ({
          ...prev,
          avatar: reader.result,
        }));
      }
    };
  };

  const updatePostHandler = (e) => {
    e.preventDefault();
    dispatch(
      editProfile({
        bio: userData.bio,
        website: userData.website,
        avatar: userData.avatar,
        token: token,
      })
    );

    toast.success("User Details Updated");
    handleEditModalClose();
  };

  return (
    <>
      <Modal
        open={editModalOpen}
        onClose={handleEditModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            alt={userInfo.username}
            src={userData.avatar}
            sx={{ width: 100, height: 100, position: "relative" }}
          />
          <Box sx={{ cursor: "pointer" }} htmlFor="avatar" component="label">
            <CameraAltIcon
              sx={{ position: "absolute", top: "6rem", left: "7rem" }}
            />
            <Input
              sx={{ display: "none" }}
              id="avatar"
              name="avatar"
              type="file"
              accept="image/*"
              onChange={(event) => updateImage(event.target.files[0])}
            />
          </Box>

          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "2rem 0 0 0",
              }}
            >
              <Typography variant="h5" component="h5">
                Name
              </Typography>
              <Typography variant="h5" component="h5">
                {userInfo.firstName + " " + userInfo.lastName}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="p" component="p">
                Username
              </Typography>
              <Typography variant="p" component="p">
                {userInfo.username}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  padding: " 1rem 0 ",
                  fontFamily: "var(--kanit-font-family)",
                }}
                variant="p"
                component="p"
              >
                Bio
              </Typography>
              <Input
                value={userData.bio}
                onChange={(event) =>
                  setUserData((prev) => ({
                    ...prev,
                    bio: event.target.value,
                  }))
                }
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  padding: " 1rem 0 ",
                  fontFamily: "var(--kanit-font-family)",
                }}
                variant="p"
                component="p"
              >
                Website
              </Typography>
              <Input
                value={userData.website}
                onChange={(event) =>
                  setUserData((prev) => ({
                    ...prev,
                    website: event.target.value,
                  }))
                }
              />
            </Box>
          </Box>
          <Button variant="contained" onClick={(e) => updatePostHandler(e)}>
            Update
          </Button>
        </Box>
      </Modal>
    </>
  );
};
