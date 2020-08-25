import React from "react";
import {
  AboutContainer,
  AboutDetail,
  AboutTitle,
  Author,
} from "./about.styles";
import CustomButton from "../../components/custom-button/custom-button.component";

const About = ({ history }) => {
  return (
    <AboutContainer>
      <AboutTitle>About The APP</AboutTitle>
      <AboutDetail>
        This is a simple lights out game created by react using create-react-app
        and uses the latest features like hooks to handle state. It has no
        backend server.
      </AboutDetail>
      <Author>
        Created By: <span>Natoli Lemma</span>
      </Author>
      <CustomButton onClick={() => history.push("/")}>Back</CustomButton>
    </AboutContainer>
  );
};

export default About;
