import asyncHandler from "express-async-handler"
import companyReviewsService from "../services/companyReviews.service.js";

export const createCompanyReviews = async (req, res) => {
    const companyReviews = req.body;
    try {
        const newcompanyReviews = await new companyReviewsService().addCompanyReviews(
            companyReviews.year_of_drive,
            companyReviews.company_name,
            companyReviews.job_profile,
            companyReviews.reviews
        );
        res.status(201).json(newcompanyReviews);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const getAllCompanyReviews = async (req, res) => {
    try {
        const companyReviews = await new companyReviewsService().getAllCompanyReviews();
        res.status(200).json(companyReviews);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export const getCompanyReviews =async (req, res) => {
    try {
        const companyReview = await new companyReviewsService().getCompanyReviews(req.params.companyReviewsId);
        res.status(200).json(companyReview);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}



export const updateCompanyReviews = async (req, res) => {
    try {
        const companyReviews = await new companyReviewsService().updateCompanyReviews(
            req.body,
            req.params.companyReviewsId
        );
        res.status(200).json(companyReviews);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const deleteCompanyReviews = async (req, res) => {
    try {
        await new companyReviewsService().deleteCompanyReviews(req.params.companyReviewsId);
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


