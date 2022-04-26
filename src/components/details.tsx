import styled from "styled-components";

const HeaderDetails = styled.div`
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

const BodyDetails = styled.div`
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

const Details = () => {
  return (
    <div style={{ gridArea: "detail", backgroundColor: "#161A1E" }}>
      <HeaderDetails>
        <span className="active">Open Orders(0)</span>
        <span>Order History</span>
        <span>Trade History</span>
        <span>Funds</span>
      </HeaderDetails>
      <BodyDetails>
        <span>Log In</span>
        or
        <span>Register Now</span>
        to trade
      </BodyDetails>
    </div>
  );
};

export default Details;
