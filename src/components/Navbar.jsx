import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ToggleLightDark from "./ToggleLightDark";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [nav, setNav] = useState(false);
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    // Navbar container
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link
        className="ml-6"
        to="/"
      >
        <h1 className="text-2xl">CRYPTO MONITOR</h1>
      </Link>

      <div className="hidden md:block">
        <ToggleLightDark />
      </div>

      {user?.email ? (
        <div className="mr-6">
          <Link
            to="/account"
            className="p-4"
          >
            Account
          </Link>
          <button onClick={handleSignOut}>Sign out</button>
        </div>
      ) : (
        <div className="hidden md:block">
          <Link
            to="/login"
            className="p-4 hover:text-accent"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl"
          >
            Register
          </Link>
        </div>
      )}

      {/* Menu icon (Visible on small screens) */}
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer z-10"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile menu */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li
            onClick={handleNav}
            className="border-b py-6"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={handleNav}
            className="border-b py-6"
          >
            <Link to="/account">Account</Link>
          </li>
          <li
            onClick={handleNav}
            className="border-b py-6"
          >
            <ToggleLightDark />
          </li>
        </ul>

        {/* Mobile menu buttons */}
        <div className="flex flex-col w-full p-4">
          <Link to="/login">
            <button
              onClick={handleNav}
              className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              onClick={handleNav}
              className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl"
            >
              Register
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
