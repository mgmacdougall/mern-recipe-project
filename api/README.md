---
# Recipe API – MERN Recipe Project

This is the backend API for the MERN Recipe Project, built with Express and MongoDB. It manages recipes and recipe boxes, allowing users to create, retrieve, update, and delete recipe data. The API is designed to be modular, scalable, and ready for integration with a React frontend.
---

## Features

- CRUD operations for recipes and recipe boxes
- MongoDB models with Mongoose
- Reference-based schema design (`RecipeBox` references `Recipe`)
- RESTful routing with Express
- Environment-based configuration
- Timestamping with `createdAt`

---

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv

---

## Folder Structure

```
api/
├── config/           # MongoDB connection setup
├── controllers/      # Route logic for recipes and recipe boxes
├── model/            # Mongoose schemas
├── routes/           # Express route definitions
├── local_data/       # Optional seed or mock data
└── server.js         # Entry point
```

---

## Setup Instructions

1. **Clone the repo**

   ```bash
   git clone https://github.com/mgmacdougall/mern-recipe-project.git
   cd mern-recipe-project/api
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file**

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server**
   ```bash
   npm run dev
   ```

---

## API Endpoints

### Recipes

| Method | Endpoint       | Description           |
| ------ | -------------- | --------------------- |
| GET    | `/recipes`     | Get all recipes       |
| POST   | `/recipes`     | Create a new recipe   |
| GET    | `/recipes/:id` | Get a recipe by ID    |
| PUT    | `/recipes/:id` | Update a recipe by ID |
| DELETE | `/recipes/:id` | Delete a recipe by ID |

### Recipe Boxes

| Method | Endpoint                         | Description                       |
| ------ | -------------------------------- | --------------------------------- |
| GET    | `/recipe-boxes`                  | Get all recipe boxes              |
| POST   | `/recipe-boxes`                  | Create a new recipe box           |
| GET    | `/recipe-boxes/:id`              | Get a recipe box by ID            |
| PUT    | `/recipe-boxes/:id`              | Update a recipe box by ID         |
| DELETE | `/recipe-boxes/:id`              | Delete a recipe box by ID         |
| DELETE | `/recipe-boxes/:id/recipes/:rid` | Remove a recipe from a recipe box |

---

## Testing

TODO

---

## Notes

- Recipes are stored as separate documents and referenced in `RecipeBox` via ObjectId.
- Use `.populate('recipes')` in your controller when retrieving recipe boxes to access full recipe details.
- Consider adding authentication and validation middleware for production use.
- Current dev env's use local Mongo DB and this can be started using:
  mongod --dbpath C:\data\db //restart local MOngodb instance

---

## Contact

Maintained by [Michael MacDougall](https://github.com/mgmacdougall)

---
