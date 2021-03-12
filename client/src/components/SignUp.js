import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

const SignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [location, setLocation] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        createUser({ firstName, lastName, location, email, password })
        setFirstName('')
        setLastName('')
        setLocation('')
        setEmail('')
        setPassword('')
    }

    const createUser = async (user) => {
        try {
            const res = await axios.post('http://localhost:1000/signup', user)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter First Name" value={ firstName } onChange={ e => setFirstName(e.target.value) } required />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter Last Name" value={ lastName } onChange={ e => setLastName(e.target.value) } required />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location:</label>
                <input type="text" className="form-control" id="location" name="location" placeholder="Enter Location" value={ location } onChange={ e => setLocation(e.target.value) } required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" value={ email }  onChange={ e => setEmail(e.target.value) } required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" value={ password } onChange={ e => setPassword(e.target.value) } required />
            </div>
            <button type="submit" className="btn btn-danger btn-block">Signup</button>
            <p>Already have an account? <Link to="/login">LogIn</Link></p>
        </form>
    )
}

export default SignUp