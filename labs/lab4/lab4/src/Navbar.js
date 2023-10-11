import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
    <ul className="nav nav-tabs">
    <li className="nav-item">
    <NavLink className="nav-link" to="/compose-salad">
    Komponera en sallad
    </NavLink>
    </li>
    <li className= "nav-item">
        <NavLink className="nav-link" to ="/view-order">
            Visa beställning
            </NavLink>
    </li>
    </ul>);
    }
export default Navbar;