import styled from "styled-components";

export const FooterContainer = styled.div`
  grid-area: footer;
  background-color: #161a1e;
  border-top: 1px #252930 solid;
  padding: 2px 10px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const LeftFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #b7bdc6;

  & div {
    border-right: 1px #474d57 solid;
    display: flex;
    align-items: center;
  }

  & div span {
    margin: 5px;
    &.green {
      color: #0ecb81;
    }
    &.red {
      color: #f6465d;
    }
  }
`;

export const RightFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 12px;
  color: #b7bdc6;

  & div {
    border-left: 1px #474d57 solid;
    display: flex;
    align-items: center;
    padding: 0px 10px;
  }

  & div span {
    margin-left: 7px;
  }
`;