import React, { PropTypes, Component } from 'react';

export default class Notification extends Component {
	 constructor(props) {
	    super(props);
        this._timerDelay = 10000;
	  }	 
      
      componentDidMount(){ 
           window.scrollTo(0, 0);
           this.setTimer();
       }

       setTimer() {
        // clear any existing timer
            this._timer != null ? clearTimeout(this._timer) : null;

            // hide after `delay` milliseconds
            this._timer = setTimeout(function(){
                this.props.onClose();
                this._timer = null;
            }.bind(this), this._timerDelay);
        }

        componentWillUnmount() {
            clearTimeout(this._timer);
        }
	  render() {
	    const {message,type} = this.props;        
	    return (
            <div className="notification-center">
                <div className={"animate-repeat alert alert-dismissable alert-"+(this.props.type || 'warning')}>
                    <button type="button" className="close" onClick={this.props.onClose}>
                        <span aria-hidden="true">×</span>
                        <span className="sr-only">Close</span>
                    </button>
                    <div>
                        <span>{this.props.message}</span>
                    </div>
                </div>
            </div>
	    )
	  }
}

Notification.propTypes = {
  
}