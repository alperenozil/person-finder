import React, {Fragment, Component} from 'react'
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import './App.css';

class App extends Component {
  render() 
    {
      return(
      <div className="App">
        <Navbar title="Profile Finder"></Navbar>
        <div className="container">
        <Users></Users>
        </div>
      </div>
      );
    }
}

export default App;
