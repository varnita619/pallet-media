import * as React from "react";
import Typography from "@mui/material/Typography";
import { Popover } from "@mui/material";
import { Button } from "@mui/material";

export const EditDeletePost = ({
  editDeleteModalOpen,
  handleEditDeleteModalClose,
  anchorEl,
}) => {
  return (
    <>
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
          <Button sx={{ color:'black'}}>EDIT</Button>
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
          <Button sx={{ color:'black'}}>DELETE</Button>
        </Typography>
      </Popover>
    </>
  );
};
