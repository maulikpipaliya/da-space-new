import asyncHandler from "express-async-handler"
import placementService from "../services/placement.service.js"

// export const helloPlacement = asyncHandler(async (req, res) => {
//     res.status(200).send({
//         success: true,
//         message: "Welcome to Placement APIs",
//     })
// })

export const getAllPlacementRecords = asyncHandler(async (req, res) => {
    console.log("Getting all placement records")
    try {
        const placements = await placementService().getAllPlacementRecords()
        res.status(200).json(placements)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})

export const addPlacement = asyncHandler(async (req, res) => {
    const placement = req.body
    try {
        const newPlacement = await new placementService().addPlacement(
            placement.companyName,
            placement.jobProfile,
            placement.yearOfDrive,
            placement.roundNameX,
            placement.roundNameY,
            placement.roundNameXDescriptioconst
        )
        res.status(201).json(newPlacement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
})
