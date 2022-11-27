import React from "react";
import { Card } from "../../components/Card/Card";

export const FemaleCharacters = ({ characters }) => {
 
  return (
    <>
      {characters.map((character, i) => (
        <Card character={character} key={i} />
      ))}
    </>
  );
};
