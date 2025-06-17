export function Main(args: Array<string>): string {
    var code: number = Number.parseInt(args[0]) || 1

    process.exit(code)
}