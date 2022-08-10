const express = require('express');
const app = express();
const axios = require("axios")
const studentsList = require('./students.json')
const studentsRoute = require('./routes/students')
const cors = require('cors')
const port = 5000 

app.use(cors())
app.use(express.json())

app.use('/students', studentsRoute)

app.listen(port, () => {
    console.log(port)
})