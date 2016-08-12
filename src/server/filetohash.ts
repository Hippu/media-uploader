import * as crypto from "crypto";
import * as fs from "fs";


function fileToHash(path: string) {
    let readPromise = new Promise<string>((resolve, reject) => {
        fs.readFile(path, function(err, buffer) {
            let hash = crypto.createHash("sha256");
            hash.update(path)
            resolve(hash.digest("hex"))
        })
    })
    return readPromise
}

export default fileToHash;
