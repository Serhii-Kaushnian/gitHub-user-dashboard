import React from "react";
import { Dashboard, Error } from "../pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}></Route>
      <Route path='*' element={<Error />}></Route>
    </Routes>
  );
}

export default App;
