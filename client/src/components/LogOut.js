import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const LogOut = () => {
    localStorage.removeItem('token')
    return(
        <div>
            <h2>You have logged out.</h2>
            <Link to="/login">LogIn</Link>
        </div>
    )
}

export default LogOut