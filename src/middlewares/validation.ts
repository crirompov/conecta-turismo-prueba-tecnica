import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jwt-simple'
import fs from 'fs'
import {IValidation} from '../models/IValidation'
import Logger from '../lib/logget/logger'
import { validationData } from './validations'

const auth = (req: Request, res: Response, next:NextFunction) => {
    const validationFile: IValidation = validationData as any
    Logger.info(`Validation data: ${validationFile}`)
    
    if (!req.headers.authorization) {
        Logger.error('Not Authorization header')
        return res.status(403).send({ mensaje: "No authorized" })
    }

    const token = req.headers.authorization
    const payload = jwt.decode(token, req.app.locals.config.TOKEN)
    Logger.info(`Payload: ${payload}`)

    //Check:
    if(validationFile.code == payload.code && validationFile.name == payload.name && validationFile.description == payload.description) {
        Logger.info('Object validated')
        req.body.validationDate = validationFile.date
        next()
    }else{
        Logger.error('Error checking validation object')
        return res.status(403).send({ mensaje: "Error checking validation object" })
    }

    
}

export default auth
