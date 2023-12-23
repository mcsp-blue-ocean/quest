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

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() !== "") {
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { user: `User: ${inputMessage}`, type: "user" },
      ]);

      // *** BLAISE CHATBOT LOGIC INPUT ***

      // Placeholder for Blaise chatbox logic
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { bot: "Bot: What a ridiculous question to ask!", type: "bot" },
      ]);
      // *** END OF BLAISE CHATBOX LOGIC ***
      setInputMessage("");
    }
  };

  return (
    <div className="relative">
      <div
        className={`${
          !isOpen
            ? "hidden"
            : "flex flex-col items-center fixed bottom-28 right-6 p-2 rounded-lg shadow-xl bg-sky-700"
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
