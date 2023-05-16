import React from "react";

interface ToggleSwitchProps {
  Name: string;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ Name }) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={Name}
        id={Name}
      />
      <label className="toggle-switch-label" htmlFor={Name}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleSwitch;
