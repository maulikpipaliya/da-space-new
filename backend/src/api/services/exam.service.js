import ExamModel from "../../models/exam.model.js"

export default class examService{
    async addExam(
        subject_name,
        exam_name,
        year_of_exam,
        exam_notes,
    )
    {
        const addNewExam = new ExamModel({
            subject_name,
            exam_name,
            year_of_exam,
            exam_notes,
        })
        await addNewExam.save()
        return addNewExam
    }
}