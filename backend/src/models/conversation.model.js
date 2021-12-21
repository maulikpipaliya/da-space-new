import mongoose from "mongoose"
import messagesModel from "./messages.model.js"

const converstationSchema = new mongoose.Schema({
    name: String,
    //[mongoose.Schema.Types.ObjectId],
    members: {
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
        validate: [arrayLimit, "A conversation must have at least 2 members"],
    },
    /* type: {
        type: String,
        enum: ["private", "group"],
        default: "private",
    }, */
    messages: [messagesModel],
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    is_deleted: {
        type: Boolean,
        default: false,
    },
    deleted_at: Date,
})
function arrayLimit(val) {
    return val.length > 1
}

const converstationModel = mongoose.model("Converstation", converstationSchema)
export default converstationModel
