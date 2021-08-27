import React from 'react'
import Login from './Login/Login'
import Home from './Home/home'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom' 

class App extends React.Component{
    render(){
      return(
        <div>
            <Router>
              <Switch>
              
                <Route path='/'  component={Home}/>
                <Route path='/Login' component={Login}/>
              </Switch>
            </Router>
        </div>
      )
    }
}
export default App;