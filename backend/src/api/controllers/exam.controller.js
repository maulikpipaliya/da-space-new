import asyncHandler from "express-async-handler"
import examService from "../services/exam.service.js"

export const createExam = async (req, res) => {
    const exam = req.body
    try {
        const newExam = await new examService().addExam(
            exam.subject_name,
            exam.exam_name,
            exam.year_of_exam,
            exam.exam_notes
        )
        res.status(201).json(newExam)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getAllExamRecords = async (req, res) => {
    console.log("Getting all exam records")
    try {
        const exams = await new examService().getAllExamRecords()
        res.status(200).json(exams)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getExam = async (req, res) => {
    console.log("Getting exam")
    try {
        const exam = await new examService().getExam(req.params.examId)
        res.status(200).json(exam)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateExam = async (req, res) => {
    console.log("Updating exam")
    try {
        const exam = await new examService().updateExam(
            req.body,
            req.params.examId
        )
        res.status(200).json(exam)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}
