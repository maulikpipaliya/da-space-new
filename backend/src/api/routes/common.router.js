import { Router } from "express"

import { sayHello, registration } from "../controllers/common.controller.js"
const router = Router()

router.get("/users", sayHello)
router.post("/register", registration)

export default router
