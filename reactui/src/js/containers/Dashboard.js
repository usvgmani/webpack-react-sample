import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchAnAppData} from '../actions/anAppData'
import ADashboard from '../components/ADashboard'
class DashBoard extends Component {

  constructor(props) {
      super(props);
      this.props.fetchAnAppData();		
   }
	
   sortCol(col) {
       if (!col.isSortable) { return; }	
   }

   render() {
		console.log(this.props.localData)	
		return(<div><ADashboard peopledata={this.props.localData}/></div>);
	}     
}

DashBoard.propTypes = {
}
function mapStateToProps(state) {
	return {
		 localData: state.getAppData.anAppData.appData,
	}
}
export default connect(mapStateToProps, {
    fetchAnAppData
})(DashBoard)