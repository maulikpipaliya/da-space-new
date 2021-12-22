import { Router } from "express"
import isLoggedIn from "../middlewares/auth.middleware.js"
import {
    createExam,
    getAllExamRecords,
    getExam,
    updateExam,
} from "../controllers/exam.controller.js"

const router = Router({
    mergeParams: true,
})

router.get("/", isLoggedIn, getAllExamRecords)
router.get("/:examId", isLoggedIn, getExam)
router.post("/create", isLoggedIn, createExam)
router.put("/update/:examId", isLoggedIn, updateExam)

export default router
