import styled, { keyframes } from "styled-components";

export const HomeContaier = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Codystar:300&display=swap");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  *:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const lightEffect = keyframes`
    from {
      color: #fff;
      text-shadow: 0 0 10px #00fff2, 0 0 20px #00fff2, 0 0 30px #00fff2,
        0 0 40px #00fff2, 0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2,
        0 0 90px #00fff2;
    }

    to {
      color: gray;
      text-shadow: 0 0 20px #00fff2, 0 0 30px #00fff2, 0 0 40px #00fff2,
        0 0 50px #00fff2, 0 0 60px #00fff2, 0 0 70px #00fff2, 0 0 80px #00fff2,
        0 1 90px #00fff2;
    }
`;

export const HomeTitle = styled.h1`
  font-family: "Codystar";
  font-size: 7rem;
  text-align: center;
  font-weight: bold;
  -webkit-animation: ${lightEffect} 2s ease-in-out infinite alternate;
  -moz-animation: ${lightEffect} 2s ease-in-out infinite alternate;
  animation: ${lightEffect} 2s ease-in-out infinite alternate;
`;
