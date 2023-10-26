import {RequestHandler} from "express"


export const ping : RequestHandler = async  (req, res, next) => {
    console.log(req.body.username)
    res.send("pong")
}

