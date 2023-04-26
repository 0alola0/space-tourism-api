import mongoose from "mongoose";
import { TCrew } from "types";

const {Schema} = mongoose
const crewSchema = new Schema<TCrew>({
    name:{
        type: Schema.Types.String,
        required: true
    },
    images: {
        type: new Schema({
          png: {
            type: Schema.Types.String,
            required: true,
          },
          webp: {
            type: Schema.Types.String,
            required: true,
          },
        }),
        required: true,
    },   
    role:{
        type: Schema.Types.String,
        required: true
    },
    bio:{
        type: Schema.Types.String,
        required: true
    },
})

const Crew = mongoose.model<TCrew>('Crew', crewSchema)

export default Crew
