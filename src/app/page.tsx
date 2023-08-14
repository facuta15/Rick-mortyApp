import React from "react";
import { Routes } from "./models";
import { Navigator } from "@/components";

async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return response.json();
}

async function App() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <Navigator
        pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]}
        username={data.name}
        profilePicture={data.image}
      ></Navigator>
      <h1>Welcome home</h1>
      <h2>Let's begin</h2>
    </div>
  );
}

export default App;
