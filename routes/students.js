const express = require('express')
const router = express.Router();

//Get all students
router.get('/',(request,response)=>{
    response.send("List of all students")
})


//Get student by id
router.get('/:id',(request,response)=>{
    response.send(`displaying student with ID ${request.params.id}`)
})

//Updating student
router.patch('/:id',(request,response)=>{
    response.send(`updating student with ID ${request.params.id}`)
})

//Deleting student
router.delete('/:id',(request,response)=>{
    response.send(`deleting student with ID ${request.params.id}`)
})


module.exports = router