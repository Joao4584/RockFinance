// * Modules * //
import { Request, Response } from "express";
import { AuthenticateLogin } from "../services/authenticateLogin";
import { getIpClient } from "../models/clientIP";
import { UseJsonWebToken } from "../services/usageJsonWebToken";
import { AuthenticatedRequest } from "../middlewares/verificationMiddleware";
import { PrismaClient } from "@prisma/client";

// * Exports * //
 
 
// * Components * //
const prisma = new PrismaClient();

export const login = (req: Request, res: Response) =>{
	const { user, password } = req.body;
	const verifyLogin = new AuthenticateLogin(user, password, getIpClient(req));

	verifyLogin.verifyAuth()
		.then((user) => {
			if(user){
				if(user?.id, user?.name, user?.user ){
					const token = UseJsonWebToken.createJWT({id: user?.id, name: user?.name, user: user?.user});
					res.json({ token: token, message: "Logado com sucesso!" });
				}else{
					res.status(500).json({ message: "Ocorreu um erro interno." });
				}
			}else{
				res.status(400).json({ message: "Usuario ou senha incorretos" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: error });
		});
};

export const register = (req: Request, res: Response) =>{
	const { user, password, email, name } = req.body;
	
	const register = new AuthenticateLogin(user, password, getIpClient(req), email, name);

	register.createUser()
		.then((user) => {
			if(user){
				res.json({ data: user });
			}else{
				res.status(400).json({ "message": "Não foi possivel criar o Usuario" });
			}
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
};

export const searchMyUser = async (req: AuthenticatedRequest, res: Response) => {
	const payload= req.user;

	if(payload){
		const user = await prisma.users.findUnique({
			where: {
				id: payload.id,
			},
			select: {
				email: true,
				name: true,
				user: true,
				ip_acess: true
			}
		});
	
		if (user) {
			res.json({ data: user });
		} else {
			res.status(401).json({ message: "Usuário não encontrado" });
		}
	}
	
};