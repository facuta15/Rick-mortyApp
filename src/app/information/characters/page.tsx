import { responsiveFontSizes } from "@mui/material";
import React from "react";
import { getCharacters } from "./services";
import { Card } from "@/components";

async function fetchCharacters() {
  return await getCharacters();
}
async function Character() {
  const characters = await fetchCharacters();
  return (
    <>
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}

export default Character;
