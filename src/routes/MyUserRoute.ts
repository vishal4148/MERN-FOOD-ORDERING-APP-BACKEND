import express from "express"
import MyUserController from "../controllers/MyUserController";
import { jwtCheck } from "../middleware/auth";

const router = express.Router();

// /api/my/user
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put("/", MyUserController.updateCurrentUser);
export default router;