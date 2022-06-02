import axios from "axios";


export const getPosts = () => {
    return axios.get("/api/posts")
}

// export const createPost = (postData, token) => {
//     return axios.post("/api/posts", { postData: { content: content, imgUrl: imgUrl, token: token } }, { headers: { authorization: token } })
// }
