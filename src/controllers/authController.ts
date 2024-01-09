// * Modules * //
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import moment from "moment";

// * Exports * //
import { AuthenticateLogin } from "../models/authenticateLogin";
import { getIpClient } from "../scripts/clientIP";
import { UseJsonWebToken } from "../models/usageJsonWebToken";
import { AuthenticatedRequest } from "../middlewares/verificationMiddleware";
import Logs from "../services/logs";
 
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
					Logs.create(
						"Logado no sistema",
						"logged_sucess",
						"Usuário logado com <b>Sucesso</b> no sistema!",
						user.id,
						null
					);

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
				ip_acess: true,
				image_url: true,
				status: true,
				created_at: true
			}
		});
	
		if (user) {
			moment.locale("pt-br");
			const formattedCreatedAt = moment(user.created_at).format("DD/MM/YYYY");
			const timeCreatedAt = moment(user.created_at).startOf("day").fromNow();

			const userResponse = {
				...user,
				formatted_created_at: formattedCreatedAt,
				timeCreatedAt: timeCreatedAt
			};
		
			res.json({ data: userResponse });
		} else {
			res.status(401).json({ message: "Usuário não encontrado" });
		}
	}else{
		res.status(401).json({ message: "Usuário não iniciado." });
	}
	
};