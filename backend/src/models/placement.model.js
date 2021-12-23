import mongoose from "mongoose"

const placementSchema = new mongoose.Schema({
    interviewee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    companyName: {
        type: String,
        required: true,
    },
    jobProfile: {
        type: String,
    },
    yearOfDrive: {
        type: String,
    },
    rounds: [
        {
            roundName: {
                type: String,
                required: true,
            },
            roundDescription: {
                type: String,
            },
        },
    ],
})

const placementModel = mongoose.model("Placement", placementSchema)
export default placementModel
