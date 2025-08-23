import React from "react";
import Logo from "./components/logo.jsx";
import Column from "./components/column.jsx";
import Card from "./components/card.jsx";

const sample = {
  todo: [
    { id: 1, title: "Set up repo", description: "Git + GitHub SSH" },
    { id: 2, title: "Create Card component", description: "Reusable task tile" },
  ],
  inprogress: [
    { id: 3, title: "Design columns", description: "Simple 3-column grid" },
  ],
  done: [
    { id: 4, title: "Hello Kanban", description: "Vite + Tailwind" },
  ],
};

export default function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Logo /> Kanban Board
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Column title="To Do">
          {sample.todo.map(t => (
            <Card key={t.id} title={t.title} description={t.description} />
          ))}
        </Column>

        <Column title="In Progress">
          {sample.inprogress.map(t => (
            <Card key={t.id} title={t.title} description={t.description} />
          ))}
        </Column>

        <Column title="Done">
          {sample.done.map(t => (
            <Card key={t.id} title={t.title} description={t.description} />
          ))}
        </Column>
      </div>
    </div>
  );
}
