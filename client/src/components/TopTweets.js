import React, { useState } from "react";
import { Tweet } from "react-twitter-widgets";
import { TweetSkeleton } from "./TweetSkeleton.js";
import { DescriptionText } from "../Home";

const TweetDisplay = ({ tweetId }) => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      <Tweet tweetId={tweetId} onLoad={handleLoad} />
      {loading && <TweetSkeleton />}
    </>
  );
};

export const TopTweets = ({ title, tweets }) => {
  return (
    <>
      <DescriptionText>{title}</DescriptionText>
      {tweets.map((tweet, index) => {
        const id = tweet.url.split("/");
        return <TweetDisplay key={index} tweetId={id[id.length - 1]} />;
      })}
    </>
  );
};
