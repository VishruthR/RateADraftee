import ReactLoading from "react-loading";
import { DescriptionText } from "../Home";

export const LoadingScreen = () => {
  return (
    <>
      <ReactLoading type={"bubbles"} />
      <DescriptionText>Rating Tweets...</DescriptionText>
      <DescriptionText>
        Please be patient. This process can take up to 20 seconds
      </DescriptionText>
    </>
  );
};
