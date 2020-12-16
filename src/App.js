import React, {Fragment, Component} from 'react'
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
      <div className="App">
        <Navbar title="Profile Finder"></Navbar>
        <div className="container">
        <Search searchUsers={this.searchUsers}></Search>
        <Users loading={this.state.loading} users={this.state.users}></Users>
        </div>
      </div>
      );
    }
}

export default App;
