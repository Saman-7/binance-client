import styled from "styled-components";

export const HeaderDetails = styled.div`
  display: flex;
  color: #848e9c;
  margin-left: 25px;

  & span {
    margin-right: 25px;
    font-weight: 500;
    font-size: 14px;
    padding: 15px 0px;

    &.active {
      color: #f0b90b;
      font-weight: 600;
    }
  }
`;

export const BodyDetails = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  color: white;

  & span {
    margin: 0px 5px;
    color: #f0b90b;
    font-size: 14px;
  }
`;
