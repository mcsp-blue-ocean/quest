import { useState } from "react";
import ai from "./assets/chatbot.svg?web";
import ReactMarkdown from "react-markdown";
import.meta.env.VITE_URL_PATH;
import gfm from "remark-gfm";
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
  markdownStyles,
} from "./style/style";

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

  // Helper function to create a styled component for ReactMarkdown
  const createStyledMarkdownComponent = (Tag, style) => {
    return (props) => <Tag className={style} {...props} />;
  };

  // Define the markdown components with their respective styles
  const markdownComponents = {
    h1: (props) =>
      createStyledMarkdownComponent("h1", markdownStyles.h1)(props),
    h2: (props) =>
      createStyledMarkdownComponent("h2", markdownStyles.h2)(props),
    h3: (props) =>
      createStyledMarkdownComponent("h3", markdownStyles.h3)(props),
    p: (props) => createStyledMarkdownComponent("p", markdownStyles.p)(props),
    strong: (props) =>
      createStyledMarkdownComponent("strong", markdownStyles.strong)(props),
    em: (props) =>
      createStyledMarkdownComponent("em", markdownStyles.em)(props),
    th: (props) =>
      createStyledMarkdownComponent("th", markdownStyles.th)(props),
    td: (props) =>
      createStyledMarkdownComponent("td", markdownStyles.td)(props),
    table: (props) =>
      createStyledMarkdownComponent("table", markdownStyles.table)(props),
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
          bot: responseData.message.content,
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
            <ul key={index} className="prose">
              <li className={`${userStyle} ${userToggle(msg.type)}`}>
                {msg.type === "user" ? (
                  msg.user
                ) : (
                  <ReactMarkdown>{msg.bot}</ReactMarkdown>
                )}
              </li>
              <div className={`${botStyle} ${botToggle(msg.type)}`}>
                {msg.type === "assistant" && (
                  <>
                    <span className="bot-emoji text-white">🤖:</span>
                    <ReactMarkdown
                      remarkPlugins={[gfm]}
                      children={msg.bot}
                      components={markdownComponents}
                    />
                  </>
                )}
              </div>
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
