import { FC } from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1000;
`;

const Column = styled.span`
  width: 5px;
  height: 20px;
  background-color: #f0b90b;
  margin: 5px;
  animation: changeY 2s ease-in-out infinite;

  @keyframes changeY {
    15% {
      transform: scaleY(3);
    }
    30% {
      transform: scaleY(1);
    }
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }
  &:nth-child(5) {
    animation-delay: 0.5s;
  }
`;

const Loading: FC = () => {
  return (
    <LoadingContainer>
      <Column />
      <Column />
      <Column />
      <Column />
      <Column />
    </LoadingContainer>
  );
};

export default Loading;
