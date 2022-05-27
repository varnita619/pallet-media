import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, Signup, UserProfile } from "./Pages";
import { Toaster } from "react-hot-toast";
import { Paper } from "@mui/material";

function App() {

  return (
    <div className="App">
      <Paper>
      <Toaster />
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/user-profile" element={<UserProfile />}></Route>
      </Routes>
      </Paper>
    </div>
  );
}

export default App;
