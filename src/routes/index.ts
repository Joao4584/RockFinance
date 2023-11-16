// * Modules * //
import express, { Request, Response } from "express";
import path from "path"; 

// * Exports * //
import apiRoutes from "./api";
import { fileExists } from "../models/existenceChecks";
 
// * Components * //
const routes = express.Router();

routes.use((req, res, next) => {
	const requestedRoute = req.url;
	if (requestedRoute === "/api") {
		next();
	} else {
		const htmlFilePath = path.join(__dirname, `../../client/out${requestedRoute}.html`);

		if (fileExists(htmlFilePath)) {
			res.sendFile(htmlFilePath);
		} else {
			next();
		}
	}
});

routes.use("/api", apiRoutes);

routes.get("*", (req: Request, res: Response) => {
	const htmlFilePath = path.join(__dirname, "../../client/out/index.html");
	res.sendFile(htmlFilePath);
});

export default routes;

