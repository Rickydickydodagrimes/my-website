import { useState } from "react";

function ApologyButton() {
  const apologies = [
    "I'm sorry for being stubborn.",
    "You matter more than my ego.",
    "I promise to listen better.",
    "I never want to lose you.",
    "I choose you. Always."
  ];

  const [text, setText] = useState("");

  const generate = () => {
    const random = Math.floor(Math.random() * apologies.length);
    setText(apologies[random]);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <button onClick={generate}>Generate New Apology 💌</button>
      <p>{text}</p>
    </div>
  );
}
export default ApologyButton;