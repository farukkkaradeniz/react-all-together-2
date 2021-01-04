import PropTypes from "prop-types";
import React, { Component } from 'react';

/**
* @extends {React.Component<{handleSubmitEvent:Function, userName:any}>}
*/
class AddNewMessageComponent extends Component {
    state = {
        messageValue : ''
    };
    
    isDisabled = () => {
        return this.state.messageValue === '';
    };

    changeHandlerInput = message => {
        this.setState({
            messageValue : message
        });
    }

    submitForm = event => {
        event.preventDefault();
        this.props.handleSubmitEvent(this.props.userName,this.state.messageValue);
        this.changeHandlerInput('');
    }
    
    render() {
        return (
            <div>
                <form className="input-group" onSubmit={this.submitForm}>
                    <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.messageValue} onChange={(event) => this.changeHandlerInput(event.target.value)}/>
                    <div className="input-group-append">
                        <button className="btn submit-button" disabled={this.isDisabled()}>
                        SEND
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

AddNewMessageComponent.propTypes = {
  handleSubmitEvent: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
}

export default AddNewMessageComponent;
