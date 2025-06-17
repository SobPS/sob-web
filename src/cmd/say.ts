import { Clear } from '../util/Prompt'

// test cmd (why)
export function Main(args: Array<string>): string {
    if (!args)
        return Clear;

    return args.join(' ')
}