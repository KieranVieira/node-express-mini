import React from 'react';
import { connect } from 'react-redux';

import { deleteUser } from '../store/actions';

import UserList from '../components/UserList';

class HomePageView extends React.Component{
    render(){
        return(
            <UserList users={this.props.users} deleteUser={this.props.deleteUser}/>
        )
    }
}

export default connect(
    null,
    {
        deleteUser
    }
)(HomePageView);