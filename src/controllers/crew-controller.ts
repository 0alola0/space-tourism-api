import { Crew } from "models";
import express from 'express'


export const getCrew = async (_req: express.Request,res: express.Response)=>{
   const data = await Crew.find()
   return res.status(200).json(data)
}