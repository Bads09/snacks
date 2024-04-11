import React from "react";

import style from "./NavBar.module.css";

export const NavBar = () => {

return ( 
    <div className="navbar">
        <nav className="menu">
            <ul className="menu">
                <li>
                    <a className="menu" href="#">Alimentos</a>
                </li>
                <li>
                <a className="menu" href="#">Pedido</a>
                </li>
            </ul>
        </nav>
    </div>

);
}

export default NavBar;