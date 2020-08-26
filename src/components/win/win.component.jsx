import React from "react";
import { WinText, WinContainer } from "./win.styles";
import CustomButton from "../custom-button/custom-button.component";
import { withRouter } from "react-router-dom";

const Win = ({ history }) => {
  return (
    <WinContainer>
      <WinText>
        <span>"YOU</span>
        <span>WIN!"</span>
      </WinText>
      <CustomButton onClick={() => history.push("/")}>
        Back To HomePage
      </CustomButton>
    </WinContainer>
  );
};

export default withRouter(Win);
