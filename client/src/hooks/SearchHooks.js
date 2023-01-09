import axios from "axios";
import { useEffect, useState } from "react";

export const useSearchSuggestions = (textInput) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = "https://vishraj248.pythonanywhere.com/search/" + textInput;

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [endpoint]);

  return data;
};

export const usePlayerGetRating = (playerId) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = "https://vishraj248.pythonanywhere.com/player/" + playerId;

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [endpoint]);

  return [data, loading];
};
