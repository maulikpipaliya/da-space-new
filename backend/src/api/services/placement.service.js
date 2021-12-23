import placementModel from "../../models/placement.model.js"

export default class placementService {
    async addPlacement(
        interviewee,
        companyName,
        jobProfile,
        yearOfDrive,
        rounds
    ) {
        console.log("Adding in placement service")
        const addNewPlacement = new placementModel({
            interviewee,
            companyName,
            jobProfile,
            yearOfDrive,
            rounds,
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

    async getPlacementById(placementId) {
        const placement = await placementModel.findById(placementId)
        return {
            success: true,
            placement,
        }
    }

    async updatePlacement(placementId, placementBody) {
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
