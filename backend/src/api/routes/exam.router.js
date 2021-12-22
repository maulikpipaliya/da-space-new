import { Router } from "express"
import isLoggedIn from "../middlewares/auth.middleware.js"
import { helloExam,createExam } from "../controllers/exam.controller.js"

const router = Router({
    mergeParams: true,
})

router.get("/", helloExam)
router.post("/create",isLoggedIn, createExam)

export default router
