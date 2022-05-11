import "./App.css";
import { Route, Routes } from "react-router-dom";
import {HomePage, Signup} from "./Pages";
import {Toaster} from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/" element={< HomePage/>}></Route>
        <Route path="/signup" element={< Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
