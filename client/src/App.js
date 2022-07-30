import React, { useState } from "react";
import Main from "./views/Main";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
