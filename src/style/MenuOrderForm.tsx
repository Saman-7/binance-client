import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: #1e2026;
  font-size: 14px;
  color: white;
  font-weight: 700;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0px 5px;
    border-radius: 4px;
    padding: 12px 0px;
    user-select: none;
    cursor: pointer;
  }

  & .buy-menu {
    background-color: #0ecb81;
  }
  & .sell-menu {
    background-color: #f6465d;
  }
`;
