import styled from "styled-components";

export const MainContainer = styled.div`
  grid-area: main;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 20px;
  color: #848e9c;
  background-color: #161a1e;
  padding: 20px 0px 10px 15px;

  & span {
    margin-right: 16px;
    font-size: 15px;
    &.active {
      color: #f0b90b;
      font-weight: 600;
    }
    &:hover {
      color: #f0aa17;
      cursor: pointer;
    }
  }
`;
