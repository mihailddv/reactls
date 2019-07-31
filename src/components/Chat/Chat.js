import React from 'react';
import Message from '../Message';
import './Chat.css';

export default class Chat extends React.Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };

  sendMessageOnEnter = event => {      
    // let messageValue = document.querySelector('.input-message').value;

    if (event.key === 'Enter') {

      // if (messageValue !== '') {
        this.setState(({ messages }) => {
          const allMessages = [...messages, { text: this.state.messageInput }];
          return {
            messages: allMessages,
            messageInput: ''
          };
        });

      //   let messageList = document.querySelector('.message-list');
      //   messageList.scrollTop = messageList.scrollHeight;        
        
      // } else {
      //   alert('Введите текст');
      // }

    }

  };

  render() {
    const { messages } = this.state;
    return (
      <div className="chat">
        <div className="message-list">
          <div className="messages">
            {messages.map((message, index) => (
              <Message key={index} text={message.text} />
            ))}
          </div>
        </div>
        <input className="input-message" value={this.state.messageInput} onChange={this.changeInputMessage} onKeyPress={this.sendMessageOnEnter} />
      </div>
    );
  }
}