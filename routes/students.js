const express = require('express');
const app = express();
const studentsList = require('../students.json')
const studentsRoute = require('../routes/students')
const axios = require("axios")

app.get('/', (req, res) => {
    res.json(studentsList)
})
app.post('/', (req, res) => {

    const student = req.body

    const existingStudent = studentsList.find( student => {
        return student.name === req.body.name
    })

    if (!existingStudent) {
        studentsList.push(req.body)
        res.json(studentsList)
    }else{
       res.status(409).send('Student already exists')
    }
})

app.get('/:name', (req,res) => {
    const { name } = req.params
    const student = studentsList.find(student => {
        return student.name === name
    })
    if (student) {
        res.json(student)
    }else{
        res.status(409).send('Student already exists')
    }
})

module.exports = app