import { Express, Request, Response, json } from "express";
import Logger from '../util/Logger'
import '../updateInfo'
var c = new Logger("Server(Pages)", "gray")

import dotenv from "dotenv";
dotenv.config();

export async function Main(app: Express) {
    c.log('Found page "root".')

    app.get('/', async (req: Request, res: Response) => {
        res.send(
            `<!DOCTYPE html>
<html class="dark" style="color-scheme: dark;">

<head>
    <title>SobPS!</title>
    <link rel="stylesheet" href="/global/css/style.css">
    <link rel="preload" href="/global/fonts/Genshin-Font.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="icon" type="image/x-icon" href="/global/images/sob.ico">
</head>

<body>
    <div class="styled">
        <h1>${process.env.name || "SobPS"}</h1>
        <p>${process.env.description || "Sob..."}</p>
    </div>
</body>

</html>`
        )
    })
}