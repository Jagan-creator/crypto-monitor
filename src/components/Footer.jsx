import React from "react";
import ToggleLightDark from "./ToggleLightDark";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2 mx-6">
        {/* Left content: Support and Information */}
        <div className="flex w-full md:max-w-[300px] uppercase">
          <div className="mr-6">{renderSupportInfo()}</div>
          <div className="mr-6">{renderInformation()}</div>
        </div>

        {/* Right content: Toggle, Signup Form, and Social Icons */}
        {renderRightContent()}
      </div>

      <p className="text-center py-4">Powered by Coin Gecko</p>
    </div>
  );
};

const renderSupportInfo = () => (
  <div>
    <h2 className="font-bold">Support</h2>
    <ul>
      <li className="text-sm py-2">Contact Us</li>
      <li className="text-sm py-2">Customer Support</li>
      <li className="text-sm py-2">API Status</li>
      <li className="text-sm py-2">Documentation</li>
    </ul>
  </div>
);

const renderInformation = () => (
  <div>
    <h2 className="font-bold">Information</h2>
    <ul>
      <li className="text-sm py-2">Legal</li>
      <li className="text-sm py-2">Careers</li>
      <li className="text-sm py-2">About Us</li>
      <li className="text-sm py-2">Invest</li>
    </ul>
  </div>
);

// Render right content
const renderRightContent = () => (
  <div className="text-right">
    <div className="w-full flex justify-end">
      <div className="w-full md:w-[300px] py-4 relative">
        {renderToggleLightDark()}
        <p className="text-center md:text-right">Sign up for crypto news</p>
        {renderEmailSignupForm()}
        {renderSocialIcons()}
      </div>
    </div>
  </div>
);

const renderToggleLightDark = () => (
  <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
    <ToggleLightDark />
  </div>
);

const renderEmailSignupForm = () => (
  <div className="py-4">
    <form>
      <input
        className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
        type="email"
        placeholder="Enter your email"
      />
      <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">
        Sign up
      </button>
    </form>
  </div>
);

// Render social icons
const renderSocialIcons = () => (
  <div className="flex py-4 justify-between text-accent">
    <AiOutlineInstagram />
    <FaTiktok />
    <FaTwitter />
    <FaFacebookF />
    <FaGithub />
  </div>
);

export default Footer;
