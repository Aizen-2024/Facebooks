import React, { useContext, useEffect, useState,createContext } from "react";
import { MessageContext } from "./Friends";
import { Notification_context } from "./Friends";
export function Messenger() {
    const [clicked, setClicked] = useState(null);
    const { message } = useContext(MessageContext);

    if(message.length==0) return<div className="messenger-container"><h3 style={{color:'blue'}}>Please confirm Friend requests to send them messages.</h3></div>
    return (
      <div className="messenger-container">
        <div className="friend-list">
          {message && message.map((e, i) => (
            <div key={i} className="friend-item">
              <img src={e.src} alt={e.First_name} />
              <h3>{e.First_name}</h3>
              <button 
                className={`message-button ${clicked === e.First_name ? 'active' : ''}`}
                onClick={() => setClicked(clicked === e.First_name ? null : e.First_name)}
              >
                {clicked === e.First_name ? 'Close' : 'Message'}
              </button>
              <Input_component friend={e.First_name} clicked={clicked === e.First_name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const Input_component = ({ friend, clicked }) => {
    const { notify, setNotify } = useContext(Notification_context);
    const [sendMessage, setSendmessage] = useState('');
    
    const ClickHandler = () => {
      setSendmessage('');
      setNotify([...notify, `You sent message to ${friend}`]);
    };
    
    if (!clicked) return null;
    
    return (
      <div className="input-container">
        <input 
          value={sendMessage} 
          onChange={e => setSendmessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={ClickHandler}>Send</button>
      </div>
    );
  };