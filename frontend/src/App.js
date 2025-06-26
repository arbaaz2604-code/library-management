import React from "react";
import { LibraryProvider } from "./context/LibraryContext";
import Library from "./components/Library";
import BorrowedList from "./components/BorrowedList";

function App() {
  return (
    <LibraryProvider>
      <div className="app-container">
        <h1>Library Management</h1>
        <Library />
        <hr />
        <BorrowedList />
      </div>
    </LibraryProvider>
  );
}

export default App;