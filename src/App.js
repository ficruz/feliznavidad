import React, { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");

  const truthQuestions = [
    "What is your biggest fear?",
    "Have you ever lied to a close friend?",
    "What is your most embarrassing memory?",
    "What is a secret you’ve never told anyone?",
    "Who was your first crush?",
    "What’s the most trouble you’ve ever been in?",
    "What’s your guilty pleasure?",
    "Have you ever cheated on a test?",
    "What’s your biggest regret?",
    "What’s the weirdest thing you’ve ever eaten?",
    "What’s a lie you’ve told to impress someone?",
    "What’s the most awkward date you’ve been on?",
    "Have you ever snooped on someone’s phone?",
    "Who is your secret celebrity crush?",
    "What’s the last thing you Googled?",
    "What’s the most embarrassing text you’ve sent?",
    "What’s a talent you wish you had?",
    "What’s the worst haircut you’ve ever had?",
    "What’s the last lie you told?",
    "What’s a habit you want to break?",
  ];

  const dareChallenges = [
    "Do 10 push-ups.",
    "Sing your favorite song.",
    "Act like a cat for 1 minute.",
    "Do your best dance move.",
    "Speak in an accent for 2 minutes.",
    "Imitate another player.",
    "Make a funny face and hold it for 30 seconds.",
    "Try to lick your elbow.",
    "Walk like a crab for 1 minute.",
    "Do a cartwheel or attempt it.",
    "Let someone tickle you for 30 seconds.",
    "Pretend to be a waiter and serve drinks.",
    "Do a silly walk across the room.",
    "Talk only in questions for 1 minute.",
    "Do a dramatic reading of a nursery rhyme.",
    "Attempt to juggle three objects.",
    "Balance something on your head for 1 minute.",
    "Let someone draw on your face with a washable marker.",
    "Do 5 animal impressions.",
    "Make up a short poem on the spot.",
  ];

  const getRandomPrompt = (pool) => {
    const randomIndex = Math.floor(Math.random() * pool.length);
    return pool[randomIndex];
  };

  return (
    <div
      className="App"
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundImage: "url(https://example.com/snow-background.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontFamily: "Candy Cane", fontSize: "3rem" }}>
        🎄 Verdad o Reto 🎄
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <button
          onClick={() => setPrompt(getRandomPrompt(truthQuestions))}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#FF4C4C",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
        >
          Verdad
        </button>
        <button
          onClick={() => setPrompt(getRandomPrompt(dareChallenges))}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            border: "none",
            borderRadius: "5px",
            color: "white",
          }}
        >
          Reto
        </button>
      </div>
      {prompt && (
        <p
          style={{
            marginTop: "20px",
            fontSize: "18px",
            fontStyle: "italic",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          {prompt}
        </p>
      )}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p>🎅 Happy Holidays! 🎁</p>
      </div>
      <div className="snowflakes" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="snowflake">
            ❄️
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
