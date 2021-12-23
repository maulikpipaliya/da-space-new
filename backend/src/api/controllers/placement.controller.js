import asyncHandler from "express-async-handler"
import placementService from "../services/placement.service.js"

export const getAllPlacementRecords = async (req, res) => {
    console.log("Getting all placement records")
    try {
        const placements = await new placementService().getAllPlacementRecords()
        res.status(200).json(placements)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const addPlacement = async (req, res) => {
    const placement = req.body
    try {
        const newPlacement = await new placementService().addPlacement(
            "61bf8af06017de30ebb418e0",
            placement.companyName,
            placement.jobProfile,
            placement.yearOfDrive,
            placement.rounds
        )
        res.status(201).json(newPlacement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
export const getPlacementById = async (req, res) => {
    const id = req.params.placementID
    try {
        const placement = await new placementService().getPlacementById(id)
        res.status(200).json(placement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePlacement = async (req, res) => {
    const id = req.params.placementID
    const placement = req.body
    try {
        const updatedPlacement = await new placementService().updatePlacement(
            id,
            placement
        )
        res.status(200).json(updatedPlacement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deletePlacement = async (req, res) => {
    const id = req.params.placementID
    try {
        const deletedPlacement = await new placementService().deletePlacement(
            id
        )
        res.status(200).json(deletedPlacement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
