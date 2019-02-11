import React from 'react';

const User = props => {
    return(
        <>
            <h1>{props.user.name}</h1>
            <h3>{props.user.bio}</h3>
        </>
    )
}

export default User