import React from "react";
import Kary from './kary copy.png';
import style from "./Header.module.css";

export const Header = () => {
return (
    <div className="portada">
    <header className="App-header">
    <img className="logo" src={Kary}/>
    <p className="descripcion">Contamos con excelente calidad y servicio en nuestros productos.</p>
  
  </header>
  </div>
);

}
export default Header;