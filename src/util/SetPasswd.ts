import fs from 'fs/promises'
import PasswordGen from './passwordGen'
import Logger from './Logger'
const l = new Logger("Server(PvfPw)", "gray")

export const getFileNameFromPath = (path: string) => {
    return path.replace(/^.*[\\/]/, '')
}

export default function SetRndPasswd(OriginalFilePath: string) {
    const Password = PasswordGen(48);

    fs.writeFile(`${OriginalFilePath}.passwd`, Password)
    //l.log(`Wrote password for ${getFileNameFromPath(OriginalFilePath)}.passwd: ${Password} `)
    l.log("Wrote password.")
}
