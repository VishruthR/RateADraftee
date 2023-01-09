import styled from "styled-components";

const Background = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;  
  width: 100vw;
  margin: -8px;
  margin-top: -16px;
  background-color: blue;
  background-image: linear-gradient(to right, #32a5dd, #32ddda);
  align-items: center;
  padding-top: 50px;
`;

const TitleText = styled.p`
  font-size: 35px;
  font-weight: bold;
  font-family: Sans-serif;
  padding: 10px;
  margin: 0;
`;

export const DefaultWrapper = ({ Content }) => {
  return (
    <Background>
      <TitleText>RateADraftee</TitleText>
      {Content}
    </Background>
  );
};
