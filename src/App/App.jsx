import React from "react";
import { Dashboard, Error } from "../pages";
import { Routes, Route } from "react-router-dom";
import { Repos } from "../components";
import SharedLayout from "../components/SharedLayout/SharedLayout";
import Followers from "../components/Followers";
import Following from "../components/Following";
import Gists from "../components/Gists";

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='repos' element={<Repos />} />
        <Route path='followers' element={<Followers />} />
        <Route path='following' element={<Following />} />
        <Route path='gists' element={<Gists />} />
        <Route path='*' element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
