// * Modules * //
import fs from "fs";


// * Exports * //
 
 
// * Components * //
export function fileExists(filePath: string) {
	try {
		return fs.existsSync(filePath);
	} catch (err) {
		return false;
	}
}