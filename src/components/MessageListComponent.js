import PropTypes from "prop-types";
import React, { Component } from 'react';

/**
* @extends {React.Component<{messages:array.isRequired, userName:string.isRequired}>}
*/
class MessageListComponent extends Component {
  render() {
    const {userName,messages} = this.props;
    return (
        <ul className="message-list">
            {messages.map((message, index) => (
            <li
                key={index}
                className={
                message.username === userName? 'message sender' : 'message recipient'
                }
            >
                <p>{`${message.username}: ${message.text}`}</p>
            </li>
            ))}
        </ul>
    );
  }
}

MessageListComponent.propTypes = {
  messages: PropTypes.array.isRequired,
  userName: PropTypes.string.isRequired
}

export default MessageListComponent;
