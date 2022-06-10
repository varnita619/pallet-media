import axios from "axios";


export const getPosts = () => {
  return axios.get("/api/posts")
}

export const likedPostService = (postId, token) => {
  return axios.post(`/api/posts/like/${postId}`, {}, { headers: { authorization: token } })
}

export const dislikedPostService = (postId, token) => {
  return axios.post(`/api/posts/dislike/${postId}`, {}, { headers: { authorization: token } })
}

export const bookmarkService = (postId, token) => {
  return axios.post(`/api/users/bookmark/${postId}`, {}, { headers: { authorization: token } })
}

export const removeBookmarkService = (postId, token) => {
  return axios.post(`/api/users/remove-bookmark/${postId}`, {}, { headers: { authorization: token } })
}

export const getCommentsServices = (postId, token) => {
  return axios.get(`/api/comments/${postId}`, { headers: { authorization: token, }, });
}

export const postCommentsServices = (postId, commentData, token) => {
  return axios.post(`/api/comments/add/${postId}`, { commentData }, { headers: { authorization: token, }, },);
}

export const editCommentsServices = (postId, commentId, commentData, token) =>
  axios.post(
    `/api/comments/edit/${postId}/${commentId}`,
    { commentData },
    {
      headers: {
        authorization: token,
      },
    },
  );

export const deleteCommentsServices = (postId, commentId, token) =>
  axios.delete(`/api/comments/delete/${postId}/${commentId}`, {
    headers: {
      authorization: token,
    },
  });

export const deletePostServices = (postId, token) => {
  return axios.delete(`/api/posts/${postId}`, { headers: { authorization: token } })
}

export const getUserPostServices = (username) => { return axios.get(`/api/posts/user/${username}`); }
