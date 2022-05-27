import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Bookmark, Comment } from "@mui/icons-material";
import "./PostCard.css";
import { EditDeletePost } from "../EditDeletePost/EditDeletePost";

const PostCard = () => {
  const [editDeleteModalOpen, setEditDeleteModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleEditDeleteModalOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setEditDeleteModalOpen(true);
  };
  const handleEditDeleteModalClose = () => {
    setAnchorEl(null);
    setEditDeleteModalOpen(false);
  };
  return (
    <>
      <Card className="card" sx={{ border: ".5px solid #e2e8f0" }}>
        <CardHeader
          className=""
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              AB
            </Avatar>
          }
          action={
            <IconButton
              aria-label="settings"
              onClick={handleEditDeleteModalOpen}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title="Adarsh Balika"
          subheader="May 14, 2022"
        />
        <EditDeletePost
          editDeleteModalOpen={editDeleteModalOpen}
          anchorEl={anchorEl}
          handleEditDeleteModalClose={handleEditDeleteModalClose}
        />
        <CardMedia
          component="img"
          height="250"
          image="https://res.cloudinary.com/dqgqdj4jf/image/upload/v1653161366/PalletGram/giethoorn-travel_ho6n6i.jpg"
          alt="Paella dish"
          sx={{ objectFit: "contain" }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive place is named as giethoorn village. So your day in
            Giethoorn should include a tour on an electric boat, canoe or
            traditional boat.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to bookmark">
            <Comment />
          </IconButton>
          <IconButton aria-label="add to bookmark">
            <Bookmark />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      {/* second post */}
      <Card className="card" sx={{ border: ".5px solid #e2e8f0" }}>
        <CardHeader
          className=""
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              AB
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Adarsh Balika"
          subheader="May 14, 2022"
        />
        {/* <CardMedia
      component="img"
      height="194"
      image="https://res.cloudinary.com/dqgqdj4jf/image/upload/v1652794400/PalletGram/dlwsi7ad0cfisk1iob5a.jpg"
      alt="Paella dish"
    /> */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive place is named as giethoorn village. So your day in
            Giethoorn should include a tour on an electric boat, canoe or
            traditional boat.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="add to bookmark">
            <Comment />
          </IconButton>
          <IconButton aria-label="add to bookmark">
            <Bookmark />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export { PostCard };