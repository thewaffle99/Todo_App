import React, { useState } from "react";
import Main from "./views/Main";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
          <Route element={<Details />} path="/todo/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
