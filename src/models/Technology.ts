import mongoose from "mongoose";
import { TTechnology } from "types";

const {Schema} = mongoose
const technologySchema = new Schema<TTechnology>({
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
    description:{
        type: Schema.Types.String,
        required: true
    }
})

const Technology = mongoose.model<TTechnology>('Technology', technologySchema)

export default Technology

