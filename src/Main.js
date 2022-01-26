import React, { useState, useEffect } from "react";
import axios from "axios";

import Error from "./Error";
import CharacterCard from "./CharacterCard";
import PaginationBasic from "./Pagination";
import Loader from "./Loader";

const Main = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState();
  const [count, setCount] = useState();

  const getCharacters = (page) => {
    axios({
      method: "get",
      url: "https://swapi.dev/api/people/",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        setTimeout(() => {
          setLoading(false);
        }, 60000);
        if (res.data.results && res.data.results.length > 0) {
          setCount(res.data.count);
          setCharacters(res.data.results);
        } else setError(true);
      })
      .catch((error) => {
        setLoading(false);
        setError(true);
      });
  };

  // on first render and if the page parameter in the url changes then refetch
  useEffect(() => {
    setLoading(true);
    getCharacters();
  }, []);

  useEffect(() => {
    if (characters) {
      setLoading(false);
      setError(false);
    }
  }, [characters]);

  if (error) return <Error />;
  if (loading) return <Loader />;

  return (
    <>
      {characters.map((character) => {
        return <CharacterCard character={character} />;
      })}
      <PaginationBasic getCharacters={getCharacters} count={characters.count} />
    </>
  );
};

export default Main;
