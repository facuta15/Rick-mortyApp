import React from "react";
import DashboardLayout from "./dashboard/layout";
import Link from "next/link";
import { Routes } from "./models";
import { Button } from "@mui/material";
function App() {
  return (
    <div>
      <h1>Welcome home</h1>
      <h2>Let's begin</h2>
      <div>
        <Button>
          <Link href={Routes.CHARACTERS}>Characters</Link>
        </Button>
        <Button>
          <Link href={Routes.LOCATIONS}>Locations</Link>
        </Button>
      </div>
    </div>
  );
}

export default App;
