import React from "react";
import { Card } from "../../components/Card/Card";

export const SearchCaracters = ({ filterCharacter }) => {

  return (
    <>
      {filterCharacter.map((character, i) => (
        <Card character={character} key={i} />
      ))}
    </>
  );
};
