import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';


class DashBoard extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
          return(
           <div className="page-sect">
                  Hellow WorlD dashboard!!       
           </div>
        );
      }     
}

DashBoard.propTypes = {
	}

function mapStateToProps(state) {
}

export default connect(mapStateToProps)(DashBoard)