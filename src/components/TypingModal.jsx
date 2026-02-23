import { useEffect, useState } from "react";

function TypingModal({ show, onClose }) {
  const text =
    "I don’t want to win arguments. I just want you. I choose you even on hard days. I’m sorry ❤️";

  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (show) {
      let i = 0;
      setDisplayText("");
      const interval = setInterval(() => {
        setDisplayText((prev) => prev + text[i]);
        i++;
        if (i >= text.length) clearInterval(interval);
      }, 40);
      return () => clearInterval(interval);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{displayText}</p>
        <button onClick={onClose}>Close ❤️</button>
      </div>
    </div>
  );
}
export default TypingModal;