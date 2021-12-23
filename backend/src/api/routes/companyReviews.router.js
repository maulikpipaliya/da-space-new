import { Router } from "express"

import {
    createCompanyReviews,
    getAllCompanyReviews,
    getCompanyReviews,
    updateCompanyReviews,
    deleteCompanyReviews,
} from "../controllers/companyReviews.controller.js"
import isLoggedIn from "../middlewares/auth.middleware.js"

const router = Router()

router.post("/create", isLoggedIn, createCompanyReviews)
router.get("/", isLoggedIn, getAllCompanyReviews)
router.get("/:companyReviewsId", isLoggedIn, getCompanyReviews)
router.put("/:companyReviewsId", isLoggedIn, updateCompanyReviews)
router.delete("/:companyReviewsId", isLoggedIn, deleteCompanyReviews)

export default router
