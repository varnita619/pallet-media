import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className=" main-container flex justify-center items-center">
      <div className="home-img">
        <img src="./img/home-img.png" alt="" className="original-img" />
        <img src="./img/mobile-img1.png" alt="" className="small-img1" />
        <img src="./img/mobile-img2.png" alt="" className="small-img1" />
        <img src="./img/mobile-img3.png" alt="" className="small-img1" />
        <img src="./img/mobile-img4.png" alt="" className="small-img1" />
      </div>

      <form className=" auth-container">
        <h1 className="text-3xl font-bold italic text-center py-2">Pallet</h1>
        <div className="flex justify-center flex-col gap-2 items-center mt-2">
          <input
            className="py-1 w-full border"
            type="text"
            placeholder="Enter Email - test@gmail.com"
            name="email"
            autoComplete="true"
            required
          />

          <input
            className="py-1 w-full border"
            type="password"
            placeholder="test123"
            name="psw"
            autoComplete="true"
            required
          />

          <div className="login-btn-div mt-2">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </div>

        <div className="have-account text-center mt-2">
          <Link to="/">Don't have an account ? </Link>
        </div>
      </form>
    </div>
  );
};

export { HomePage };
