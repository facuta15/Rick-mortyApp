import { responsiveFontSizes } from "@mui/material";
import React from "react";
import { getCharacters } from "./services";
import { Card, Navigator } from "@/components";
import { Routes } from "@/app/models";

async function fetchCharacters() {
  return await getCharacters();
}
async function Character() {
  const characters = await fetchCharacters();
  return (
    <>
    <Navigator pathNames={[Routes.HOME,Routes.LOCATIONS]}></Navigator>
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}

export default Character;
