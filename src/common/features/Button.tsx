import React from "react";
import MuiButton from "@mui/material/Button";

interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger";
  onClick?: () => void;
  isDisabled?: boolean;
  size?: "small" | "medium" | "large";
  color?: "inherit";
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  isDisabled = false,
  size = "medium",
  color,
}) => {
  return (
    <MuiButton
      className={`btn ${variant} ${size} ${color}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
