import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthenticatedRequest extends Request {
    user?: { [key: string]: any };
}

export function verificationToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {

	const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

	if (!token) {
		return res.status(401).json({ data: "Unauthorized", message: "Token não encontrado." });
	}
  
	try {
		const payload = jwt.verify(token, process.env.SECRET_KEY_JWT || "") as { [key: string]: any };
		req.user = payload;
		next();
	} catch (err) {
		res.status(401).json({ data: "Forbidden", message: "Erro ao tentar verificar o token / Token Invalido." }).end();
	}
}
