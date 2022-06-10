import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, Signup, UserProfile, Explore, Bookmark, Home } from "./Pages";
import { Toaster } from "react-hot-toast";
import { Paper } from "@mui/material";
import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <Paper>
        <Toaster />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/user-profile/:username"
            element={token ? <UserProfile /> : <Login />}
          ></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route
            path="/explore"
            element={token ? <Explore /> : <Login />}
          ></Route>
          <Route
            path="/bookmark"
            element={token ? <Bookmark /> : <Login />}
          ></Route>
        </Routes>
      </Paper>
    </div>
  );
}

export default App;
