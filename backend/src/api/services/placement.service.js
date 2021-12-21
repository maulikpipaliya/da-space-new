import placementModel from "../../models/placement.model.js"


export default class placementService{
    async addPlacement(
        companyName,
        jobProfile,
        yearOfDrive,
        roundNameX,
        roundNameY,
        roundNameXDescriptioconst
    )
    {
        const addNewPlacement = new placementModel({
            companyName,
            jobProfile,
            yearOfDrive,
            roundNameX,
            roundNameY,
            roundNameXDescriptioconst
        })
        await addNewPlacement.save()
        return addNewPlacement
    }
}