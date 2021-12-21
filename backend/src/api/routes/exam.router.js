import { Router } from "express"

import { helloExam } from "../controllers/exam.controller.js"
const router = Router()

const router = Router({
    mergeParams: true,
})

router.get("/", helloExam)

export default router
