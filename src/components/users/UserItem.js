import React from 'react'
import PropTypes from 'prop-types'
const UserItem = ({user:{id, login, avatar_url, html_url}}) => {
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
UserItem.propTypes={
    user:PropTypes.object.isRequired
}
export default UserItem
