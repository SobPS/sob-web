import { Express, Request, Response } from "express";
import Logger from "../util/Logger";
import { UpdateInfo } from "../updateInfo";
export var latency: number = 0;
var c = new Logger("Server(Api)", "gray")
var ce = new Logger("Api(Send)", "italic")


export function Api(app: Express) {
    c.log('GetApi loaded.')

    app.get('/api/:apiID', (req: Request, res: Response) => {
        switch (req.params.apiID) {
            /*case "update":
                res.json(UpdateInfo)

                break;

            case "ping":
                const startTime = Date.now();

                fetch(`${process.env.https}://${ipAddress}:${require('..').port}/api/ping/assist`)
                    .then(response => response.json())
                    .then(data => {
                        const endTime = Date.now();
                        latency = endTime - startTime;
                    })
                    .catch(error => console.error('Error:', error));
                res.send(`${latency}`)

                break;*/

            /*case "send":
                const message: any = req.query.msg || undefined
                const sender: any = req.query.sender || "API call"

                if (message) {
                    ce.log(`${sender}: ${message}`)
                    res.status(200).send("Sent message as a string to internal logs.<br>Message content: " + message + "<br>Sender: " + sender)
                } else {
                    res.status(500).send("No message provided.")
                }

                break;*/ // wtf
                
            default:
                res.status(404).send(`An API named ${req.params.apiID} could not be found.`)
                break;
        }
    })
}