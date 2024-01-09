// * Modules * //
import express, { Request, Response } from "express";
import path from "path"; 

// * Exports * //
import { fileExists } from "../scripts/existenceChecks";
import authRoutes from "./auth";
import userRoutes from "./users";
 
// * Components * //
const routes = express.Router();

routes.use((req, res, next) => {
	if (req.url === "/api") { next(); } else {
		const htmlFilePath = path.join(__dirname, `../../client/out${req.url}.html`);
		if (fileExists(htmlFilePath)) {
			res.sendFile(htmlFilePath);
		} else { next(); }
	}
});

routes.use("/api/auth", authRoutes);
routes.use("/api/users", userRoutes);


routes.get("*", (req: Request, res: Response) => {
	const htmlFilePath = path.join(__dirname, "../../client/out/index.html");
	res.sendFile(htmlFilePath);
});

export default routes;


