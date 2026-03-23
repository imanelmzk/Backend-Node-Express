import express from "express";
import usersRoutes from "../routes/user.routes";

const app = express();

// Permet de parser le JSON du body
app.use(express.json());

// Monter le route /users
app.use("/users", usersRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;