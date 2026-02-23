import { useState } from "react";
import { cardTexts } from "../assets/cardtexts";

/*const cardTexts = [
  "You are my sunshine 🌞",  //
  "My heart beats for you ❤️",
  "Forever and always 💖",
  "You make life magical ✨",
  "With you, everything is brighter 🌸",
  "You are my dream come true 🌹"
];*/

function Cards({ id, src, alt, onReveal }) {
  const [isRotated, setIsRotated] = useState(false);

  const handleRotate = () => {
    if (!isRotated && onReveal) onReveal();
    setIsRotated(!isRotated);
  };

  const text = cardTexts[id % cardTexts.length];

  return (
    <div className={`card ${isRotated ? "rotate" : ""}`} onClick={handleRotate}>
      <div className="card-inner">
        <div className="card-front">
          <img src={src} alt={alt} />
        </div>
        <div className="card-back">
  <p>{cardTexts[id]}</p>  {/* assuming id ranges from 0 to 8 */}
  </div>
      </div>
    </div>
  );
}

export default Cards;