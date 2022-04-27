import { HeaderDetails, BodyDetails } from "../style/DetailStyled";

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
