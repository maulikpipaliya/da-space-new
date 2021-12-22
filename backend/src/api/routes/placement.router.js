import { Router } from "express"

import {
    addPlacement,
    updatePlacement,
    deletePlacement,
    getPlacementById,
    getAllPlacementRecords,
} from "../controllers/placement.controller.js"
import isLoggedIn from "../middlewares/auth.middleware.js"

const router = Router({
    mergeParams: true,
})

router.post("/addPlacement", isLoggedIn, addPlacement)
router.get("/getPlacementById/:placementID", isLoggedIn, getPlacementById)
router.get("/getAllPlacementRecords", isLoggedIn, getAllPlacementRecords)
router.put("/updatePlacement/:placementID", isLoggedIn, updatePlacement)
router.delete("/deletePlacement/:placementID", isLoggedIn, deletePlacement)

export default router
