import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
const HomePage = () => {
  return (
    <div className=" main-container flex justify-center items-center">
      <div className="home-img">
        <img src="./img/home-img.png" alt="phone" className="original-img" />
        <img src="./img/mobile-img1.png" alt="screens" className="small-img" />
        <img src="./img/mobile-img3.png" alt="screens" className="small-img" />
        <img src="./img/mobile-img2.png" alt="screens" className="small-img" />
      </div>

      <form className=" auth-container border-2">
        <h1 className="text-3xl font-bold italic text-center py-2">Pallet</h1>
        <div className="flex justify-center flex-col gap-2 items-center mt-2">
          <input
            className="py-1 w-full border"
            type="text"
            placeholder="Username"
            name="email"
            autoComplete="true"
            required
          />

          <input
            className="py-1 w-full border"
            type="password"
            placeholder="password"
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
          <Link to="/signup">Don't have an account ? </Link>
        </div>
      </form>
    </div>
  );
};

export { HomePage };
