import { useParams } from "react-router-dom";
import { BackButton } from "./components/BackButton";
import { LoadingScreen } from "./components/LoadingScreen";
import { Rating } from "./components/RatingContainer";
import { TweetsList } from "./components/TweetsList";
import { DescriptionText, InfoBox, LongerDescriptionText } from "./Home";
import { usePlayerGetRating } from "./hooks/SearchHooks";

export const PlayerView = () => {
  const { playerId } = useParams();

  const [playerInfo, loading] = usePlayerGetRating(playerId);

  if (loading) {
    return <LoadingScreen />;
  }

  if (!playerInfo) {
    return <DescriptionText>Cannot find player</DescriptionText>;
  }

  let tweetRatings = {};
  playerInfo.ratings.forEach(
    (rating, i) => (tweetRatings[rating] = playerInfo.tweets[i])
  );

  const sortedTweetRatings = Object.keys(tweetRatings)
    .sort()
    .reduce((obj, key) => {
      obj[key] = tweetRatings[key];
      return obj;
    }, {});

  const rating =
    playerInfo.ratings.reduce((a, b) => a + b) / playerInfo.ratings.length;

  return (
    <>
      <InfoBox>
        <BackButton />
        <DescriptionText>{playerInfo.name}</DescriptionText>
        <DescriptionText>
          Drafted out of {playerInfo.college} in {playerInfo.season} by{" "}
          {playerInfo.team}
        </DescriptionText>
        <Rating rating={rating} />
        <DescriptionText>Top 3 Most</DescriptionText>
        <TweetsList tweets={Object.values(sortedTweetRatings)} />
        <LongerDescriptionText>
          Disclaimer: Keep in mind that these rating are made by a model that is
          fairly accurate but not perfect. You may see weird ratings, and
          especially see tweets rated super positively or negatively when they
          shouldn't be (This is why we rate a lot of tweets to ensure a few
          outliers won't cause a huge error in rating).
        </LongerDescriptionText>
      </InfoBox>
    </>
  );
};
