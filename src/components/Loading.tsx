import styled from "styled-components";

const LoadinContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1000;

  & span {
    width: 5px;
    height: 30px;
    background-color: yellow;
    margin: 5px;
  }
`;

const Loading = () => {
  return (
    <LoadinContainer>
      <span />
      <span />
      <span />
      <span />
      <span />
    </LoadinContainer>
  );
};

export default Loading;
