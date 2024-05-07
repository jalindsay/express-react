import React, { Fragment } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import CreateUser from "./CreateUser";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/users' element={<Users/>} />
          <Route exact path='/create-user' element={<CreateUser/>} />
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
