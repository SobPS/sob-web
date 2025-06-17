import readline from 'readline'
import Logger from './Logger';
import fs from 'fs'

var c = new Logger("Command", "yellow")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export function splitStr(q: string): Array<string> {
    var arr: Array<string> = q.split(" ");
    return arr
}

export function removeLine() {
    readline.moveCursor(process.stdout, 0, -1)
    readline.clearLine(process.stdout, 1)
}
// repeat
export function Prompt() {
    rl.question("> ", cmd => {
        if (!cmd) {
            removeLine()
            Prompt()
        } else {
            PromptL(splitStr(cmd))

            Prompt()
        }
    })
}


export const Clear: string = "\rwa<<!>ClearMs<!>>\nwa"

export function PromptL(args: Array<string>) {
    // 0 - cmd name
    // >1 - cmd args

    let name = args[0]
    let cmdArgs: Array<string> = args.slice(1)

    // find cmd
    try {
        let cs = new Logger(name, "yellow")
        let response = require(`../cmd/${name}.ts`).Main(cmdArgs)

        if (response === Clear) {
            removeLine(); removeLine()
        } else
            cs.log(response)
    } catch (err: any) {
        if (!fs.existsSync(`./src/cmd/${name}.ts`))
            c.log(`Command ${name} not found.`)
        else if (fs.existsSync(`./src/cmd/${name}.ts`))
            c.log(`An error occured when trying to find/run ${name}: ${err}`)
    }
}