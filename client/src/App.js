import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import Dashboard from './components/Dashboard'
import LogOut from './components/LogOut'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/signup" component={ SignUp } />
          <Route path="/login" component={ LogIn } />
          <Route path="/dashboard" component={ Dashboard } />
          <Route path="/logout" component={ LogOut } />
        </Switch>
      </div>
    </Router>
  )
}

export default App