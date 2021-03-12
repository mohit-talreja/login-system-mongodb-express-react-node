import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <h1>Home Page</h1>
            <ul style={{ listStyle: 'none' }}>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/login">LogIn</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </div>
    )
}

export default Home