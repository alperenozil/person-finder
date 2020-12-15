import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state={
        users:[{
            id:"id",
            login:"loginname",
            avatar_url:"https://pbs.twimg.com/profile_images/1217835969988169728/sClA2Lef_400x400.jpg",
            html_url:"other url"
        },
        {
            id:"id1",
            login:"loginname1",
            avatar_url:"https://pbs.twimg.com/profile_images/1217835969988169728/sClA2Lef_400x400.jpg",
            html_url:"other url"
        },
        {
            id:"id2",
            login:"loginname2",
            avatar_url:"https://pbs.twimg.com/profile_images/1217835969988169728/sClA2Lef_400x400.jpg",
            html_url:"other url"
        }]
    }
    render() {
        return (
            <div style={placeHolderStyle}>
                {this.props.users.map(user=>(
                    <UserItem key={user.id} user={user}></UserItem>
                ))}
            </div>
        )
    }
}
const placeHolderStyle = {
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)'
}
export default Users
