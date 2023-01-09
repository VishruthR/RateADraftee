import React from "react";
import styled from "styled-components";
import { SearchBar } from "./components/SearchBar";

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(209, 209, 209, 0.75);
  border-radius: 11px;
  width: 50vw;
  min-height: 130px;
  min-width: 500px;
  margin-bottom: 50px;
`;

export const DescriptionText = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  padding: 0;
  margin-top: 15px;
`;

export const LongerDescriptionText = styled.p`
  z-index: 1;
  top: 185px;
  font-size: 15px;
  font-weight: bold;
  font-family: Segoe UI, Sans-serif;
  padding: 0;
  margin: 15px;
  text-align: center;
`;

export const Home = () => {
  return (
    <InfoBox>
      <DescriptionText>
        Type in a player's name and get their rating! (Try Jordyn Brooks or
        Kayvon Thibodeaux)
      </DescriptionText>
      <SearchBar />
    </InfoBox>
  );
};
