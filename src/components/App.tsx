import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4">Welcome to EducateMeSL</h1>
        <p className="text-gray-700">
          Select a level and subject from the sidebar to begin exploring the
          curriculum.
        </p>
      </div>
    </div>
  );
}

export default App;
