import React, { Component } from 'react'

export class Search extends Component {
    state={
        text:''
    }
    onChange=(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.text);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="enter a username" value={this.state.text} onChange={this.onChange}></input>
                    <input type="submit" value="Get that user" className="btn btn-dark"></input>
                </form>
            </div>
        )
    }
}

export default Search
