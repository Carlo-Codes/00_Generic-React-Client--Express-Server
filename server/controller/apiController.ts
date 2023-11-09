import {RequestHandler} from "express"


export const ping : RequestHandler = async  (req, res, next) => {
    res.send("pong");
}

