import React from "react";

function HeaderWrapper({ children }) {
  return (
    <div
      style={{
        backgroundColor: "teal",
        display: "flex",
        padding: "10px 20px",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
}

export default HeaderWrapper;
