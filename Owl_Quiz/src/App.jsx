import React from "react";
import "./App.css"; // CSS file for styling

const App = () => {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Owlify</h1>
      </header>

      {/* Main Content */}
      <main className="content">
        {/* Image Container */}
        <div className="image-container">
          <img
            src="https://via.placeholder.com/200"
            alt="Owl"
            className="owl-image"
          />
          <p className="question-mark">?</p>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button className="option-button">Option 1</button>
          <button className="option-button">Option 2</button>
          <button className="option-button">Option 3</button>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer"></footer>
    </div>
  );
};

export default App;