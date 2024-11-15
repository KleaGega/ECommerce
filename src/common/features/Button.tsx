import React from "react";
import MuiButton from "@mui/material/Button";
import { SxProps, Theme } from "@mui/system";
interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "danger" | "contained" | "outlined";
  onClick?: () => void;
  isDisabled?: boolean;
  size?: "small" | "medium" | "large";
  color?: "inherit" | "primary";
  sx?: SxProps<Theme>;
}

const Button: React.FC<ButtonProps> = ({
  text,
  variant = "primary",
  onClick,
  isDisabled = false,
  size = "medium",
  color,
  sx,
}) => {
  return (
    <MuiButton
      className={`btn ${variant} ${size} ${color}`}
      onClick={onClick}
      disabled={isDisabled}
      sx={sx}
    >
      {text}
    </MuiButton>
  );
};

export default Button;
