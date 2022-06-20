import { Schema, model, Document } from "mongoose";

const postSchema = new Schema({
    title: { type: String, require: true },
    text: { type: String, require: true },
    img: { type: String },
    creator: { type: Schema.Types.ObjectId }
})

export interface PostInterface extends Document {
    title: string
    text: string
    creator?: string
    img?: string
}

export default model<PostInterface>("posts", postSchema)

