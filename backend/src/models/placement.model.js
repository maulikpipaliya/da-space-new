import mongoose from "mongoose"

const placementSchema = new mongoose.Schema({
    companyName: {
        type: String,
    },
    jobProfile: {
        type: String,
    },
    yearOfDrive: {
        type: String,
    },
    rounds: [
        {
            roundNameX: {
                type: String,
            },
            roundNameY: {
                type: String,
            },
            roundNameXDescription: {
                type: String,
            }
        }
    ]
})

const placementModel = mongoose.model("Placement", placementSchema)
export default placementModel
