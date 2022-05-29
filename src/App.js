import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Catagories from "./Catagories";
import Recepies from "./Pages/Recepies";
import Home from "./Pages/home";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/recepies/:category" exact element={<Recepies />} />
      </Routes>
    </>
  );
}

export default App;
