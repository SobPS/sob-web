import { Express, Request, Response } from "express";
import Logger from "../util/Logger";
import fs from "fs";
export var latency: number = 0;
var c = new Logger("Server(Pvf)", "gray")
var ce = new Logger("Server(PvfSetup)", "gray")
function findInArray(array: any[], find: any) {
    for (const item of array) {
        if (item === find)
            return item
    }

    return null
}
export function Api(app: Express) {

    var files: any[] = []

    if (process.platform === "win32")
        var paths: string[] = [
            `${__dirname.replace('\\src\\listeners', '')}\\pvfiles\\:filename`,
        ]
    else
        var paths: string[] = [
            `${__dirname.replace('/src/listeners', '')}/pvfiles/:filename`,
        ]

    for (const watchPath of paths) {
        var cleanPath = watchPath.replace(':filename', '');

        ce.log(`Checking contents of ${cleanPath}`)

        for (const filename of fs.readdirSync(`${cleanPath}`)) {
            files.push(
                `${filename.toString()}`,
            );
            ce.log(`Found a PV file: ${filename}`)
        }
        app.get('/pvfiles/:filename', (req: Request, res: Response) => {
            var filename: string = req.params.filename;
            var password = req.query.password
            var fullPath: string = `${cleanPath}${findInArray(files, filename)}`;

            if (files.includes(filename) && fs.existsSync(fullPath)) {
                if (files.includes(filename + '.passwd') && fs.existsSync(`${fullPath}.passwd`)) {
                    if (password === fs.readFileSync(`${fullPath}.passwd`, { encoding: 'utf8' })) {
                        c.log(`Sent a private file: ${fullPath}`)
                        res.status(200).sendFile(`${fullPath}`)
                    }
                    else if (!password) {
                        res.status(500).send(`Cannot access ${filename} without a password.`)
                    } else
                        res.status(500).send('Password entered is incorrect.')
                } else
                    res.status(404).send("Password file for " + filename + " not found")
            } else
                res.status(404).send(
                    `File not found.`)

            /*  Searched: ${fullPath}
                <br>Input filename: ${filename}
                <br>File array: ${files.toString()}
                <br>Input filename matches file: ${fs.existsSync.log(fullPath)} | but matches an entry in the files array? ${files.includes(filename)}*/
        })
        c.log(`GetPrivateFile loaded.`)
    }
}