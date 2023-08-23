import React from "react";

import { Outlet } from "react-router";
import HeaderWrapper from "../HeaderWrapper/HeaderWrapper";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

export default function SharedLayout() {
  return (
    <>
      <HeaderWrapper>
        <Navbar></Navbar>
        <Search></Search>
      </HeaderWrapper>
      <Outlet />
    </>
  );
}
