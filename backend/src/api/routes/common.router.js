import { Router } from "express"

import { registration } from "../controllers/common.controller.js"
const router = Router()

router.post("/register", registration)

export default router
