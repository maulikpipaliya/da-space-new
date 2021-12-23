import asyncHandler from "express-async-handler"
import UserService from "../services/user.service.js"

export const register = asyncHandler(async (req, res, next) => {
    const user = req.body
    const registeredUser = await new UserService().registerUser(user)
    if (registeredUser.success) {
        res.status(201).json(registeredUser)
    } else {
        res.status(400).json(registeredUser)
    }
})
