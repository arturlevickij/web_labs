import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import StonesType from "./components/StonesType/StonesType";

function App() {
  return (
    <div className="App">
        <Header/>
        <Navigation/>
        <StonesType/>
        <Footer/>
    </div>
  );
}

export default App;
