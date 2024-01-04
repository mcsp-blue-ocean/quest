import { useState } from "react";
import ai from "./assets/chatbot.svg?web";
import dotenv from "dotenv";
import.meta.env.VITE_URL_PATH;
import {
  toggleBot,
  messagesStyling,
  userStyle,
  userToggle,
  botStyle,
  botToggle,
  chatStyle,
  inputStyle,
  submitStyle,
  botLocation,
} from "./style/style";
//dotenv.config({ path: "../../.env" });

const Chatbot = () => {
  // State variables
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  //chatbot UI coauthed by Greg and Mitch
  const handleSendMessage = async (e) => {
    //const { REACT_APP_BASE_URL } = process.env;

    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const newUserMessage = {
        user: `🤔: ${inputMessage}`,
        type: "user",
      };

      // Create a new array that includes the new user message
      const updatedChatMessages = [...chatMessages, newUserMessage];

      // Update the state with the new user message
      setChatMessages(updatedChatMessages);

      // Construct the payload using the updatedChatMessages array
      const payload = {
        message: inputMessage,
        messages: updatedChatMessages.map((msg) => ({
          role: msg.type,
          content: msg.type === "user" ? msg.user.slice(4) : msg.bot.slice(4),
        })),
      };

      //console.log("Sending payload to server:", payload);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_URL_PATH}/api/chat`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Inside the handleSendMessage function, after receiving the response from the server
        const responseData = await response.json();
        const botMessage = {
          bot: `🤖: ${responseData.message.content}`,
          type: "assistant",
        };

        // Update the state with the bot's response
        setChatMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Failed to send message:", error);
      }

      // Clear the input field
      setInputMessage("");
    }
  };

  return (
    <div className="relative">
      <div className={`${!isOpen ? "hidden" : toggleBot}`}>
        <div
          className={`${messagesStyling} ${chatMessages.length !== 0 && `p-4`}`}
        >
          {chatMessages.map((msg, index) => (
            <ul key={index}>
              <li className={`${userStyle} ${msg.type === userToggle}`}>
                {msg.user}
              </li>
              <li className={`${botStyle} ${msg.type === botToggle}`}>
                {msg.bot}
              </li>
            </ul>
          ))}
        </div>
        <form
          onSubmit={handleSendMessage}
          className={`${chatStyle} ${chatMessages.length !== 0 && "mt-3"}`}
        >
          <input
            type="text"
            placeholder="Ask"
            value={inputMessage}
            onChange={handleInputChange}
            className={inputStyle}
          />
          <button type="submit" className={submitStyle}>
            Send
          </button>
        </form>
      </div>
      <img src={ai} alt="ai" onClick={toggleChatbot} className={botLocation} />
    </div>
  );
};

export default Chatbot;
