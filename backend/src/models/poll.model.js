import mongoose from "mongoose"
import optionSchema from "./options.model.js"

const pollSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
    },
    summary: {
        type: String,
    },
    question_text: {
        type: String,
        required: true,
    },
    start_at: {
        type: Date,
        // required: true,
        default: Date.now,
    },
    ends_at: {
        type: Date,
        // required: true,
        default: Date.now,
    },
    options: [optionSchema],

    createdAt: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
})

const pollModel = mongoose.model("poll", pollSchema)
export default pollModel
