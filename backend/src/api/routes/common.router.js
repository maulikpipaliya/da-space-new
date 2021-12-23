import { Router } from "express"

import {
    registration,
    updateProfile,
} from "../controllers/common.controller.js"
const router = Router()

router.post("/register", registration)
router.put("/updateProfile", updateProfile)

export default router
