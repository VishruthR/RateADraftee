import styled from "styled-components";

const SkeletonContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 264px;
  width: 248px;
  border-radius: 15px;
  background-color: #aeaeae;
  opacity: 0.75;
  margin: 10px;
`;

const ProfileContainer = styled.div`
  display: flex;
`;

const SkeletonProfile = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background-color: #9b9b9b;
  margin: 15px;
`;

const SkeletonName = styled.div`
  border-radius: 15px;
  width: 150px;
  height: 50px;
  background-color: #9b9b9b;
  margin: 15px 0 15px 0;
`;

const SkeletonText = styled.div`
  border-radius: 15px;
  width: 215px;
  height: ${(props) => props.height};
  background-color: #9b9b9b;
  margin: 0 15px 15px 15px;
`;

export const TweetSkeleton = () => {
  return (
    <SkeletonContainer>
      <ProfileContainer>
        <SkeletonProfile />
        <SkeletonName />
      </ProfileContainer>
      <SkeletonText height={"100px"} />
      <SkeletonText height={"50px"} />
    </SkeletonContainer>
  );
};
