import React from "react";

export default function BookList({ books, actionLabel, onAction, actionDisabled }) {
  if (books.length === 0) return <p>No books found.</p>;
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id} style={{ marginBottom: 8 }}>
          <span>
            {book.title}
            {book.count > 1 ? ` (x${book.count})` : ""}
          </span>
          {onAction && (
            <button
              style={{ marginLeft: 12 }}
              onClick={() => onAction(book)}
              disabled={actionDisabled && actionDisabled(book)}
            >
              {actionLabel}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}