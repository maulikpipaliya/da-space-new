import mongoose from "mongoose"

const comapanyReviewSchema = new mongoose.Schema({
    year_of_drive: {
        type: String,
    },
    company_name: {
        type: String,
    },
    job_profile: {
        type: String,
    },
    reviews: {
        type: String,
    },
})

const comapnayReviewModel = mongoose.model("companyReviews", comapanyReviewSchema)
export default comapnayReviewModel
