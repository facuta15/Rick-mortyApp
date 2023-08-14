import { responsiveFontSizes } from "@mui/material";
import React from "react";
import { getCharacters } from "./services";
import { Card, Navigator } from "@/components";
import { Routes } from "@/app/models";

async function fetchCharacters() {
  return await getCharacters();
}
async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return response.json();
}
async function Character() {
  const characters = await fetchCharacters();
  const data = await getData();
  return (
    <>
      <Navigator
        pathNames={[Routes.HOME, Routes.LOCATIONS]}
        username={data.name}
        profilePicture={data.image}
      ></Navigator>
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}

export default Character;
