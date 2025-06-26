import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("Library Management", () => {
  it("shows empty library if no books", () => {
    // Overwrite initialBooks to empty for this test
    jest.spyOn(React, "useState").mockImplementationOnce(() => [[], jest.fn()]);
    render(<App />);
    expect(screen.getByText(/no books found/i)).toBeInTheDocument();
  });

  it("shows books in library", () => {
    render(<App />);
    expect(screen.getByText(/the great gatsby/i)).toBeInTheDocument();
    expect(screen.getByText(/1984/i)).toBeInTheDocument();
  });

  it("user can borrow a book", () => {
    render(<App />);
    const borrowBtn = screen.getAllByText("Borrow")[0];
    fireEvent.click(borrowBtn);
    expect(screen.getByText(/borrowed books/i).nextSibling.textContent).toMatch(/the great gatsby/);
  });

  it("user cannot borrow more than 2 books", () => {
    render(<App />);
    const borrowBtns = screen.getAllByText("Borrow");
    fireEvent.click(borrowBtns[0]);
    fireEvent.click(borrowBtns[1]);
    expect(screen.getAllByText("Return").length).toBe(2);
    // Try to borrow a third book
    expect(borrowBtns[2].disabled).toBe(true);
  });

  it("user can return a book", () => {
    render(<App />);
    const borrowBtns = screen.getAllByText("Borrow");
    fireEvent.click(borrowBtns[0]);
    const returnBtn = screen.getByText("Return");
    fireEvent.click(returnBtn);
    expect(screen.queryByText("Return")).not.toBeInTheDocument();
  });
});