import PropTypes from "prop-types";
import React, { Component } from 'react';
import ChatPanelHeader from "./ChatPanelHeader";
import MessageListComponent from "./MessageListComponent";
import AddNewMessageComponent from "./AddNewMessageComponent";

class ChatPanelComponent extends Component {
  state = {
      users : [{ username: 'Amy' }, { username: 'John' }],
      messages : [
        { username: 'Amy', text: 'Hi, Jon!' },
        { username: 'Amy', text: 'How are you?' },
        { username: 'John', text: 'Hi, Amy! Good, you?' },
      ]
  }

  handleAddNewMessage = (userName,message) => {
      const newMessage = {
          username : userName,
          text : message
      };
      this.setState((prevState) => ({
          ...prevState,
          messages : [...prevState.messages,newMessage]
      }));
  }
  
  render() {
    return (
        <div className="container">
            {
                this.state.users.map(user => (
                    <div className="chat-window">
                        <ChatPanelHeader userName= {user.username}/>
                        <MessageListComponent messages={this.state.messages} userName={user.username}/>
                        <AddNewMessageComponent userName={user.username} handleSubmitEvent={this.handleAddNewMessage}/>
                    </div>
                ))
            }
        </div>
    );
  }
}

export default ChatPanelComponent;
