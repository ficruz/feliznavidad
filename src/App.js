import React, { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");

  const truthQuestions = [
    "¿Cuáles son las mejores vacaciones o paseo que has tenido en familia?",
    "¿Qué es lo que más te gusta de la persona de tu izquierda?",
    "¿Cuál es el mejor regalo que te han dado?",
    "Si pudieras tener una mascota imposible, ¿cuál sería y por qué?",
    "Cuenta algo chistoso de tu mamá.",
    "Cuenta algo chistoso de tu papá.",
    "Imagina que un día se invierten los roles de la familia y los papás son hijos y los hijos papás. Describe ese día. ¿Qué harían?",
    "Di el color y la comida favorita de la persona de la derecha. Si pierdes, saca otra pieza.",
    "¿Cuál ha sido tu mejor cumpleaños?",
    "¿Cómo sería tu día perfecto?",
    "Si pudieras ser un animal, ¿cuál serías?",
    "Si pudieras tener superpoderes, ¿cuál tendrías?",
    "Se aparece un genio y te concede 3 deseos. ¿Qué pedirías?",
    "¿Qué es lo que más y menos te gusta de ir a Chile?",
    "Pregúntale lo que quieras a la persona de la izquierda.",
    "Si pudieras ser un insecto, ¿cuál serías?",
    "Si pudieras viajar en el tiempo, ¿a dónde irías?",
    "¿A quién invitarías a pasar vacaciones en tu casa?",
    "¿Qué es lo que más te gusta de tu familia?",
    "Si pudieras hablar con los animales, ¿qué les preguntarías?",
    "Si los juguetes pudieran hablar, ¿qué crees que dirían de ti?",
    "Dile un cumplido a cada persona en la sala.",
    "¿Cuál es tu animal favorito y por qué?",
    "¿Qué harías si tuvieras un superpoder por un día?",
    "Si pudieras viajar a cualquier lugar del mundo, ¿a dónde irías?",
    "¿Qué comida y postre te gusta más?",
    "Si pudieras tener cualquier mascota, ¿qué animal elegirías?",
    "¿Qué te hace más feliz?",
    "¿Qué te gusta hacer con tu familia?",
    "¿Qué es lo más divertido que has hecho esta semana?",
    "¿Qué es lo más asombroso que sabes hacer?",
    "¿Cómo sería tu día perfecto?",
    "¿Qué te gusta más, jugar adentro o afuera?",
    "Si pudieras tener un poder mágico, ¿cuál sería?",
  ];

  const dareChallenges = [
    "Haz como monito por 10 segundos.",
    "Baila la mayonesa.",
    "Baila la macarena.",
    "Pon tu dedo en el suelo y da 5 giros alrededor.",
    "Camina como enanito.",
    "Haz un sonido de peo por 20 segundos.",
    "Canta tu canción favorita.",
    "Inventa una canción que incluya a tu familia.",
    "Repite tu turno.",
    "Haz una mímica de tu película favorita. Si en un minuto no adivinan, repite turno.",
    "Las demás personas tienen que decir algo bonito de ti.",
    "Baila como pavo por 20 segundos.",
    "Imita al Uli o la Maguita o alguien de Chile.",
    "Piensa en una fruta, y di su nombre o descríbela en marciano. Los demás tendrán que adivinar.",
    "Cuenta un chiste.",
    "Imita un animal sin hacer sonidos y los demás deben adivinar en un minuto. Si no adivinan, repite turno.",
    "Pon un huevo.",
    "Dile te quiero a tus papás/hijos como si fueras una sirena o una ballena.",
    "Canta y baila Cumpleaños Feliz como un animal a tu elección.",
    "Camina como un cangrejo durante 15 segundos.",
    "Salta en un pie mientras cantas una canción.",
    "Encuentra un objeto rojo en la habitación y tráelo.",
    "Forma las letras de tu nombre con tu cuerpo.",
    "Corre alrededor de la mesa tres veces.",
    "Baila como robot.",
    "Da un abrazo grupal a toda la familia.",
    "Haz una cara chistosa que haga reír a los demás.",
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{
          fontFamily: "Candy Cane",
          fontSize: "3rem",
          color: "#FF4C4C",
        }}
      >
        🎄 Verdad O Reto 🎄
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
            fontSize: "40px",
            fontStyle: "italic",
            color: "rgba(0, 0, 0, 0.5)",
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
          color: "black",
        }}
      >
        <p>🎅 🎅 🎅 🎅 Feliz Navidad Familia Herteler Cruz 🎁 🎁 🎁 🎁</p>
      </div>
      <div className="snowflakes" aria-hidden="true">
        {Array.from({ length: 10 }).map((_, col) =>
          Array.from({ length: 5 }).map((_, i) => (
            <div
              key={`${col}-${i}`}
              className="snowflake"
              style={{
                left: `${col * 10}vw`, // Divide the screen into 10 equal columns
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            >
              ❄️
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
