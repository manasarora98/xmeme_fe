import React from "react";
import useDarkMode from "use-dark-mode";
import Toggle from "./Toggle";

/*
* DarkModeToggle js component is to display a customized Toggle for switching to dark mode.
*/

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
    </div>
  );
};

export default DarkModeToggle;
