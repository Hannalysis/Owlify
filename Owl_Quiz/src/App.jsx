import React from "react";
import "./App.css"; // CSS file for styling
import OwlContainer from "./Owl-Container/Owl-Container";
import OwlQuestions from "./Owl-Container/OwlQuestions";
import Header from "./Header/Header.jsx"

const data = [
  {question: "What is React?", answer: " React is a JavaScript library used to build user interfaces for web and native applications. "},
  {question: " What is a component?", answer: " A component is a piece of the UI that has its own logic and appearance."},
  {question: "How do you know it’s a React component?", answer: "React component names must always start with a capital letter, while HTML tags must be lowercase."},
]


function App() {
  return <>
    <Header />
    <OwlContainer/>
  </>
}

export default App;