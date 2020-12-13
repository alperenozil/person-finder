import React, { Component } from 'react'

class UserItem extends Component {
    constructor(){
        super();
        this.state={
            id:"id",
            login:"loginname",
            avatar_url:"https://pbs.twimg.com/profile_images/1217835969988169728/sClA2Lef_400x400.jpg",
            html_url:"other url"
        }
    }
    render() {
        return (
            <div className="card text-center">
                User Item
                <p></p>
                <img src={this.state.avatar_url} className="round-img" style={{width:"120px"}}></img>
            </div>
        )
    }
}

export default UserItem
