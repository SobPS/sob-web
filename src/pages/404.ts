import { Express, Request, Response } from "express";
import Logger from '../util/Logger'
var c = new Logger("Server(Pages)", "gray")

import dotenv from "dotenv";
dotenv.config();


export async function Main(app: Express) {
    c.log('Found page "404".')
    // @ts-ignore
    app.get((req: Request, res: Response) => {
        res.status(404).send(
            /*`

            Update server for Journey to Nowhere. Local version: ${require('../gameinfo').GameVersion}
            <br>Server region: ${ipd?.country || '(alternate) ' + process.env.altregion}
            <br>Server ping: ${latency}ms
            
            `*/
            `<!DOCTYPE html>

<body>
    <style>
        h1 {
            font-size: 50
        }

        body {
            text-align: left;
            color: black;
            font-family: Verdana, sans-serif;
        }

        a:link {
            color: #3c72a3
        }

        a:visited {
            color: #2a567d
        }

        @media screen and (prefers-color-scheme: dark) {
            body {
                background-color: #383737;
                color: #b0acac;
            }
        }

        @media screen and (prefers-color-scheme: light) {
            body {
                background-color: #e3e3e3;
                color: black;
            }
        }

        .description {
            font-size: 32px
        }

        .details {
            font-size: 20px
        }

        .extra {
            font-size: 24px
        }

    </style>
    <h1>${process.env.servicename || "File Server"}</h1>
    <div class="details">
        ${/*<p class="details">Local version: ${require('../updateInfo').GameVersion}</p>*/""}
        <p>Server region: ${'(alternate) ' + process.env.altregion}</p>
    </div>
    <br><hr><br>
    <div class="description">
        ${process.env.notfound || "The file you were looking for does not exist on the server."}
    </div>
</body>`
        )
    })
}