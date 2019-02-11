import React from 'react';

import { Link } from 'react-router-dom';

const User = props => {
    return(
        <Link to={`/users/${props.user.id}`}>
            <h1>{props.user.name}</h1>
            <h3>{props.user.bio}</h3>
            <button onClick={() => props.deleteUser(props.user.id)}>delete</button>
            <button>update</button>
        </Link>
    )
}

export default User