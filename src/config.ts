import logger from 'morgan'
import { config } from 'dotenv'
import bodyParser from 'body-parser'

const SETTINGS = config()
//TODO: TYPEAR

export default function (app: any) {
    app.disabled("x-powered-by")

    app.set("env", SETTINGS.parsed?.ENV)
    app.set("config", SETTINGS.parsed)
    app.set("port", SETTINGS.parsed?.PORT)
    app.locals.env = app.get("env")
    app.locals.config = app.get("config")

    if (process.env.NODE_ENV !== "test") {
        app.use(logger("combined"))
    }
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded( { extended: false }))

}