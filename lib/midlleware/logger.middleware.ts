import {type NextFunction, type Request, type Response} from "express";

const logger = (req : Request, res : Response, next : NextFunction) => {
    console.log("incoming request from ", req.ip, "\n");
    console.log("request url ", req.url, "\n");
    next();
}

export default logger;