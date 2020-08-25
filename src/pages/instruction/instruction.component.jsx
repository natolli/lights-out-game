import React from "react";
import { InsContainer, InsDetail, InsTitle } from "./instruction.styles";
import CustomButton from "../../components/custom-button/custom-button.component";

const Instruction = ({ history }) => {
  return (
    <InsContainer>
      <InsTitle>Lights Out! Instructions</InsTitle>
      <InsDetail>
        The game consists of a 5 by 5 grid of lights. When the game starts, a
        random number or a stored pattern of these lights is switched on.
        Pressing any of the lights will toggle it and the adjacent lights. The
        goal of the puzzle is to switch all the lights off, preferably in as few
        button presses as possible.
      </InsDetail>
      <CustomButton onClick={() => history.push("/")}>Back</CustomButton>
    </InsContainer>
  );
};

export default Instruction;
