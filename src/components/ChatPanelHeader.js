import PropTypes from "prop-types";
import React from 'react';

const ChatPanelHeader = props => {
    return (
        <div>
            <h2>Super Awesome Chat</h2>
            <div className="name sender">
                <p>{props.userName}</p>
            </div>
        </div>
    );
}

ChatPanelHeader.propTypes = {
  userName: PropTypes.string.isRequired
}

export default ChatPanelHeader;