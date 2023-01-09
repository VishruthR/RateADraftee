import styled from "styled-components";
import { TopTweets } from "./TopTweets";
import { eagerLoadTwitterLibrary } from "react-twitter-widgets";
eagerLoadTwitterLibrary();

const TweetsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
`;

export const TweetsList = ({ tweets }) => {
  const posTweets = tweets.slice(tweets.length - 3, tweets.length);
  const negTweets = tweets.slice(0, 3);

  return (
    <TweetsContainer>
      <ListContainer>
        <TopTweets title={"Positive Tweets"} tweets={posTweets} />
      </ListContainer>
      <ListContainer>
        <TopTweets title={"Negative Tweets"} tweets={negTweets} />
      </ListContainer>
    </TweetsContainer>
  );
};
