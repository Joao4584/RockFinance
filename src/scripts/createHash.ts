// * Modules * //
import crypto from "crypto";

// * Exports * //
 
 
// * Components * //
export function hashMD5(password: string): string {
	const passwordHash = crypto.createHash("md5").update(password).digest("hex");
	return passwordHash;
}