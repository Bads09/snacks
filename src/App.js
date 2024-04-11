

import './App.css';
import Kary from './kary.png';
import Alimentos from "./screens/alimentos";
import Pedido from "./screens/pedido";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
