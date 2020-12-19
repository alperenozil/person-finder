import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const UserItem = ({user:{login, avatar_url, html_url}}) => {
        return (
            <div className="card text-center">
                User Item
                <p></p>
                <img src={avatar_url}
                className="round-img"
                style={{width:"120px"}}></img>
                <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">Details</Link>
            </div>
            </div>
        )
}
UserItem.propTypes={
    user:PropTypes.object.isRequired
}
export default UserItem
