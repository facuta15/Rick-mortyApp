import React from "react";
import { Routes } from "./models";
import { Card, Navigator } from "@/components";
import "./page.module.css";


let randomCharacter = ()=>{
  return Math.floor(Math.random() * 823)
}
async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/"+randomCharacter());
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>Welcome home</h1>
        <h2>Let's begin</h2>

        <Card data={data} />
      </div>
    </div>
  );
}

export default App;
