import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUsers } from './store/actions';

import HomePageView from './views/HomePageView';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.props.fetchUsers();
  }

  render() {
    return (
      <div className="App">
        <Route path="/" render={props => <HomePageView {...props} users={this.props.users}/>}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    users: state.userReducer.users
  }
}

export default connect(
  mapStateToProps,
  {
    fetchUsers
  }
)(App);
