import React from 'react';
import './navbar.css'; 

const navbar= () =>{
  return (
  <nav className="navbar" id='navbar'>
    <ul>
        <h1>Ripe Tomatoes <link rel="manifest" href="https://www.rottentomatoes.com/assets/pizza-pie/manifest/manifest.json"></link> </h1>
        <li className="nav-item">
            <a href="#">Home</a>
        </li>
        <li className="nav-item">
            <a href="#"><b>Movies</b></a>
        </li>
        <li className="nav-item">
            <a href="#"><b>News</b></a>
        </li>
        <li className="nav-item">
            <a href="#"><b>Contact</b></a>
        </li>
    </ul>
  </nav>
  );
}
export default navbar;
