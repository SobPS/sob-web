import fs from 'fs'
import { Clear } from '../util/Prompt'


export function Main(args: Array<string>): string {
    if (!args)
        return Clear;

    try {
        var name = args[0]
        var file = `pvfiles/${name}.passwd`
        var pwd = fs.readFileSync(file)

        return `Found entry for ${name}: ${pwd}`
    } catch (err) {
        if (!args[0])
            return Clear;
        return `Couldn't find a file named ${args[0]}.`
    }
}