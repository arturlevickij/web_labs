import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from './page/Navigation/Navigation';
import Catalog from './page/catalog/Catalog';
import ItemPage from "./page/ProductPage/ProductPage";
import Cart from "./page/Cart/Cart";
import Checkout from "./page/Buy/Checkout"

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path="/" element = {<Navigation/>} />
            <Route path="/catalog" element ={<Catalog/>} />
            <Route path="/cart" element ={<Cart/>} />
            <Route path="/itempage/:id" element={<ItemPage/>}/>
            <Route path="/checkout" element ={<Checkout/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
