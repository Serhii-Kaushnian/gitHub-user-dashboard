import React from "react";

import { Outlet } from "react-router";
import HeaderWrapper from "../HeaderWrapper";
import Navbar from "../Navbar";
import Search from "../Search";

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
