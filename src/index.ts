import express, { Express, Request, Response } from "express";
const serveIndex = require('serve-index');
import path from 'path'
import { Clear, Prompt } from "./util/Prompt";
import Logger from "./util/Logger";
const s = new Logger("Server", "blue")
import morgan from 'morgan'
import fs from 'fs'
import SetRndPasswd from "./util/SetPasswd";
var errorHandler = require('express-error-handler'),
    handler = errorHandler({
        static: {
            '404': "/404"
        }
    })

console.clear()

s.log('Preparing the application...')


import dotenv from "dotenv";
dotenv.config();

const app: Express = express();

export const port = process.env.port || 3000;

import moment from 'moment-timezone'
var accessLogStream = fs.createWriteStream('./pvfiles/interactions.log', { flags: 'a' });

app.enable("trust proxy");

try {
    app.use('/global', express.static(path.join(__dirname, 'global')))
    app.listen(port, () => {
        s.log(`Server started at 127.0.0.1:${port}`)
        s.log(`${process.env.bootmessage || "Ready!"}`)
        Prompt()
    }).on('error', (e: any) => {
        if (e.code === "EADDRINUSE") {8
        }
    })
    // Setup listeners
    app.get('/api/ping/assist', (req, res, next) => {
        const timestamp = Date.now();
        res.json({ timestamp });
    });

    // SET LOG PASSWORDS
    //SetRndPasswd('../pvfiles/app.log')
    SetRndPasswd('./pvfiles/interactions.log')

    function removeURLParameter(url: string | undefined, parameterName: string) {
        //prefer to use l.search if you have a location/link object
        var urlparts: any = url?.split('?');
        if (urlparts.length >= 2) {

            var prefix = encodeURIComponent(parameterName) + '=';
            var pars = urlparts[1].split(/[&;]/g);

            //reverse iteration as may be destructive
            for (var i = pars.length; i-- > 0;) {
                //idiom for string.startsWith
                if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                    pars.splice(i, 1);
                }
            }

            return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
        }
        return url;
    }

    

    morgan.token('path', (req, res) => {
        return removeURLParameter(req?.url, "password")
    })

    morgan.token('datenow', (req, res) => {
        return `${moment().format("MM/DD/YYYY h:mm:ss A")} ${Intl.DateTimeFormat().resolvedOptions().timeZone || ""}`;
    })
    app.use(morgan(
        ':datenow - :method by :remote-addr in :path :status :response-time ms - content length :res[content-length] bytes',
        {
            stream: accessLogStream
        }
    ));
    
    // set up listeners
    const listeners = fs.readdirSync('./src/listeners')
    for (let count = 0; count < listeners.length; count++) {
        const listenerName = listeners[count];
        
        require(`./listeners/${listenerName}`).Api(app)
    }

    // set up pages
    const pages = fs.readdirSync('./src/pages')
    for (let count = 0; count < pages.length; count++) {
        const pageFilename = pages[count];
        
        if (pageFilename.endsWith('.ts'))
            require(`./pages/${pageFilename}`).Main(app)
        // in case a base html file was there
    }

    app.use(handler)
} catch (err: any) {
    console.error(err)
}