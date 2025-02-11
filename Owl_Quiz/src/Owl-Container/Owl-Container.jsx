import { useState } from "react";

import barnOwl from "../owl-images/barn-owl.png";
import littleOwl from "../owl-images/little-owl.png";
import longEaredOwl from "../owl-images/long-eared-owl.png";
import shortEaredOwl from "../owl-images/short-eared-owl.png";
import correctSoundOwl from "../owl-sounds/owl-hooting-223549.mp3"

export default function OwlContainer() {
    
    // Array of owl species and their image paths
    const owls = [
      { name: "Barn Owl", image: barnOwl },
      { name: "Little Owl", image: littleOwl },
      { name: "Long Eared Owl", image: longEaredOwl },
      { name: "Short Eared Owl", image: shortEaredOwl }
    ];
  
  
  // State for the current question
  const [currentOwl, setCurrentOwl] = useState(getRandomOwl());
  const [options, setOptions] = useState(shuffleOptions(currentOwl));
  const [feedback, setFeedback] = useState(""); // Feedback for the user's answer
  const [score, setScore] = useState(0); // Score state

  // Function to get a random owl
  function getRandomOwl() {
    return owls[Math.floor(Math.random() * owls.length)];
  }

  const correctSound = new Audio(correctSoundOwl);

  // Function to shuffle options (correct + random incorrect answers)
  function shuffleOptions(correctOwl) {
    const incorrectOptions = owls
      .filter((owl) => owl.name !== correctOwl.name)
      .sort(() => Math.random() - 0.5) // Shuffles the incorrect options to ensure any have a chance to appear on the buttons
      .map((owl) => owl.name);

    const allOptions = [...incorrectOptions.slice(0, 2), correctOwl.name];
    return allOptions.sort(() => Math.random() - 0.5); // Shuffle the options
  }

  // Function to handle answer selection
  function handleAnswer(selectedOption) {
    if (selectedOption === currentOwl.name) {
      setFeedback("🎉 Correct! 🎉");
      setScore((prevScore) => prevScore + 1); // Increment score
      correctSound.play(); // Play sound on correct answer
    } else {
      setFeedback(`  Wrong! The correct answer is ${currentOwl.name}. 😢`);
      setScore((prevScore) => Math.max(prevScore - 1, 0));
    }

    // Load a new question after 2 seconds
    // Make a button state that can disable clicks until the new 'question' has loaded, and add it to here
    setTimeout(() => {
      const newOwl = getRandomOwl();
      setCurrentOwl(newOwl);
      setOptions(shuffleOptions(newOwl));
      setFeedback("");
    }, 2000);
  }

  
  
  return (
         <>
        <main className="content">
       
          {/* Image Container */}
          <div className="image-container">
          <img src={currentOwl.image} alt="Owl" />
            <p className="question-mark">?</p>
          </div>
  
          {/* Buttons */}
         {/* Display Multiple-Choice Options */}
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className="option-button"
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
        </main>

      <div className = "score-box">
      <p className="score">Score: {score}</p> {/* Display score */}
      {/* Display Feedback */}
      <div className="feedback">
        <p>{feedback}</p>
        </div>
      </div>
      </>
  );
}
 