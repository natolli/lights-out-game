import styled from "styled-components";

export const InsContainer = styled.div`
  width: 50%;
  margin: auto;
  display: flex;
  flex-direction: column;
  *:not(:last-child) {
    margin-bottom: 30px;
  }
  justify-content: center;
  align-items: center;
`;

export const InsTitle = styled.h1`
  font-size: 5rem;
`;

export const InsDetail = styled.p`
  font-size: 1.5rem;
  opacity: 0.9;
`;
