import { Route } from "@/app/models";
import Link from "next/link";
import React from "react";
import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";

interface Props {
  pathNames: Route[];
  username: string;
  profilePicture: string;
}
function Navigator({ pathNames, username, profilePicture }: Props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Avatar
          alt="Profile Picture"
          src={profilePicture}
          sx={{ marginRight: "1rem" }}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {username}
        </Typography>
        <div style={{ display: "flex", gap: "15px", flexDirection: "row" }}>
          {pathNames.map((pathName) => (
            <Link key={pathName.path} href={pathName.path}>
              {pathName.name}
            </Link>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigator;
