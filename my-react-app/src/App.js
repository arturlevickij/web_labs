import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from './page/Navigation/Navigation';
import Catalog from './page/catalog/Catalog';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element = {<Navigation/>} />
            <Route path="/catalog" element ={<Catalog/>} />
            <Route path="/cart" element ={<div>Its Cart page</div>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
