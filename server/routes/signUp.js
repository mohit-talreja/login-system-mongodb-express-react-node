const router = require('express').Router()

const bcrypt = require('bcryptjs')

const User = require('../models/User')

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, location, email, password } = req.body
        const userAlreadyExists = await User.findOne({ email })
        if(userAlreadyExists){
            return res.status(401).json({ message: 'User Already Exists' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await User({
            firstName,
            lastName,
            location,
            email,
            password: hashedPassword
        })
        const newUser = await user.save()
        res.status(201).json({ newUser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router