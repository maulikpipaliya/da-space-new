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

    async updateProfile(
        firstName,
        lastName,
        contact = "",
        address = {},
        profilePic = "",
        yearOfJoining = "",
        role = "user"
    ) {
        const user = await userModel.findById("61bf8af06017de30ebb418e0")
        user.firstName = firstName
        user.lastName = lastName
        user.contact = contact
        user.address = address
        user.profilePic = profilePic
        user.yearOfJoining = yearOfJoining
        user.role = role
        await user.save()
        return user
    }
}
