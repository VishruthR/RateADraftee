import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DescriptionText } from "../Home";
import { BiChevronLeft } from "react-icons/bi";

const BackContainer = styled.div`
  position: absolute;
  display: flex;
  align-self: start;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 90px;
  background-color: rgba(209, 209, 209, 0.75);
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  top: 53px;
`;

const BackText = styled(DescriptionText)`
  padding-left: 13px;
`;

const LeftArrow = styled(BiChevronLeft)`
  position: absolute;
  left: 6px;
`;

export const BackButton = () => {
  const navigate = useNavigate();

  const backClick = () => {
    navigate("/");
  };

  return (
    <BackContainer onClick={() => backClick()}>
      <LeftArrow size={23} />
      <BackText>Back</BackText>
    </BackContainer>
  );
};
