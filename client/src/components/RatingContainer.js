import styled from "styled-components";

const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 150;
  width: 80%;
  margin: 30px 0 30px 0;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const RatingText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 100px;
  font-family: Sans-serif;
`;

const GradeText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-family: Segoe UI, Sans-serif;
`;

function getRating(rating) {
  if (rating >= 0.7) {
    return "A+";
  } else if (rating >= 0.69) {
    return "A-";
  } else if (rating >= 0.675) {
    return "B+";
  } else if (rating >= 0.615) {
    return "B";
  } else if (rating >= 0.59) {
    return "B-";
  } else if (rating >= 0.51) {
    return "C+";
  } else if (rating >= 0.5) {
    return "C";
  } else if (rating >= 0.48) {
    return "C-";
  } else if (rating >= 0.4) {
    return "D";
  } else {
    return "F";
  }
}

export const Rating = ({ rating }) => {
  const letterRating = getRating(rating);

  return (
    <RatingBox>
      <GradeText>Grade:</GradeText>
      <RatingText>{letterRating}</RatingText>
    </RatingBox>
  );
};
