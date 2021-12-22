import { Router } from "express"

import { createCompanyReviews,
    getAllCompanyReviews,
    getCompanyReviews,
     updateCompanyReviews,
     deleteCompanyReviews} from "../controllers/companyReviews.controller.js" 
import isLoggedIn from "../middlewares/auth.middleware.js"
   

const router = Router()
//GET /companyReviews = gets all companyReviews
// GET /companyReviews/:placementRecordId = gets specific companyReviews
// POST /companyReviews = create a new record
// PUT /companyReviews/:id = update specific companyReviews
// DELETE /companyReviews/:id = delete specific companyReviews

router.post("/",isLoggedIn ,createCompanyReviews)
router.get("/",isLoggedIn, getAllCompanyReviews)
router.get("/:companyReviewsId",isLoggedIn, getCompanyReviews)
router.put("/:companyReviewsId", isLoggedIn,updateCompanyReviews)
router.delete("/:companyReviewsId",isLoggedIn, deleteCompanyReviews)


export default router