import axios from "axios";

export const getUsers = () => {
    return axios.get("/api/users")
}

export const followUsersService = (followUserId, token) =>{
    return axios.post(`/api/users/follow/${followUserId}`,{}, {headers: {authorization :token}})
}

export const unfollowUsersService = () =>{
    return axios.post(`/api/users/unfollow/${followUserId}`,{}, {headers: {authorization :token}})
}
