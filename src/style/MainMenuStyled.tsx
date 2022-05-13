import styled from "styled-components";

export const MainMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50vh;
  height: 100vh;
  z-index: 1000;
  background-color: #1e2329;
  color: #eaecef;
  overflow: auto;
  animation: changeX 0.5s ease-out 1;
  ::-webkit-scrollbar {
    display: none;
  }

  @keyframes changeX {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
`;

export const CloseMenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 16px;
`;

export const MenuLogin = styled.div`
  flex-direction: column;
  padding: 16px;
  width: 100%;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    margin-bottom: 10px;
    border-radius: 4px;
    &:nth-child(2) {
      background-color: #fcd535;
      color: black;
      &:hover {
        color: black;
        background-color: #e5c334;
      }
    }

    &:hover {
      color: #f0aa17;
      cursor: pointer;
    }
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px;

  & svg {
    width: 24px;
    height: 24px;
    color: #848e9c;
  }

  & span {
    font-size: 16px;
    margin-left: 7px;
  }

  &:hover {
    cursor: pointer;
    background-color: #2b3139;
    & svg {
      color: #f0b90b;
    }
  }
`;
