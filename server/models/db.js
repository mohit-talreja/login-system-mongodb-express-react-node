require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(res => console.log('Connected to MongoDB.'))
.catch(err => console.log('Error in connecting to MongoDB!'))