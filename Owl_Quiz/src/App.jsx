import "./App.css"; 
import OwlContainer from "./Owl-Container/Owl-Container";
import Header from "./Header/Header.jsx"

function App() {
  return <>
    <Header />
    <div className = "content-container">
    <OwlContainer/>
    </div>
  </>
}

export default App;