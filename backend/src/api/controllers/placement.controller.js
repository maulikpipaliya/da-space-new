import asyncHandler from "express-async-handler"
import placementService from "../services/placement.service.js"

export const getAllPlacementRecords = async (req, res) => {
    console.log("Getting all placement records")
    try {
        const placements = await placementService().getAllPlacementRecords()
        res.status(200).json(placements)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const addPlacement = async (req, res) => {
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
}
export const getPlacementById = async (req, res) => {
    const id = req.params.id
    try {
        const placement = await placementService().getPlacementById(id)
        res.status(200).json(placement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updatePlacement = async (req, res) => {
    const id = req.params.id
    const placement = req.body
    try {
        const updatedPlacement = await placementService().updatePlacement(
            id,
            placement.companyName,
            placement.jobProfile,
            placement.yearOfDrive,
            placement.roundNameX,
            placement.roundNameY,
            placement.roundNameXDescriptioconst
        )
        res.status(200).json(updatedPlacement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const deletePlacement = async (req, res) => {
    const id = req.params.id
    try {
        const deletedPlacement = await placementService().deletePlacement(id)
        res.status(200).json(deletedPlacement)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}