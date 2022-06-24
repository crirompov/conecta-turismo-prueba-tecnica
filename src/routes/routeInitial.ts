import * as express  from "express";
import { auth } from "../middlewares";
import Logger from "../lib/logget/logger";

const router = express.Router()

router.post( "/", auth, ( req: any, res: any ) => {

    console.log(req.body)
    Logger.info(`Code: ${req.body.code}`)

    const today = new Date(req.body.date).getTime()
    const validationDate = new Date(req.body.validationDate).getTime()
    const result = (today - validationDate) / 86400000
    Logger.info(`Result: ${result}`)
    
    Logger.info(req.body)
    res.send( `Resultado: ${result} days` );
} );

export default router