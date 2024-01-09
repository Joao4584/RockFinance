// * Modules * //
import { PrismaClient } from "@prisma/client";


 

// * Exports * //
const prisma = new PrismaClient();

class Logs {

	static async create(
		title: string,
		reference: string,
		content: string,
		user_id: number, 
		link_id: number | null
	){

		const log = await prisma.logs.create({
			data: {
				title: title,
				content: content,
				reference: reference,
				user_id: user_id,
				link_id: link_id
			}
		});

		if (!log) {
			throw new Error("Não foi possivel criar o Log.");
		}

		return log;
	}





    

    
}

export default Logs;