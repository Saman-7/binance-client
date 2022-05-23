import styled from "styled-components";

export const ChangePairContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0px;
    color: #848e9c;
    border: 1px #252930 solid;
    font-weight: 700;

    &:hover,
    &.active {
      cursor: pointer;
      color: #f0b901;
    }
  }
`;
