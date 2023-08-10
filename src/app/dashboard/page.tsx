import React from "react";
import DataTable from "./components/UserTable";
import Navbar from "./components/NavBar";
import UserTable from "./components/UserTable";

async function getData() {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  return response.json();
}
const user2 = getData()


let users = [
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 3,
    name: "Pepe",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
  {
    id: 4,
    name: "Popo",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
  },
];

async function Dashboard() {
  const data = await getData();
  console.log(user2)
  return (
    <div>
      <Navbar username={data.name} profilePicture={data.image} />
      <UserTable
        users={users}
      />
    </div>
  );
}

export default Dashboard;
