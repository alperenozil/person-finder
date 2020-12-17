import React, {Fragment, Component} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from "./components/layout/Navbar"
import Users from "./components/users/Users"
import Search from "./components/users/Search"
import './App.css';
import axios from 'axios';

class App extends Component {
  state={
    users:[],
    loading:false
  }
  /* async componentDidMount(){
    this.setState({loading:true});
    const res = await axios.get('https://api.github.com/users');
    this.setState({users:res.data, loading:false});
  } */
  searchUsers=async text =>{
    this.setState({loading:true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
    this.setState({users:res.data.items, loading:false});
  }
  render() 
    {
      return(
      <Router>
        <div className="App">
        <Navbar title="Profile Finder"></Navbar>
        <div className="container">
        <Switch>
          <Route exact path='/' render={props=>(
            <Fragment>
              <Users loading={this.state.loading} users={this.state.users}></Users>
            </Fragment>
          )}></Route>
          <Route exact path='/alperen' render={props=>(
            <Fragment>
              <Search searchUsers={this.searchUsers}></Search>
            </Fragment>
          )}></Route>
        </Switch>
        </div>
      </div>
      </Router>
      );
    }
}

export default App;
