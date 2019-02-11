import React from 'react';

import User from './User';

const UserList = props => {
    return(
        props.users.map(user => {
            return <User user={user} deleteUser={props.deleteUser}/> 
        })
    )
}

export default UserList;