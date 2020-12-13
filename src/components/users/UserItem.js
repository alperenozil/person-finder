import React, { Component } from 'react'

class UserItem extends Component {
    
    render() {
        const {id, login, avatar_url, html_url}=this.props.user;
        return (
            <div className="card text-center">
                User Item
                <p></p>
                <img src={avatar_url}
                className="round-img"
                style={{width:"120px"}}></img>
                <h3>{login}</h3>
            <div>
                <a href={html_url} className="btn btn-dark btn-sm my-1">Details</a>
            </div>
            </div>
        )
    }
}

export default UserItem
