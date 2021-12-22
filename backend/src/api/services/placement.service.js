import placementModel from "../../models/placement.model.js"

export default class placementService {
    async addPlacement(
        companyName,
        jobProfile,
        yearOfDrive,
        roundNameX,
        roundNameXDescription
    ) {
        const addNewPlacement = new placementModel({
            companyName,
            jobProfile,
            yearOfDrive,
            roundNameX,

            roundNameXDescriptions,
        })
        await addNewPlacement.save()
        return {
            success: true,
            placement: addNewPlacement,
        }
    }

    async getAllPlacementRecords() {
        const placements = await placementModel.find()
        return {
            success: true,
            placements,
        }
    }

    async getPlacement(placementId) {
        const placement = await placementModel.findById(placementId)
        return {
            success: true,
            placement,
        }
    }

    async updatePlacement(placementBody, placementId) {
        const updatedPlacement = await placementModel.findByIdAndUpdate(
            placementId,
            placementBody,
            { new: true }
        )
        return {
            success: true,
            placement: updatedPlacement,
        }
    }

    async deletePlacement(placementId) {
        const deletedPlacement = await placementModel.findByIdAndDelete(
            placementId
        )
        return {
            success: true,
            placement: deletedPlacement,
        }
    }
}
