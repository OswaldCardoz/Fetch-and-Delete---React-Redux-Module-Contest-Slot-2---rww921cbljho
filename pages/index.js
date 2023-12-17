import React, { useContext, useState } from "react";
import { AuthContext } from "./_app";
import Dashboard from "./Dashboard";

export default function Home() {
  const { } = useContext(AuthContext);

  return (
    <div id="index">
      <Dashboard />

    </div>
  );
}
