export function parseInt(args: any): any {
    const n = Number.parseInt(args)
    if (Number.isInteger(n))
        return n
    else
        throw new Error(`${args} is not an integer`) // so its easier
}