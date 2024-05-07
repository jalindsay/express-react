import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import CreateUser from "./CreateUser";
import HashTest from "./HashTest";
import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";

const drawerWidth = 240;

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <List>
            <ListItem component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={Link} to="/users">
              <ListItemText primary="Users" />
            </ListItem>
            <ListItem component={Link} to="/create-user">
              <ListItemText primary="Create User" />
            </ListItem>
            <ListItem component={Link} to="/hash-test">
              <ListItemText primary="Hash Test" />
            </ListItem>
          </List>
        </Drawer>
        <Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/create-user" element={<CreateUser />} />
            <Route exact path="/hash-test" element={<HashTest />} />
          </Routes>
        </Fragment>
      </Box>
    </Router>
  );
}

export default App;
