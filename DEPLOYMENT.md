---
# MERN Recipe Project – Deployment Guide

This guide explains how to deploy the MERN Recipe Project using **Netlify** for the React frontend and **Render** for the Express/MongoDB backend.
---

## Project Structure

```
mern-recipe-project/
├── api/         # Express backend
└── client/      # React frontend
```

---

## Backend Deployment (Render)

### 1. Prepare MongoDB Atlas

- Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Whitelist your IP and create a database user
- Copy your connection string (e.g. `mongodb+srv://<user>:<pass>@cluster.mongodb.net/recipes`)

### 2. Push Backend to GitHub

Ensure your `api/` folder is committed and pushed to GitHub.

### 3. Deploy to Render

- Go to [Render](https://render.com)
- Click **New Web Service**
- Connect your GitHub repo
- Set the root directory to `api`
- Set environment variables:
  ```
  MONGO_URI=your_mongodb_connection_string
  PORT=10000
  ```

### 4. Configure Build Settings

- **Build Command:** `npm install` (or leave blank)
- **Start Command:** `node server.js`
- **Root Directory:** `api`

### 5. Deploy

Render will build and deploy your backend. You’ll get a public URL like:

```
https://mern-recipe-api.onrender.com
```

---

## Frontend Deployment (Netlify)

### 1. Push Frontend to GitHub

Ensure your `client/` folder is committed and pushed to GitHub.

### 2. Create `.env` File

For Vite:

```
VITE_API_URL=https://mern-recipe-api.onrender.com
```

For Create React App:

```
REACT_APP_API_URL=https://mern-recipe-api.onrender.com
```

### 3. Deploy to Netlify

- Go to [Netlify](https://netlify.com)
- Click **Add New Site > Import from Git**
- Select your repo and set the root directory to `client`
- Set build settings:
  - **Build Command:** `npm run build`
  - **Publish Directory:** `dist` (Vite) or `build` (CRA)

### 4. Add Environment Variables

Match the `.env` file values in Netlify’s dashboard.

### 5. Deploy

Netlify will build and deploy your frontend. You’ll get a public URL like:

```
https://mern-recipe.netlify.app
```

---

## CORS Configuration

In `api/server.js`, allow frontend access:

```js
const cors = require("cors");
app.use(cors({ origin: "https://mern-recipe.netlify.app" }));
```

---

## Final Checklist

- [ ] Backend deployed to Render
- [ ] Frontend deployed to Netlify
- [ ] `.env` files configured correctly
- [ ] CORS enabled on backend
- [ ] API calls use `VITE_API_URL` or `REACT_APP_API_URL`

---

Let me know if you want to add CI/CD, custom domains, or staging environments. I can also help you set up logging, error tracking, or performance monitoring.
