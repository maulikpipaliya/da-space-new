import { Router } from "express"

import {
    createCompanyReviews,
    getAllCompanyReviews,
    getCompanyReviews,
    updateCompanyReviews,
    deleteCompanyReviews,
} from "../controllers/companyReviews.controller.js"

const router = Router()

router.post("/create", createCompanyReviews)
router.get("/", getAllCompanyReviews)
router.get("/:companyReviewsId", getCompanyReviews)
router.put("/:companyReviewsId", updateCompanyReviews)
router.delete("/:companyReviewsId", deleteCompanyReviews)

export default router
