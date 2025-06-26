import React, { createContext, useContext, useEffect, useState } from "react";

const LibraryContext = createContext();

export function LibraryProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [borrowed, setBorrowed] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch books and borrowed books from backend
  const fetchData = async () => {
    setLoading(true);
    const booksRes = await fetch("http://localhost:5000/api/books");
    const borrowedRes = await fetch("http://localhost:5000/api/books/borrowed");
    setBooks(await booksRes.json());
    setBorrowed(await borrowedRes.json());
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Borrow a book
  const borrowBook = async (book) => {
    await fetch("http://localhost:5000/api/books/borrow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: book.id }),
    });
    fetchData();
  };

  // Return a book
  const returnBook = async (book) => {
    await fetch("http://localhost:5000/api/books/return", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: book.id }),
    });
    fetchData();
  };

  return (
    <LibraryContext.Provider
      value={{ books, borrowed, borrowBook, returnBook, loading }}
    >
      {children}
    </LibraryContext.Provider>
  );
}

export function useLibrary() {
  return useContext(LibraryContext);
}