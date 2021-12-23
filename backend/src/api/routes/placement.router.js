import { Router } from "express"

import {
    addPlacement,
    updatePlacement,
    deletePlacement,
    getPlacementById,
    getAllPlacementRecords,
} from "../controllers/placement.controller.js"

const router = Router({
    mergeParams: true,
})

router.post("/addPlacement", addPlacement)
router.get("/getPlacementById/:placementID", getPlacementById)
router.get("/getAllPlacementRecords", getAllPlacementRecords)
router.put("/updatePlacement/:placementID", updatePlacement)
router.delete("/deletePlacement/:placementID", deletePlacement)

export default router
