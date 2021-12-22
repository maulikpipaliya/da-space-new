import { Router } from "express"

import { addPlacement } from "../controllers/placement.controller.js"

const router = Router({
    mergeParams: true,
})

router.post("/addPlacement", addPlacement)

export default router
