import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Avatar, Box, Button, Input, Modal, Typography } from "@mui/material";

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

const EditProfile = ({ handleEditModalClose, editModalOpen }) => {
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
            alt="John Doe"
            src="./img/user.jpg"
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
              <Typography
                variant="h5"
                component="h5"
              >
                Name
              </Typography>
              <Typography
                variant="h5"
                component="h5"
              >
                John Doe
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
                variant="p"
                component="p"
              >
                Username
              </Typography>
              <Typography
                variant="p"
                component="p"
              >
                johndoe
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
              <Input value="Bio" />
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
              <Input value="http://localhost:3000/user-profile" />
            </Box>
          </Box>
          <Button variant="contained">Update</Button>
        </Box>
      </Modal>
    </>
  );
};

export { EditProfile };
