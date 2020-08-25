import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  color: #5dacfc;
  *:not(:last-child) {
    margin-bottom: 30px;
  }
  justify-content: center;
  align-items: center;
`;

export const AboutTitle = styled.h1`
  font-size: 5rem;
`;

export const AboutDetail = styled.p`
  font-size: 2rem;
`;
export const Author = styled.h2`
  font-style: italic;
  span {
    font-style: normal;
    font-size: 3rem;
    font-weight: 100;
  }
`;
