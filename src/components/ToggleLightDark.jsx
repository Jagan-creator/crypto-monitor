import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeConditions";
import { HiSun, HiMoon } from "react-icons/hi";

const ToggleLightDark = () => {
  // Access theme state and theme switch function from the context
  const { theme, setTheme } = useContext(ThemeContext);

  // Switch between dark and light themes
  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const renderMode = (modeIcon, modeText) => (
    // Display for both dark and light modes, with icon and text
    <div
      className="flex items-center cursor-pointer"
      onClick={switchTheme}
    >
      {React.cloneElement(modeIcon, {
        className: "text-primary text-2xl mr-2",
      })}
      {modeText}
    </div>
  );

  return (
    <div className="p-2">
      {theme === "dark"
        ? renderMode(<HiSun />, "Light Mode")
        : renderMode(<HiMoon />, "Dark Mode")}
    </div>
  );
};

export default ToggleLightDark;
