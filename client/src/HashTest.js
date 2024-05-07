import React, { useState } from "react";
import bcrypt from "bcryptjs";
import { TextField, Button, Typography } from "@mui/material";

function HashTest() {
  const [password, setPassword] = useState("");
  const [hash, setHash] = useState("");

  const handleHash = () => {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    setHash(hashedPassword);
  };

  return (
    <div>
      <TextField
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleHash}>
        Generate Hash
      </Button>
      {hash && <Typography>Bcrypt Hash: {hash}</Typography>}
    </div>
  );
}

export default HashTest;
