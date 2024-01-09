// * Modules * //
import { PrismaClient } from "@prisma/client";

// * Exports * //
import { hashMD5 } from "../scripts/createHash";
 
// * Components * //
const prisma = new PrismaClient();

class AuthenticateLogin {

	private user: string;
	private password: string;
	private email?: string;
	private name?: string;
	private ip_access: string | null;

	constructor(user: string, password: string, ip_access: string | null, email?: string, name?: string) {
		this.user = user;
		this.password = password;
		this.email = email;
		this.name = name;
		this.ip_access = ip_access;
	}

	public async verifyAuth() {

		const pass = hashMD5(this.password);

		const user = await prisma.users.findFirst({
			where: {
				OR: [
					{
						user: this.user,
					},
					{
						email: this.user,
					},
				],
				password: pass,
			},
		});

		if (user) {
			await this.updateIpAddress(user.id, this.ip_access);
		}

		return user;
	}

	public async createUser() {
		if (this.name && this.email) {
			const existingUser = await prisma.users.findFirst({
				where: {
					OR: [
						{ user: this.user },
						{ email: this.email },
					],
				},
			});

			if (existingUser) {
				throw new Error("Usuário com este nome de usuário ou email já existe.");
			}

			const hashedPassword = hashMD5(this.password);
			const newUser = await prisma.users.create({
				data: {
					user: this.user,
					name: this.name,
					password: hashedPassword,
					email: this.email
				}
			});
			if(newUser){
				await this.updateIpAddress(newUser.id, this.ip_access);
			}
			return newUser;
		}
	}

	//   public async updateUser(userId: number) {
	// 	const updatedUser = await prisma.users.update({
	// 	  where: {
	// 			id: userId,
	// 	  },
	// 	  data: {
	// 			name,
	// 			email,
	// 			updated_at: new Date()
	// 	  },
	// 	});
	// 	return updatedUser;
	//   }

	private async updateIpAddress(userId: number, ip_access: string | null): Promise<void> {
		await prisma.users.update({
			where: {
				id: userId,
			},
			data: {
				ip_acess: ip_access,
			},
		});
	}
}

export { AuthenticateLogin };