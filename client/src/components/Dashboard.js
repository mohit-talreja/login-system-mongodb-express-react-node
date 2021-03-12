import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const Dashboard = () => {
    const token = localStorage.getItem('token')
    if(!token){
        return <Redirect to="/login" />
    }
    return(
        <div>
            <h3>Dashboard</h3>
            <Link to="/logout">LogOut</Link>
        </div>
    )
}

export default Dashboard