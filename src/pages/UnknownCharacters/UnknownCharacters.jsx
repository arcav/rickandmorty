import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";

export const UnknownCharacters = ({ characters }) => {
  let { gender } = useParams();
  let filterCharacter = characters.filter(
    (x) => x.gender.toLowerCase() === gender
  );

  return (
    <div>
      {
      filterCharacter.map((character, i) => (
        <Card character={character} key={i} />
      ))}
    </div>
  );
};
