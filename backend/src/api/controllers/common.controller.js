import asyncHandler from "express-async-handler"
import CommonService from "../services/common.service.js"

export const sayHello = asyncHandler(async (req, res) => {
    // get all users
    const users = await new CommonService().getAllUsers()
    res.status(200).json(users)
})

export const registration = asyncHandler(async (req, res) => {
    try {
        const newUser = await new CommonService().registration(
            req.body.username,
            req.body.password,
            req.body.email,
            req.body.firstName,
            req.body.lastName,
            req.body.contact,
            req.body.address,
            req.body.profilePic,
            req.body.yearOfJoining,
            req.body.role
        )
        res.status(201).json({
            success: true,
            message: newUser,
        })
    } catch (error) {
        res.status(409).json({
            success: false,
            message: "User already exists",
        })
    }
})
