// * Modules * //
import express from "express";
import path from "path"; 
import fs from "fs";
// * Exports * //
 
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


routes.get("/api", (req,res) => {
	res.json({"tes":"s"});
});
routes.get("*", (req, res) => {
	const htmlFilePath = path.join(__dirname, "../../client/out/index.html");
	res.sendFile(htmlFilePath);
});


export default routes;

function fileExists(filePath: string) {
	try {
		return fs.existsSync(filePath);
	} catch (err) {
		return false;
	}
}