import React from "react";
import { StyledButton } from "./custom-button.styles";

const CustomButton = ({ children, ...defaultProps }) => {
  return <StyledButton {...defaultProps}>{children}</StyledButton>;
};

export default CustomButton;
