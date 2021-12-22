import ExamModel from "../../models/exam.model.js"

export default class examService {
    async addExam(subject_name, exam_name, year_of_exam, exam_notes) {
        const addNewExam = new ExamModel({
            subject_name,
            exam_name,
            year_of_exam,
            exam_notes,
        })
        await addNewExam.save()
        return {
            success: true,
            exam: addNewExam,
        }
    }

    async getAllExamRecords() {
        const exams = await ExamModel.find()
        return {
            success: true,
            exams,
        }
    }

    async getExam(examId) {
        const exam = await ExamModel.findById(examId)
        return {
            success: true,
            exam,
        }
    }

    async updateExam(examBody, examId) {
        const updatedExam = await ExamModel.findByIdAndUpdate(
            examId,
            examBody,
            { new: true }
        )
        return {
            success: true,
            exam: updatedExam,
        }
    }
}
