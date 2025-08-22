import React from "react";
import Logo from "./components/logo.jsx";
import Column from "./components/column.jsx";

export default function App() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Kanban Board</h1>
      <Logo />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        <Column title="To Do"/>
        <Column title="In Progress"/>
        <Column title="Done"/>
      </div>
    </div>
  );
}
