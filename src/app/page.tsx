import React from "react";
import DashboardLayout from "./dashboard/layout";
import Link from "next/link";
import { Routes } from "./models";
import { Button } from "@mui/material";
import { Navigator } from "@/components";
function App() {
  return (
    <div>
      <h1>Welcome home</h1>
      <h2>Let's begin</h2>
      <div>
        <Navigator pathNames={[Routes.CHARACTERS,Routes.LOCATIONS]}></Navigator>
      </div>
    </div>
  );
}

export default App;
