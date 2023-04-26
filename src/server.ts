import dotenv from 'dotenv'
import express from "express";
import connect from "config/mongo";
import { getCrew, getDestinations, getTechnology, getLanding } from "controllers";

dotenv.config()
connect()
const app = express()
app.get("/destionation", getDestinations)
app.get("/crew", getCrew)
app.get("/technology", getTechnology)
app.get("/landing", getLanding)
app.listen(3001, () => console.log("Server is listening at http://localhost:3001"))