// * Modules * //
import express from "express";

// * Exports * //
import * as AuthController from "../controllers/authController";
import { verificationToken } from "../middlewares/verificationMiddleware";

// * Components * //
const authRoutes = express.Router();

authRoutes.post("/login", AuthController.login);
authRoutes.post("/register", AuthController.register);

authRoutes.get("/credencials", verificationToken, AuthController.searchMyUser);

export default authRoutes;
