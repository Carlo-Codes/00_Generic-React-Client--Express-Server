import express from "express"
import * as Controller from "../controller/apiController"
//import * as AuthController from  //for authing

let router = express.Router()

//MiddleWare//
//router.use(AuthController.verifyAccessToken)//for authing

//Endpoints//
router.get("/ping", Controller.ping)

export default router