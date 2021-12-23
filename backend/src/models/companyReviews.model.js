import mongoose from "mongoose"

const companyReviewSchema = new mongoose.Schema({
    yearOfDrive: {
        type: String,
    },
    companyName: {
        type: String,
    },
    jobProfile: {
        type: String,
    },
    reviews: {
        type: String,
    },
})

const companyReviewModel = mongoose.model("companyReviews", companyReviewSchema)
export default companyReviewModel
