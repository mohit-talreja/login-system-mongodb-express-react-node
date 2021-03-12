const router = require('express').Router()

const jwt = require('jsonwebtoken')

const bcrypt = require('bcryptjs')

const User = require('../models/User')

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const userExists = await User.findOne({ email })
        if(!userExists){
            return res.status(404).json({ message: 'User Not Found' })
        }
        const validPassword = await bcrypt.compare(password, userExists.password)
        if(!validPassword){
            return res.status(401).json({ message: 'Password Is Not Valid' })
        }
        const token = await jwt.sign({ email, password }, 'CodersSecret')
        res.status(200).json({ token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router