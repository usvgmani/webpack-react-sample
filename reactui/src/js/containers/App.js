import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {Link} from 'react-router';
import { browserHistory } from 'react-router';
import Header from '../components/Header';
import Notification from '../components/Notifications';

class App extends Component {

    constructor(props) {
        super(props);              
    }
    componentDidMount() {
        console.log("Component Mounted");        
    }
    render() {        
        return ( <div className="p2p-container">
        <Header />        
        <div className="container">
            {this.props.children}          
        </div>
        </div>)
    }
}

App.propTypes = {
  //  user: PropTypes.object,   
   // hideNotification: PropTypes.func,
}

function mapStateToProps(state) {
    return {
       // user: state.user.userInfo,
    }
}

export default connect(mapStateToProps, {
//    fetchUserIfNeeded
})(App)