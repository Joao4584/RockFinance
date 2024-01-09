// * Modules * //
import express from "express";

// * Exports * //
import * as UserController from "../controllers/userController";
import { verificationToken } from "../middlewares/verificationMiddleware";

// * Components * //
const userRoutes = express.Router();

userRoutes.post("/image", verificationToken, UserController.editImage);

export default userRoutes;
