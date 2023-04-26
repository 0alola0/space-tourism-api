import mongoose from "mongoose";
import { TDestination } from "types";

const {Schema} = mongoose
const destinationSchema = new Schema<TDestination>({
    name:{
        type: Schema.Types.String,
        required: true
    },
    description:{
        type: Schema.Types.String,
        required: true
    },
    distance:{
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
    travel:{
        type: Schema.Types.String,
        required: true
    },    
})

const Destination = mongoose.model<TDestination>('Destination', destinationSchema)

export default Destination
