import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red,grey} from "@mui/material/colors";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { Comment } from "@mui/icons-material";
import "./PostCard.css";
import { EditDeletePost, CommentsModal } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { likedPosts, dislikedPosts } from "../../store/postSlice";

export const PostCard = ({ post }) => {
  const { userInfo, token } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [editDeleteModalOpen, setEditDeleteModalOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [commentsModelOpen, setCommentsModelOpen] = React.useState(false);
  const { content, _id, imgUrl, likes } = post;
  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    setCurrentUser(users.filter((userInfo) => userInfo.username === post.username)[0]);
  }, [post, userInfo, users, currentUser]);

  console.log(post)

  console.log(currentUser)

  const likeByUser = () =>
    post.likes.likedBy.filter((users) => users.username === userInfo.username)
      .length !== 0;

  const likesHandler = () => {
    if (likeByUser()) {
      dispatch(dislikedPosts({ postId: _id, token: token }));
    } else {
      dispatch(likedPosts({ postId: _id, token: token }));
    }
  };

  function copy() {
    const el = document.createElement("input");
    el.value = `` + post._id;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  const handleCommentsModelOpen = () => setCommentsModelOpen(true);
  const handleCommentsModelClose = () => setCommentsModelOpen(false);

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
      <CommentsModal
        commentsModelOpen={commentsModelOpen}
        handleCommentsModelClose={handleCommentsModelClose}
      />
      <Card className="card" sx={{ border: ".5px solid #e2e8f0" }}>
        <CardHeader
          className=""
          avatar={
            <Avatar sx={{ bgcolor: grey[50] }} aria-label="recipe" src={currentUser?.avatar}>
              {currentUser?.username}
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
          title={currentUser?.firstName + ' ' + currentUser?.lastName}
          subheader="June 5, 2022"
        />
        <EditDeletePost
          editDeleteModalOpen={editDeleteModalOpen}
          anchorEl={anchorEl}
          handleEditDeleteModalClose={handleEditDeleteModalClose}
        />
        {imgUrl ? (
          <CardMedia
            component="img"
            height="250"
            image={imgUrl}
            alt="Paella dish"
            sx={{ objectFit: "contain" }}
          />
        ) : (
          ""
        )}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          {likes?.likeCount}
          <IconButton
            aria-label="add to favorites"
            onClick={() => likesHandler()}
          >
            {likeByUser() ? (
              <FavoriteIcon sx={{ color: red[500] }} />
            ) : (
              <FavoriteBorderOutlinedIcon />
            )}
          </IconButton>

          <IconButton
            aria-label="add to bookmark"
            onClick={handleCommentsModelOpen}
          >
            <Comment />
          </IconButton>

          <IconButton aria-label="add to bookmark">
            <BookmarkBorderIcon />
          </IconButton>

          <IconButton aria-label="share" onClick={copy}>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};
