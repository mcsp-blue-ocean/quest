import { useState } from "react";
import ai from "./assets/chatbot.svg?web";
import ReactMarkdown from "react-markdown";
import.meta.env.VITE_URL_PATH;
import gfm from "remark-gfm";

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
      <div
        className={`${
          !isOpen
            ? "hidden"
            : "flex flex-col items-center fixed bottom-28 right-6 p-2 rounded-lg shadow-xl bg-sky-700 border border-white/50 max-h-[80vh] overflow-hidden"
        }`}
      >
        <div
          className={`flex flex-col gap-2 bg-sky-900 overflow-hidden overflow-y-auto ${
            chatMessages.length !== 0 && `p-4`
          } rounded`}
        >
          {chatMessages.map((msg, index) => (
            <ul key={index} className="prose">
              <li
                className={`rounded px-1 shadow-md ${
                  msg.type === "user" ? "bg-sky-300 text-stone-800" : "hidden"
                }`}
              >
                {msg.type === "user" ? (
                  msg.user
                ) : (
                  <ReactMarkdown>{msg.bot}</ReactMarkdown>
                )}
              </li>
              <li
                className={`rounded px-1 shadow-md ${
                  msg.type === "assistant" ? "" : "hidden"
                }`}
              >
                {msg.type === "assistant" && (
                  <>
                    <span className="bot-emoji text-white">🤖:</span>

                    <ReactMarkdown
                      remarkPlugins={[gfm]}
                      children={msg.bot}
                      components={{
                        h1: ({ node, ...props }) => (
                          <h1 style={{ color: "white" }} {...props} />
                        ),
                        h2: ({ node, ...props }) => (
                          <h2 style={{ color: "white" }} {...props} />
                        ),
                        h3: ({ node, ...props }) => (
                          <h3 style={{ color: "white" }} {...props} />
                        ),
                        h4: ({ node, ...props }) => (
                          <h4 style={{ color: "white" }} {...props} />
                        ),
                        h5: ({ node, ...props }) => (
                          <h5 style={{ color: "white" }} {...props} />
                        ),
                        h6: ({ node, ...props }) => (
                          <h6 style={{ color: "white" }} {...props} />
                        ),
                        strong: ({ node, ...props }) => (
                          <strong style={{ color: "white" }} {...props} />
                        ),
                        em: ({ node, ...props }) => (
                          <em style={{ color: "white" }} {...props} />
                        ),
                        p: ({ node, ...props }) => (
                          <p style={{ color: "white" }} {...props} />
                        ),
                        th: ({ node, ...props }) => (
                          <th
                            style={{
                              backgroundColor: "gray",
                              color: "white",
                              padding: "6px",
                              textAlign: "left",
                              textTransform: "uppercase",
                            }}
                            {...props}
                          />
                        ),
                        td: ({ node, ...props }) => (
                          <td
                            style={{
                              color: "white",
                              padding: "6px",
                              textAlign: "left",
                            }}
                            {...props}
                          />
                        ),
                        table: ({ node, ...props }) => (
                          <table
                            style={{
                              width: "100%",
                              borderCollapse: "collapse",
                              borderColor: "gray",
                            }}
                            {...props}
                          />
                        ),
                      }}
                    />
                  </>
                )}
              </li>
            </ul>
          ))}
        </div>
        <form
          onSubmit={handleSendMessage}
          className={`flex justify-between gap-2 w-full ${
            chatMessages.length !== 0 && "mt-3"
          }`}
        >
          <input
            type="text"
            placeholder="Ask"
            value={inputMessage}
            onChange={handleInputChange}
            className="w-full rounded p-1 bg-sky-200/70 placeholder:text-black text-black"
          />
          <button type="submit" className="bg-stone-800 rounded p-1 shadow-md">
            Send
          </button>
        </form>
      </div>
      <img
        src={ai}
        alt="ai"
        onClick={toggleChatbot}
        className="fixed bottom-0 right-0 m-5 drop-shadow-xl cursor-pointer"
      />
    </div>
  );
};

export default Chatbot;
