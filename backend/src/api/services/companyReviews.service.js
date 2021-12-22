import CompanyReviewsModel from "../../models/companyReviews.model.js"

export default class companyReviewsService {
    async addCompanyReviews(year_of_drive, company_name, job_profile, reviews) {
        const addNewCompanyReviews = new CompanyReviewsModel({
            year_of_drive,
            company_name,
            job_profile,
            reviews,
        })
        addNewCompanyReviews.save()
        return {
            success: true,
            companyReviews: addNewCompanyReviews,
        }
    }

    async  getAllCompanyReviews() {
        const companyReviews = CompanyReviewsModel.find()
        return {
            success: true,
            companyReviews,
        }
    }

    async getCompanyReviews(companyReviewsId) {
        const companyReview = CompanyReviewsModel.findById(companyReviewsId)
        return {
            success: true,
            companyReview,
        }
    }

    async updateCompanyReviews(companyReviewsBody, companyReviewsId) {
        const updatedCompanyReviews = CompanyReviewsModel.findByIdAndUpdate(
            companyReviewsId,
            companyReviewsBody,
            { new: true }
        )
        return {
            success: true,
            companyReviews: updatedCompanyReviews,
        }
    }

    async  deleteCompanyReviews(companyReviewsId) {
        CompanyReviewsModel.findByIdAndDelete(companyReviewsId)
        return {
            success: true,
        }
    }
}
