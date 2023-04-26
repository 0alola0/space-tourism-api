import mongoose from "mongoose";
import dotenv from 'dotenv'


dotenv.config()
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_URL = `mongodb+srv://aloladze16:${MONGO_PASSWORD}@planetarium.s6uicbo.mongodb.net/test`

const connect = async () => {
    try{
        return mongoose.connect(MONGO_URL)
    }catch(e){
        console.log(e)
        return e
    }
}

export default connect