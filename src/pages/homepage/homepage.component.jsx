import React from "react";
import { HomeContaier, HomeTitle } from "./homepage.styles";
import CustomButton from "../../components/custom-button/custom-button.component";

const HomePage = ({ history }) => {
  return (
    <HomeContaier>
      <HomeTitle>Lights Out</HomeTitle>
      <CustomButton>Start</CustomButton>
      <CustomButton onClick={() => history.push("/instruction")}>
        How To Play
      </CustomButton>
      <CustomButton onClick={() => history.push("/about")}>About</CustomButton>
    </HomeContaier>
  );
};

export default HomePage;
