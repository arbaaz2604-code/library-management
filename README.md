# Library Management System

A full-stack web application for managing a library, allowing users to view, borrow, and return books with borrowing limits and a modern UI.

---

## Features
- View all books in the library
- Borrow a book (up to 2 at a time, only one copy per book)
- Return borrowed books
- See real-time updates between frontend and backend
- Modern, responsive design
- Test-driven frontend code

---

## Tech Stack & Architecture
- **Frontend:** React (Context API for state management, fetch for API calls)
- **Backend:** Node.js, Express (REST API, in-memory data)
- **Styling:** Custom CSS (no external UI libraries)
- **Testing:** React Testing Library, Jest (frontend)

### Folder Structure
```
library-management/
  ├── backend/
  │     app.js
  │     routes/
  │     data/
  └── frontend/
        src/
        public/
        ...
```

---

## Setup Instructions

### 1. Prerequisites
- Node.js (with npm) installed: https://nodejs.org/

### 2. Clone or Extract the Project

### 3. Running the Backend
```sh
cd library-management/backend
npm install
node app.js
```
- Backend runs at [http://localhost:5000](http://localhost:5000)

### 4. Running the Frontend
```sh
cd library-management/frontend
npm install
npm start
```
- Frontend runs at [http://localhost:3000](http://localhost:3000)

### 5. Running Frontend Tests (Optional)
```sh
npm test
```

---

## Usage
- **View books** in the Library section
- **Borrow books** (max 2, one copy per book)
- **Return books** in the Borrowed Books section
- UI updates in real time with backend

---

## Architectural Decisions & Assumptions
- State is managed via React Context and backend API
- In-memory data for backend (easy to swap for a database)
- No authentication (single user)
- Clean, modular code and TDD principles
- KISS and DRY principles followed

---

## Notes for Reviewers/HR
- Both backend and frontend servers must be running simultaneously
- If you encounter issues, ensure Node.js is installed and ports 3000/5000 are free
- For any questions or issues, please contact the candidate

---

**Thank you for reviewing this assignment!** 