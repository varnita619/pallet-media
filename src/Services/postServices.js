import axios from "axios";


export const getPosts = () => {
    return axios.get("/api/posts")
}

export const likedPostService = (postId, token) => {
    return axios.post(`/api/posts/like/${postId}`,{}, {headers: {authorization: token}})
}

export const dislikedPostService = () => {
    return axios.post(`/api/posts/dislike/${postId}`,{}, {headers: {authorization: token}})
}
