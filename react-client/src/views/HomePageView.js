import React from 'react';
import { connect } from 'react-redux';
import { deleteUser, addUser } from '../store/actions';

import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

class HomePageView extends React.Component{
    state = {
        user:{
            name:'',
            bio:''
        }
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

    render(){
        return(
            <>
                <UserForm userData={this.state.user} handleFormChange={this.handleFormChange} addUser={this.addUser}/>
                <UserList users={this.props.users} deleteUser={this.props.deleteUser}/>
            </>
        )
    }
}

export default connect(
    null,
    {
        deleteUser,
        addUser
    }
)(HomePageView);