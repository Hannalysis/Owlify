import React from 'react';
import OwlQuestions from './OwlQuestions';

export default function OwlContainer() {
    return (
      <div className="container">
        {/* <OwlQuestions /> */}
        {/* Header */}
        <header className="header">
          <h1>Owlify</h1>
        </header>
  
        {/* Main Content */}
        <main className="content">
          {/* Image Container */}
          <div className="image-container">
            <img
              src="../owl-images/long-eared-owl.JPG"
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

 