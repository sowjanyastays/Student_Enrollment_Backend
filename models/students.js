const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    enrolledDepartment:{
        type: String,
        required:true
    },
    enrollmentDate:{
        type: Date,
        deafault: Date.now() 
    }
});

module.exports = mongoose.model('studentModel', studentSchema)