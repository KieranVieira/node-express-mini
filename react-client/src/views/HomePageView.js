import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, addUser, updateUser } from '../store/actions';

import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

class HomePageView extends React.Component{
    state = {
        user:{
            name:'',
            bio:''
        },
        isUpdating: false,
    }

    handleFormChange = e => {
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        })
    }

    addUser = e => {
        e.preventDefault();
        this.props.addUser(this.state.user)
        this.setState({
            user:{
                name:'',
                bio:''
            }
        })
    }

    initiateUpdate = user => {
        this.setState({
            user,
            isUpdating: true,
        })
    }

    updateUser = e => {
        e.preventDefault();
        this.props.updateUser(this.state.user)
        this.setState({
            user:{
                name:'',
                bio:''
            },
            isUpdating: false
        })
    }

    render(){
        return(
            <>
                <UserForm 
                    userData={this.state.user} 
                    handleFormChange={this.handleFormChange} 
                    addUser={this.addUser}
                    isUpdating={this.state.isUpdating}
                    updateUser={this.updateUser}
                />
                <UserList 
                    users={this.props.users} 
                    deleteUser={this.props.deleteUser} 
                    initiateUpdate={this.initiateUpdate}
                />
            </>
        )
    }
}

export default connect(
    null,
    {
        deleteUser,
        addUser,
        updateUser
    }
)(HomePageView);