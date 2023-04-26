import mongoose from "mongoose";
import { TLanding } from "types";

const {Schema} = mongoose
const landingSchema = new Schema<TLanding>({
    header:{
        type: Schema.Types.String,
        required: true
    }, 
    name:{
        type: Schema.Types.String,
        required: true
    },   
    description:{
        type: Schema.Types.String,
        required: true
    }
})

const Landing = mongoose.model<TLanding>('Landing', landingSchema)

export default Landing