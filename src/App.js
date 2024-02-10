import logo from './logo.svg';

import './App.css';
import Kary from './kary.png';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
        <ul className="menu">
          <li><a href="#">Alimentos</a></li>
          <li><a href="#">Pedido</a></li>
          
        </ul>
        
      </nav>
     
        <div className="portada">
        <img className="logo" src={Kary}/>
        <p className="descripcion">Contamos con excelente calidad y servicio en nuestros productos.</p>
      
      </div>
      </header>
    </div>
  );
}

export default App;
