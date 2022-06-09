import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { followUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const SuggestionsSideBar = () => {
  const { users } = useSelector((state) => state.users);
  const { userInfo, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // filter user on the basis of user name for follow/ unfollow

  const currentUser = users?.find(
    (each) => each.username === userInfo.username
  );

  const currentUserFollowing = currentUser?.following;

  const userSuggestion = [...users].filter(
    (eachUser) =>
      !currentUserFollowing.find(
        (each) => eachUser.username === each.username
      ) && eachUser.username !== currentUser.username
  );

  return (
    <Box display={{ lg: "block", xs: "none" }}>
      <List
        className="suggestions-main-container"
        dense
        sx={{
          width: "100%",
          height: "100vh",
          maxWidth: 310,
          bgcolor: "background.paper",
          paddingTop: 0,
          borderLeft: "2px solid #e6e1e1dd",
          position: "sticky",
          top: "0",
          padding: "1rem",
        }}
      >
        <h3>Suggestions for you</h3>
        {userSuggestion.map((users) => {
          return (
            <ListItem key={users._id}>
              <ListItemButton
                onClick={() => navigate(`/user-profile/${users.username}`)}
              >
                <ListItemAvatar>
                  <Avatar alt={users.username} src={users.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={users.firstName + " " + users.lastName}
                />
              </ListItemButton>
              <Button
                onClick={() => {
                  dispatch(
                    followUser({ followUserId: users._id, token: token })
                  );
                }}
                variant="contained"
                sx={{ padding: "6px 10px", borderRadius: "5px" }}
              >
                Follow
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
