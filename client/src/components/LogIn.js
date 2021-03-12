import React from 'react'
import { useState } from "react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = e => {
        e.preventDefault()
        authUser({ email, password })
        setEmail('')
        setPassword('')
    }

    const authUser = async (user) => {
        try {
            const res = await axios.post('http://localhost:1000/login', user)
            const { token } = res.data
            localStorage.setItem('token', token)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <form onSubmit={ onSubmit }>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="Enter Email" value={ email } onChange={ e => setEmail(e.target.value) } required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" name="password" placeholder="Enter Password" value={ password } onChange={ e => setPassword(e.target.value) } required />
            </div>
            <button type="submit" className="btn btn-danger btn-block">Login</button>
            <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
        </form>
    )
}

export default LogIn