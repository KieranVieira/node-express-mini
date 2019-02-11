import React from 'react';

import UserList from '../components/UserList';

class HomePageView extends React.Component{
    render(){
        return(
            <UserList users={this.props.users}/>
        )
    }
}

export default HomePageView;