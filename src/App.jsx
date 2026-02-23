// App.jsx
import { useState, useEffect, useRef } from "react";
import "./App.css";
import Cards from "./components/cards";
import Hearts from "./components/Hearts";
import song from "./assets/song.mp3"; 


const apologyTexts = [
  "I'm so sorry mi amor 💔",
  "Please forgive me 💖",
  "I never meant to upset you or hurt your feelings ",
  "I love you so much dont be a stranger to  me ❤️ ",
  "You mean the world to me 🌸",
  "I'm sorry for being stubborn. ",
  "Your happiness is everything to me 💕",
  "I promise to be more thoughtful 💗",
  "You are my sunshine ☀️",
  "You matter more than my ego.",
  "Forgive me, my love 💝"
];

function App() {
  const [images, setImages] = useState([]);
  const [showLoveLetter, setShowLoveLetter] = useState(false);
  const [apologyIndex, setApologyIndex] = useState(0); 
  const [currentApology, setCurrentApology] = useState(""); 
  const [musicPlayed, setMusicPlayed] = useState(false);
  const bgMusic = useRef(null);

  useEffect(() => {
    fetch("/Baby/baby.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error(err));
  }, []);

  // Play music via button or first card flip
  const playMusic = () => {
    if (bgMusic.current && !musicPlayed) {
      bgMusic.current.volume = 0.5;
      bgMusic.current
        .play()
        .then(() => setMusicPlayed(true))
        .catch((err) => console.error("Audio play failed:", err));
    }
  };

  // Show next apology message
  const handleApologyClick = () => {
    const nextIndex = (apologyIndex + 1) % apologyTexts.length; // loop after 10
    setCurrentApology(apologyTexts[apologyIndex]);
    setApologyIndex(nextIndex);
  };

  const handleCardClick = () => {
    playMusic(); // play music on first card flip
  };

  return (
    <div>
      <Hearts />

      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Happy Birthday Day Baby 🎀
      </h1>

      {/* Play music button */}
      <button
        className="apology-button"
        onClick={playMusic}
        disabled={musicPlayed}
        style={{ opacity: musicPlayed ? 0.6 : 1 }}
      >
        {musicPlayed ? "Playing 🎵" : "Play Our Song 🎵"}
      </button>

      <div className="card-grid">
        {images.map((image, i) => (
          <Cards
            key={i}
            id={i}
            src={image.src}
            alt={image.alt}
            onReveal={handleCardClick}
          />
        ))}
      </div>


      {/* Display only the current apology message */}
      <div style={{ textAlign: "center", marginTop: "10px", fontSize: "1.2rem", color: "#333" }}>
        {currentApology}
      </div>

      {/* Say Sorry button */}
      <button className="apology-button" onClick={handleApologyClick}>
        Generate New Apology 💌
      </button>

      

      {/* Love letter icon */}
      <div className="love-letter-icon" onClick={() => setShowLoveLetter(true)}>
        💌
      </div>

      {showLoveLetter && (
        <div className="modal" onClick={() => setShowLoveLetter(false)}>
          <div className="modal-content">
            <h2>My Love Letter 💖</h2>
            <p>
              I was born on 23rd of july 2003, i am now 22 years of age.
              In my 22 years life i have never come across someone as beautiful as you.
              neither have i ever loved anyone like i have loved you and neither has anyone loved me like you loved me.
              I dont even remember my life without you it feels like you were with me since birth. 
              Even now  when sometimes we have an argument and we dont talk for a while my life becomes colorless and dull.
              you are the most beautiful lady i have ever seen i have never loved anyone like i have loved you.
              you came into my life and now u r my life you have become my whole world at this point.
              my whole world revolves around you. you are the ocean of my world and i shall always cherish you and love you like this.
              and I know my love that at times i have hurt you but God knows if i have ever wanted to make you feel sad or hurt.
              I am sorry baby i wanted to make this for your Birthday but its so much work isliye thora late hojaye tou maaf krna.
              I hope you like it baby.
              i am sorry for every mistake i have made and every moment i have hurt you. YOU. ARE. MY. EVERYTHING. MUWAH.🌸

              WITH LOVE,
              FROM HAMZA
            </p>
          </div>
        </div>
      )}

      {/* Background music */}
      <audio ref={bgMusic} src={song} loop />
    </div>
  );
}

export default App;