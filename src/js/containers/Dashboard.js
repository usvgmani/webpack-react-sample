import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { gridHeaders, showHideGrid } from './GridDetails';
import {fetchAnAppData} from '../actions/anAppData'
class DashBoard extends Component {

  constructor(props) {
	super(props);
	this.props.fetchAnAppData();
	this.result=this.props.localData;
	this.state = {
		pagination: {
			pageNumber: 1,
			pageSize: 5,
			totalCount: this.props.pageCount
		},
		reverseSort: false,
		sortColumn: 'CASE_NUM',
		sortDirection: 'DESC'
	};	
  }
  
sortCol(col) {
	if (!col.isSortable) { return; }	
}

render() {
	console.log(this.props.localData)
    return(<div className="nm-grid">
		   <div className="row">
		   <div className="col-xs-12">
				<div className="table-responsive no-border">
					<table id="rep-datatable"
						className="table table-striped table-bordered table-hover">
						<thead>
							<tr>
							{gridHeaders.map(function (item, i) {
								return <th key={i} onClick={() => this.sortCol(item)}>
									<span>{item.displayName}</span>
									<div className={item.isSortable ? ((this.state.sortColumn === item.sortCol) && (this.state.sortDirection === 'DESC')) ? 'grid-sort sort-desc' : (((this.state.sortColumn === item.sortCol) && (this.state.sortDirection === 'ASC')) ? 'grid-sort sort-asc' : 'grid-sort') : 'hidden'}>
										<span className="caret-up"></span>
										<span className="caret"></span>
									</div>
								</th>
							}, this
							)}
						</tr>
						</thead>
						<tbody>
						{this.props.localData.map(function (caseData, j) {
							return <tr key={j} >
								{gridHeaders.map(function (item, i) {
									return <td key={i} >{caseData[item.name]}</td>
								}, this)}
							</tr>
						}, this)}
						</tbody>
						<tfoot>
							<tr></tr>
						</tfoot>
					</table>
				</div>
			</div>
		</div>
	</div>);
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