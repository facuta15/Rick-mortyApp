"use client"
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, Button, IconButton, Snackbar } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";


interface User {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
}

interface UserTableProps {
  users: User[];
}

// const UserTable: React.FC<UserTableProps> = ({ users }) => {
const UserTable: React.FC<UserTableProps> = () => {
 

  const users = [
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

  const handleEditUser = (userId: number) => {
    console.log(`Edit user with ID: ${userId}`);
  };

  const handleDeleteUser = (userId: number) => {
    users.filter(user => user.id !== userId)
    console.log(`Delete user with ID: ${userId}`);
    console.log(users)
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 2 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "species", headerName: "Species", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   flex: 1,
    //   renderCell: (params: any) => (
    //     <div>
    //       <IconButton
    //         aria-label="Edit"
    //         onClick={() => handleEditUser(params.row.id)}
    //       >
    //         <EditIcon />
    //       </IconButton>

    //       <IconButton
    //         aria-label="Delete"
    //         onClick={() => handleDeleteUser(params.row.id)}
    //       >
    //         <DeleteIcon color="error" />
    //       </IconButton>
    //       <Snackbar
    //         autoHideDuration={6000}
    //         onClose={handleClose}
    //         message="El usuario se ha eliminado correctamente"
    //         action={action}
    //       />
    //     </div>
    //   ),
    // },
  ];

  return (
    <Box sx={{ width: "100%", padding: "15px" }}>
      <div
        style={{
          width: "100%",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <DataGrid rows={users} columns={columns} />
      </div>
    </Box>
  );
};

export default UserTable;
