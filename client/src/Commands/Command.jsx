import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import addedCopy from "../assets/commands/copied.svg";
import addCopy from "../assets/commands/copy.svg";

const Command = ({ syntax }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <>
      <div className="flex items-center">
        <div className="w-72">
          <input
            type="email"
            id="command"
            value={syntax}
            aria-label="command"
            disabled
            className={`w-full h-8 ${
              copied ? `bg-emerald-100` : `bg-sky-100`
            } text-black p-1 rounded`}
          />
        </div>
        <CopyToClipboard text={syntax} onCopy={handleCopy}>
          <div className="w-10 mt-1">
            {!copied ? (
              <button>
                <img src={addCopy} alt="copy" />
              </button>
            ) : (
              <button>
                <img src={addedCopy} alt="copy" />
              </button>
            )}
          </div>
        </CopyToClipboard>
      </div>
    </>
  );
};

export default Command;
