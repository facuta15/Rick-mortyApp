import React from "react";
import { Card, Navigator } from "@/components";
import { getLocations } from "./services";
import { Routes } from "@/app/models";

async function fetchLocations() {
  return await getLocations();
}
async function Locations() {
  const Locations = await fetchLocations();
  return (
    <>
        <Navigator pathNames={[Routes.HOME,Routes.CHARACTERS]}></Navigator>
      {Locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}

export default Locations;