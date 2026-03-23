import { Router } from "express";
import { getUserById, createUser, updateUser, deleteUser} from "../controllers/user.controller";

const router = Router();

// GET /users :id
router.get("/:id", getUserById);

// POST /users
router.post("/", createUser);

// PUT/PATCH /users :id
router.put("/:id", updateUser);

//DELETE /users :id
router.delete("/:id", deleteUser);

export default router;