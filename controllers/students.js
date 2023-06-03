const studentModel = require('../models/students')

const getAllStudents = async(request,response)=>{
    try
    {
        const students = await studentModel.find()
        response.status(200).json(students)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}

const addStudent = async(request, response)=>{
    const newStudent = new studentModel({
        name: request.body.name,
        enrolledDepartment: request.body.enrolledDepartment,
        enrollmentDate: request.body.enrollmentDate
    })
    try{
        const student = await newStudent.save()
        response.status(201).json(student)
    }
    catch(error){
        response.status(500).json({message:error.message})
    }
}

const updateStudent = async(request,response)=>{
    if(request.body.name!=null){
        response.student.name = request.body.name;
    }
    try{
        const updateStudent = await response.student.save()
        response.status(201).json(updateStudent)
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

const getStudentByID = (request,response)=>{
    response.status(200).json(response.student)
}

const deleteStudent = async(request,response)=>{
    try{
        await response.student.deleteOne();
        response.json({message:`Deleted user ${response.student.name}`})
    }
    catch(error){
        response.status(400).json({message:error.message})
    }
}

async function getStudent(request,response,next){
    let student;
    try{
        student = await studentModel.findById(request.params.id)
        if(student===null){
            response.status(404).send({message: `Cannot find user with is ${request.params.id}`})
        }
    }
    catch(error){
        return response.status(500).send({message:error.message})
    }
    response.student = student;
    next();
}


module.exports = {getAllStudents, addStudent, updateStudent, deleteStudent, getStudent, getStudentByID}