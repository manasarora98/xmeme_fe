import React from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

/*
* Toggle is to display additional toggle facility to dark mode.
*/

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <DarkModeToggle
      onChange={onChange}
      checked={checked}
      size={80}
    />
  </span>
);

export default Toggle;