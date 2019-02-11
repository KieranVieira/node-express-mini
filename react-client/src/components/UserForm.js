import React from 'react';

const UserForm = props => {
    return(
        <form onSubmit={props.addUser}>
            <input 
                type="text"
                placeholder="name"
                value={props.userData.name}
                name='name'
                onChange={props.handleFormChange}
            />
            <input 
                type="text"
                placeholder="bio"
                value={props.userData.bio}
                name='bio'
                onChange={props.handleFormChange}
            />
            <button type="submit">Add User</button>
        </form>
    )
}

export default UserForm;