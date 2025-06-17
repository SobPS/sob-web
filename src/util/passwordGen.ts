import chp from 'child_process'
import Logger from './Logger'
const c = new Logger("Server(Pwd)")

export default function PasswordGen(bs: number): string {
    var cmd = `dd if=/dev/random bs=${bs} count=1 status=none | base64 | tr -d "+" | tr -d "/" | tr -d "="`
    var fallback = "NCUnHSIyMRfEiqs2EwugQ6PxcBiua4wBxZv3crCapA"

    // if you're on windows please run this on bash
    // if this doesnt work on linux idek

    try {
        const cmdOutput: string = chp.execSync(cmd).toString().trim()
        if (!cmdOutput) {
            c.log(`Password generate output is empty...`)
            return fallback;
        } else
            return cmdOutput;
    } catch (err) {
        c.log("Server cannot generate a safe password due to missing binaries. If you are using Windows, please have bash in your PATH. The password has been set to a fallback.")
        return fallback;
    }
}
