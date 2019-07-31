import React from 'react';
import './Message.css';

const Message = ({ text }) => <span className="message">{text}</span>;

// const Message = props => (
//   <span className="message" key={props.id}>
//     {props.text}
//   </span>
// );

export default Message;