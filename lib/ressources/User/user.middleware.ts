import type { Request, NextFunction, Response } from "express";

export async function mid (req : Request, res : Response, next : NextFunction) : Promise<void> {
    console.log("midll work")
    next();
}
export async function pong (req: Request, res: Response): Promise<void> {
        try {
            res.send("pong");
        } catch (err) {
            console.log(err);
            res.status(500).json({ errorMessage: err });
        }
    };