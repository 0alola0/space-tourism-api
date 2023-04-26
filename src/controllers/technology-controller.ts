import { Technology } from "models";
import express from 'express'


export const getTechnology = async (_req: express.Request,res: express.Response)=>{
   const data = await Technology.find()
   return res.status(200).json(data)
}