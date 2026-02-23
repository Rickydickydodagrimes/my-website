// Hearts.jsx
import { useEffect, useState } from "react";
import "../App.css";

export default function Hearts() {
  const [heartsArray, setHeartsArray] = useState([]);

  useEffect(() => {
    const hearts = Array.from({ length: 25 }).map(() => ({
      left: Math.random() * 100 + "%",
      size: 15 + Math.random() * 15 + "px",
      duration: 3 + Math.random() * 3 + "s",
      delay: Math.random() * 5 + "s"
    }));
    setHeartsArray(hearts);
  }, []);

  return (
    <div className="hearts">
      {heartsArray.map((h, i) => (
        <div
          key={i}
          className="heart"
          style={{
            left: h.left,
            fontSize: h.size,
            animationDuration: h.duration,
            animationDelay: h.delay
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
}