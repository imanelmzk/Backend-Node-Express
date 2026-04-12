import express from "express";
import usersRoutes from "../routes/user.routes";
import cors from 'cors';

const app = express();

// Permet de parser le JSON du body
app.use(express.json());

// Monter le route /users
app.use("/users", usersRoutes);

// Middleware CORS pour lier le frontend et le backend
app.use(cors());

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;