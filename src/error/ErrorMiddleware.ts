import Express from "express";
import { ResponseFactory } from "../shared/ResponseFactory";

export const ErrorMiddleware = (
    err: Express.ErrorRequestHandler,
    req: Express.Request,
    res: Express.Response,
    next: Function
): void => {
    res.status(500).json(ResponseFactory.error("Internal error"));
};
