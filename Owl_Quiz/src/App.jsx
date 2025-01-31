import React from "react";
import "./App.css"; // CSS file for styling
import OwlContainer from "./Owl-Container/Owl-Container";
import OwlQuestions from "./Owl-Container/OwlQuestions";
import Header from "./Header/Header.jsx"

function App() {
  return <>
    <Header />
    <OwlContainer/>
  </>
}

export default App;