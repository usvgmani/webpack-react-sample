import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router';
export default class Header extends Component {
	constructor(props) {
		super(props);
	}
	componentDidUpdate(){        
        $('.dropdown-toggle').bootstrapToggle();
    }	
	render() {
		return (            
			<div>
                <header className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <a className="navbar-brand" href="#">An App</a>
                        </div>
                        <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Home</a></li>
                        <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Page 1 <span className="caret"></span></a>
                            <ul className="dropdown-menu">
                            <li><a href="#">Page 1-1</a></li>
                            <li><a href="#">Page 1-2</a></li>
                            <li><a href="#">Page 1-3</a></li>
                            </ul>
                        </li>                      
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                        <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                        <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </header>			
			</div>
		)
	}
}

Header.propTypes = {

}