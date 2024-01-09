// * Modules * //
import { Response } from "express";
import { PrismaClient } from "@prisma/client";
import { AuthenticatedRequest } from "../middlewares/verificationMiddleware";

// * Exports * //
 
 
// * Components * //
const prisma = new PrismaClient();

export const editImage = async (req: AuthenticatedRequest, res: Response) => {
	const { image_url } = req.body;
	const payload = req.user;

	if(payload){
		const user = await prisma.users.update({
			where: {
				id: payload.id
			},
			data: {
				image_url: image_url
			},
			select: {
				user: true,
				image_url: true
			}
		});
	
		if (user) {
			res.json({ data: user });
		} else {
			res.status(401).json({ message: "Usuário não encontrado" });
		}
	}else{
		res.status(401).json({ message: "Usuário não iniciado." });
	}
};