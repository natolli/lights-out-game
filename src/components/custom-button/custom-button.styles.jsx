import styled from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  background: none;
  color: aqua;
  text-transform: uppercase;
  text-decoration: none;
  border: 0.2em solid aqua;
  padding: 0.5em 1em;
  cursor: pointer;
  font-size: 1.5rem;
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #0f1923;
    height: 0.3em;
    right: 20%;
    top: -0.21em;
    transform: skewX(-45deg);
    -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 10%;
    background: #0f1923;
    height: 0.3em;
    left: 20%;
    bottom: -0.25em;
    transform: skewX(45deg);
    -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
    transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:hover {
    &::before {
      right: 80%;
    }
    &::after {
      left: 80%;
    }
  }
  &:focus {
    outline: none;
  }
`;
