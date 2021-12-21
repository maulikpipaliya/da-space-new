import asyncHandler from "express-async-handler"

export const helloExam = asyncHandler(async (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to Exam APIs",
    })
})
