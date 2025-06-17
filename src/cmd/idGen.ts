import { parseInt } from '../util';
import GenerateID from '../util/idGen';
import { Clear } from '../util/Prompt'

export function Main(args: Array<string>): string {
    if (!args[0])
        return Clear;

    try {
        let bs = parseInt(args[0])
        let quantity = 1
        var generated = 0;
        var ids = []
        if (args[1]) {
            quantity = Number.parseInt(args[1])
        }
        // the for loop didnt work (??)
        while (generated < quantity) {
            generated++
            ids.push(`${generated}) ${GenerateID(bs)}`)
        }
        return `Generated ID(s): \n${ids.join('\n')}`
    } catch (err: any) {
        if (err.includes('is not an integer'))
            return "Invalid arguments. Command usage:\nidGen <bytesize> [amount]"
        else
            return `An error occured while running the command: ${err}`
    }
}