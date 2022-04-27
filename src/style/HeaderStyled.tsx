import styled from "styled-components";

export const HeaderContainer = styled.header`
  grid-area: header;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161a1e;
  color: white;
  border-bottom: 1px #252930 solid;
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  &.box-nav {
    & span {
      margin: 0px 8px;
      & span {
        font-size: 12px;
        padding: 1px;
        background-color: #fcd535;
        color: black;
        border-radius: 4px;
        margin-left: 5px;
      }
    }
  }

  &.box-set {
    & span {
      margin: 0px 10px;
    }
  }

  & .register {
    background-color: #fcd535;
    color: black;
    padding: 6px 12px;
    border-radius: 4px;
  }
`;
