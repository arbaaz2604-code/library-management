import React from "react";
import { useLibrary } from "../context/LibraryContext";
import BookList from "./BookList";

export default function BorrowedList() {
  
  const { borrowed, returnBook, loading } = useLibrary();
if (loading) return <p>Loading...</p>;

  return (
    <div>
        <h2>👜 Borrowed Books</h2>
      <BookList
        books={borrowed}
        actionLabel="Return"
        onAction={returnBook}
      />
    </div>
  );
}