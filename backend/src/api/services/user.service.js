import userModel from "../../models/user.model.js"

export default class UserService {
    async registerUser(registrationData) {
        const user = await userModel.create(registrationData)
        if (user) {
            return {
                success: true,
                message: "User registered successfully",
                user,
            }
        } else {
            return {
                success: false,
                message: "User registration failed",
            }
        }
    }
}
