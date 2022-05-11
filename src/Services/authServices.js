import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { authInfo, getToken } from "../store/authSlice";


const authServices = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginService = async (login) => {

        try {
            const {
                status,
                data: { encodedToken, foundUser },
            } = await axios.post("/api/auth/login", login);
            localStorage.setItem("login-Token", encodedToken);
            localStorage.setItem("user", JSON.stringify(foundUser));

            if (status === 200) {
                toast.success(`Welcome ${login.username}`, {
                    position: "top-right"
                });
                navigate("/signup")

                //Updating initial States
                dispatch(authInfo(foundUser));
                dispatch(getToken(encodedToken));
            }

        } catch (error) {
            console.log(error)
            toast.error("Error occured in logging in!", { position: "top-right" });
        }
    }

    const signupService = async (formData) => {
        console.log(formData)
        try {
            const {
                status,
            } = await axios.post("/api/auth/signup", formData);

            if (status === 201) {
                navigate("/");
                toast.success(`Welcome ${formData.firstName} Login to proceed further`, { position: "top-right" });
            }
        }
        catch (error) {
            toast.error("Error occured in Signup!", { position: "top-right" });
        }
    }

    return { loginService, signupService }
}

export { authServices }
