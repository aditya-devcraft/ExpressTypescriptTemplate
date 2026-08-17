import { NextFunction, Request, Response } from "express";
//import { uuidv4 } from "zod/v4";
import { v4 as uuidv4 } from 'uuid';
import { asyncLocalStorage } from "../utils/helpers/request.helpers";

export const attachCorrelationIdMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Generate a unique correlation ID
    const correlationId = uuidv4();
    // Optionally, you can also attach it to the response headers
    req.headers['x-correlation-id'] =  correlationId;


    asyncLocalStorage.run({ correlationId: correlationId },() => {
        next();
    })
    
}