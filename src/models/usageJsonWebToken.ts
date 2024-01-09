// * Modules * //
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

// * Component * //

dotenv.config();
interface TokenPayloadJWT {
    user: string;
    name: string;
    id: number;
}

class UseJsonWebToken {


	public static createJWT(payloadContruct: TokenPayloadJWT): string {
		if (!process.env.SECRET_KEY_JWT) {
			throw new Error("Chave secreta JWT não está definida no arquivo .env");
		}

		const tokenJWT = jwt.sign(payloadContruct, process.env.SECRET_KEY_JWT, { expiresIn: "4h" });
		return tokenJWT;
	}
    
}

export { UseJsonWebToken, TokenPayloadJWT };