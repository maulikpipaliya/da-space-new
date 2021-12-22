import mongoose from "mongoose"

const examSchema = new mongoose.Schema({
    subject_name: {
        type: String,
    },
    exam_name: {
        type: String,
    },
    year_of_exam: {
        type: String,
    },
    exam_notes: {
        type: String,
    },
})

const examModel = mongoose.model("exam", examSchema)
export default examModel
