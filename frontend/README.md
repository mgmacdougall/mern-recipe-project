---
# MERN Recipe Project – Frontend

This is the React-based frontend for the MERN Recipe Project. It allows users to browse, create, and manage recipes and recipe boxes through a clean, responsive interface. Built with modern React tooling and designed to integrate seamlessly with the Express/MongoDB backend.
---

## Features

- View and manage recipes and recipe boxes
- Create and delete recipes
- Add recipes to boxes
- Responsive layout for desktop and mobile
- RESTful API integration with backend
- Modular component structure

---

## Tech Stack

- React (with Hooks)
- React Router
- Axios
- Tailwind CSS or Bootstrap (depending on your setup)
- Vite or Create React App (depending on your tooling)

---

## Folder Structure

```
client/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-based views
│   ├── services/       # API calls via Axios
│   ├── App.js          # Main app component
│   └── index.js        # Entry point
```

---

## Setup Instructions

1. **Navigate to the frontend folder**

   ```bash
   cd client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   or if using Create React App:

   ```bash
   npm start
   ```

4. **Connect to the backend**
   - Ensure the backend is running on `http://localhost:5000`
   - Update API base URLs in your Axios service files if needed

---

## API Integration

The frontend communicates with the backend via Axios. Example endpoints:

- `GET /recipes` – fetch all recipes
- `POST /recipes` – create a new recipe
- `DELETE /recipe-boxes/:id/recipes/:rid` – remove a recipe from a box

---

## Environment Variables

Create a `.env` file in the root of your frontend project:

```
VITE_API_URL=http://localhost:5000
```

Or for Create React App:

```
REACT_APP_API_URL=http://localhost:5000
```

---

## Testing

You can test the app manually in the browser or set up automated tests using:

- Jest + React Testing Library
- Cypress (for end-to-end testing)

---

## Contact

Maintained by [Michael MacDougall](https://github.com/mgmacdougall)

---
