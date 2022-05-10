import styled from "styled-components";

export const DailyHostoryContainer = styled.div`
  grid-area: daily;
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161a1e;
  color: white;
  border-bottom: 1px #252930 solid;

  & div div p {
    margin: 5px 0px;
    font-size: 12px;
  }

  @media (max-width: 767px) {
    border-bottom: 7px #14151a solid;
  }
`;

export const SectionDaily = styled.div`
  &.left {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & div div {
      margin: 0px 13px;
      & .head {
        color: #848e9c;
      }
    }
  }

  &.right {
    margin-right: 10px;

    & div {
      display: flex;
      color: #848e9c;
      font-size: 13px;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & h1 {
    margin: 0px 15px;
    font-size: 20px;
    font-weight: 500;
  }

  & .bitcoin-price {
    text-decoration: underline;
    font-size: 13px;
    color: #848e9c;
  }

  & div .price {
    margin: 0px;
    font-size: 16px;
    font-weight: 500;
    color: #0ecb81;
  }

  & .red {
    color: #f6465d;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    & div .price {
      font-size: 24px;
    }
  }
`;

export const RightColumn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 15px;

    & div {
      padding-right: 70px;
    }
  }
`;
