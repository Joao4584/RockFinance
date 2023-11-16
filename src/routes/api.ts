// * Modules * //
import express from "express";

// * Exports * //
import * as AuthController from "../controllers/authController";
import { verificationToken } from "../middlewares/verificationMiddleware";

// * Components * //
const apiRoutes = express.Router();

apiRoutes.post("/auth/login", AuthController.login);
apiRoutes.post("/auth/register", AuthController.register);

apiRoutes.get("/auth/credencials", verificationToken, AuthController.searchMyUser);

export default apiRoutes;
