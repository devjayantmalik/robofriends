import React from "react";

const ThemeToggleButton = () => {
  const toggleTheme = () => {
    if (document.body.classList.contains("theme-light")) {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
    }
  };

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme} className="theme-switch-button">
        Theme
      </button>
    </div>
  );
};

export default ThemeToggleButton;
