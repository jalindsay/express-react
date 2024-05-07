import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission here
    console.log("data:", { name, email, password });
  };

  return (
    <>
      <Box sx={{ p: 2 }}>
        <h1>Create User</h1>
        <form onSubmit={handleSubmit}>
          <Box sx={{ mb: 2 }}>
            <TextField label="Name" value={name} onChange={handleNameChange} />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              label="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Create
          </Button>
        </form>
      </Box>
    </>
  );
}

export default CreateUser;
