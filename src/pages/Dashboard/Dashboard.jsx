import React from "react";
import { Info } from "../../components";

const Dashboard = () => {
  return (
    <main
      style={{
        height: "calc(100% - 100px)",

        backgroundColor: " #a2a8d3",
        padding: "10px",
      }}
    >
      <Info></Info>
    </main>
  );
};

export default Dashboard;
