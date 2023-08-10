import React from "react";
import { Card } from "@/components";
import { getLocations } from "./services";

async function fetchLocations() {
  return await getLocations();
}
async function Locations() {
  const Locations = await fetchLocations();
  return (
    <>
      {Locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}

export default Locations;