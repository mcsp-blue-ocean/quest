import React, { useState } from 'react';
import './Chatbot.css';

const Chatbot = () => {
  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  // Function that will toggle chatbox visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle input field changes (from the user)
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  // Function to handle sending a message
  const handleSendMessage = () => {
    // Used .trim to remove whitespace from beginning and end of a string
    if (inputMessage.trim() !== '') {
      setChatMessages((prevMessages) => [...prevMessages, { text: inputMessage, type: 'user' }]);

      // *** BLAISE CHATBOT LOGIC INPUT *** ----------------------------------------------------------

      // Placeholder for Blaise chatbox logic
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Bot response: Your message is received!', type: 'bot' },
      ]);
      // *** END OF BLAISE CHATBOX LOGIC *** ------------------------------------------------------------
      setInputMessage('');
    }
  };

    // Function to handle "Enter" key press in the input field
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          handleSendMessage();
        }
      };

  return (
    // If isOpen is true, it will evaluate to "open". If false, it will evaluate to an empty string.
    // If isOpen is true, the resulting class will be "chatbot-container open". If false, the class name will be "chatbot-container"
    // If chatbot is open, the open class will be added. It closed, it will be only chatbot=container. 
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-button" onClick={toggleChatbot}>
        Chat
      </div>
      {/* Container for the chatbot content */}
      <div className="chatbot-content">
        {/* Container for displaying chat messages */}
        <div className="chat-messages">
        {/* Mapping through chat messages and rendering them */}
          {chatMessages.map((message, index) => (
            <div key={index} className={message.type}>
              {message.text}
            </div>
          ))}
        </div>
        {/* Container for user input (input field and send button) */}
        <div className="user-input">
          <input
            type="text"
            placeholder="Type a QUESTion!"
            value={inputMessage}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          {/* Button to send the user's message */}
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
