import "./App.css";
import { Route, Routes } from "react-router-dom";
import {HomePage, Signup} from "./Pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={< HomePage/>}></Route>
        <Route path="/signup" element={< Signup/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
