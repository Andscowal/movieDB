import React from "react";

export default () => {
  return (
    <div
      style={{
        backgroundColor: "#021d25",
        color: "#fff",
        fontSize: 24,
        height: 50,
        padding: 20
      }}
    >
      <img
        width="50"
        src={require("../img/dbicon.png")}
        alt="icon"
        style={{
          paddingRight: 15
        }}
      />
      Andscowal's MovieDB Search
    </div>
  );
};
