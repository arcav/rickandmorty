import { Card } from "../../components/Card/Card";

export const AllCharacters = ({ characters }) => {
  return (
    <>
      {characters.map((character, i) => (
        <Card character={character} key={i} />
      ))}
    </>
  );
};
