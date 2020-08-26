import styled, { keyframes } from "styled-components";

export const WinContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  align-items: center;
  justify-content: flex-end;
  *:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const bob = keyframes`
    0% {
    transform: scale(0.9);
  }
  50%,
  100% {
    transform: scale(1);
  }
`;

const bobB = keyframes`
    0% {
    transform: scale(0.9);
  }
  80%,
  100% {
    transform: scale(1) rotateZ(-3deg);
  }
`;

export const WinText = styled.h1`
  margin: 0;
  font-size: 10em;
  padding: 0;
  color: white;
  text-shadow: 0 0.1em 20px rgba(0, 0, 0, 1), 0.05em -0.03em 0 rgba(0, 0, 0, 1),
    0.05em 0.005em 0 rgba(0, 0, 0, 1), 0em 0.08em 0 rgba(0, 0, 0, 1),
    0.05em 0.08em 0 rgba(0, 0, 0, 1), 0px -0.03em 0 rgba(0, 0, 0, 1),
    -0.03em -0.03em 0 rgba(0, 0, 0, 1), -0.03em 0.08em 0 rgba(0, 0, 0, 1),
    -0.03em 0 0 rgba(0, 0, 0, 1);
  span {
    transform: scale(0.9);
    display: inline-block;
  }
  span:first-child {
    animation: ${bob} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }
  span:last-child {
    animation: ${bobB} 1s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards
      infinite alternate;
  }
`;
