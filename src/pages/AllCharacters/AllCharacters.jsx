import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
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
