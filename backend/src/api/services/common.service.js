import userModel from "../../models/user.model.js"

export default class CommonService {
    async registration(
        username,
        password,
        email,
        firstName,
        lastName,
        contact = "",
        address = {},
        profilePic = "",
        yearOfJoining = "",
        role = "user"
    ) {
        const newUser = new userModel({
            username,
            password,
            email,
            firstName,
            lastName,
            contact,
            address,
            profilePic,
            yearOfJoining,
            role,
        })
        await newUser.save()
        return newUser
    }

    async getAllUsers() {
        return await userModel.find({})
    }
}
