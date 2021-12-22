import asyncHandler from "express-async-handler"
import examService from "../services/exam.service.js"

export const helloExam = asyncHandler(async (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to Exam APIs",
    })
})

export const createExam = async (req, res) => {
    const exam = req.body 
    try {
        const newExam =
             await new examService().addExam(
                exam.subject_name,
                exam.exam_name,
                exam.year_of_exam,
                exam.exam_notes,
            )
        res.status(201).json(newExam)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
