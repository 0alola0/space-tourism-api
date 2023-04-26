import { Destination } from "models";
import express from 'express';

export const getDestinations = async (_req: express.Request, res: express.Response)=>{
    const data = await Destination.find()
    return res.status(200).json(data)
}