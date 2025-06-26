import React from "react";
import { useLibrary } from "../context/LibraryContext";
import BookList from "./BookList";

export default function Library() {
  const { books, borrowBook, borrowed, loading } = useLibrary();

if (loading) return <p>Loading...</p>;

  return (
    <div>
       <h2>📚 Library</h2>
      <BookList
        books={books}
        actionLabel="Borrow"
        onAction={borrowBook}
        actionDisabled={(book) =>
          borrowed.length >= 2 ||
          borrowed.some((b) => b.id === book.id)
        }
      />
    </div>
  );
}