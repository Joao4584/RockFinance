import requestIp from "request-ip";
import { Request } from "express";

export const getIpClient = (request: Request): string | null => {
	if (request) {
		const ip_acess = requestIp.getClientIp(request);
		return ip_acess;
	} else {
		throw new Error("Objeto de solicitação nulo ou indefinido");
	}
};