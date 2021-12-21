import mongoose from "mongoose"

const optionSchema = new mongoose.Schema({
    option_text: {
        type: String,
    },
    votes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
})

export default optionSchema
