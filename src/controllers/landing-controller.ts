import { Landing } from "models";
import express from 'express';

export const getLanding = async (_req: express.Request, res: express.Response)=>{
    const data = await Landing.find()
    return res.status(200).json(data)
}