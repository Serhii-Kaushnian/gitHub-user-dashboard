import React from "react";
import { Info, Search, Navbar } from "../components";
import HeaderWrapper from "../components/HeaderWrapper";

const Dashboard = () => {
  return (
    <main>
      <HeaderWrapper>
        <Navbar></Navbar>
        <Search></Search>
      </HeaderWrapper>
      <Info></Info>
    </main>
  );
};

export default Dashboard;
