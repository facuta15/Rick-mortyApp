import React from "react";
import { Card, Navigator } from "@/components";
import { getLocations } from "./services";
import { Routes } from "@/app/models";

async function fetchLocations() {
  return await getLocations();
}
async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return response.json();
}
async function Locations() {
  const Locations = await fetchLocations();
  const data = await getData();
  return (
    <>
      <Navigator
        pathNames={[Routes.HOME, Routes.CHARACTERS]}
        username={data.name}
        profilePicture={data.image}
      ></Navigator>
      {Locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}

export default Locations;
