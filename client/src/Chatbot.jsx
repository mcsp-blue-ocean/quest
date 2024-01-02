import { useState } from "react";
import ai from "./assets/chatbot.svg?web";

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

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      const userMessage = { user: `User: ${inputMessage}`, type: "user" };
      setChatMessages((prevMessages) => [...prevMessages, userMessage]);

      try {
        const response = await fetch("http://localhost:3000/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: inputMessage,
            messages: chatMessages
              .filter((msg) => msg.type === "user")
              .map((msg) => ({
                role: msg.type,
                content: msg.user.slice(6),
              })),
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        const botMessage = {
          bot: `Bot: ${responseData.message}`, // Use the message field directly
          type: "assistant",
        };
        setChatMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error("Failed to send message:", error);
      }

      setInputMessage("");
    }
  };

  return (
    <div className="relative">
      <div
        className={`${
          !isOpen
            ? "hidden"
            : "flex flex-col items-center fixed bottom-28 right-6 p-2 rounded-lg shadow-xl bg-sky-700 border border-white/50"
        }`}
      >
        <div
          className={`flex flex-col gap-2 bg-sky-900 ${
            chatMessages.length !== 0 && `p-4`
          } rounded`}
        >
          {chatMessages.map(({ user, bot }, index) => (
            <ul key={index}>
              <li className="bg-sky-300 text-stone-800 rounded px-1 shadow-md">
                {user}
              </li>
              <li className="bg-sky-950 rounded px-1 shadow-md">{bot}</li>
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
