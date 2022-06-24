"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({ mensaje: "No authorized" });
    }
    const token = req.headers.authorization;
    console.log(token);
    // const payload = jwt.decode(token, req.app.locals.config.TOKEN)
    // console.log(payload)
    // if(payload.id_user != null){
    // }else{
    // }
    next();
};
exports.default = auth;
