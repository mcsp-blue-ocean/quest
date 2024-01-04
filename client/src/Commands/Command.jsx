import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import addedCopy from "../assets/commands/copied.svg";
import addCopy from "../assets/commands/copy.svg";
import { isCopied, notCopied, commandInputStyling } from "../style/style";

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
            className={`${
              copied ? isCopied : notCopied
            } ${commandInputStyling}`}
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
