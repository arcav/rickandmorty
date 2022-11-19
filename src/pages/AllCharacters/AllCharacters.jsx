import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { Card } from "../../components/Card/Card";

const URI = "https://rickandmortyapi.com/api/character";

export const AllCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(URI);
      const json = await response.json();
      setCharacters(json.results);
    }
    getData();
  }, []);

  console.log(characters);

  return (
    <Layout>
      {characters.map((character, i) => (
        <Card character={character} key={i} />
      ))}
    </Layout>
  );
};
