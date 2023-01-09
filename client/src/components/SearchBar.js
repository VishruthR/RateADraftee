import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSearchSuggestions } from "../hooks/SearchHooks";

const SearchBox = styled.div`
  width: 75%;
  height: 35px;
  margin-left: -13px;
`;

const SearchBarContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: ${(props) => (props.searching ? "20px 20px 0 0 ;" : "20px")};
  width: 100%;
  height: 35px;
`;

const SuggestionContainer = styled.ul`
  list-style-type: none;
  border-radius: 12px;
  background-color: white;
  padding: 0 0 10px 0;
  margin: 0;
`;

const SuggestionTab = styled.li`
  height: 15px;
  background-color: white;
  width: 100%;
  padding: 10px 0;

  &:hover {
    background-color: #d3d3d3;
  }
`;

const SuggestionText = styled.p`
  font-size: 15px;
  font-weight: bold;
  font-family: Segoe UI, Sans-serif;
  padding: 0;
  margin: 0 0 0 10px;
`;

const StyledMagnifyingGlass = styled(BiSearch)`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 12px;
  top: 8px;
`;

const StyledInput = styled.input`
  width: calc(100% - 17px);
  height: 100%;
  border: none;
  border-radius: 20px;
  padding: 0;
  padding-left: 17px;
  overflow: hidden;
`;

const SuggestionBox = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    const path = "/player/" + item;
    navigate(path, { replace: true });
  };

  if (!data) {
    data = [];
  }

  return (
    <SuggestionContainer>
      {data.slice(0, 4).map((item, index) => {
        return (
          <SuggestionTab key={index} onClick={() => handleClick(item.id)}>
            <SuggestionText>
              {item.name} • {item.team} • {item.position}
            </SuggestionText>
          </SuggestionTab>
        );
      })}
    </SuggestionContainer>
  );
};

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const inputRef = useRef(null);

  const data = useSearchSuggestions(input);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  });

  const toggle = (e) => setFocused(e && e.target === inputRef.current);

  return (
    <SearchBox>
      <SearchBarContainer searching={focused}>
        <StyledInput
          placeholder="Enter a player's name..."
          onChange={(text) => setInput(text.target.value)}
          ref={inputRef}
        />
        <StyledMagnifyingGlass />
      </SearchBarContainer>
      {focused && <SuggestionBox data={data} />}
    </SearchBox>
  );
};
