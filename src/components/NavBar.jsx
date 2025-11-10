import React from "react";
import CartWidget from "./CartWidget";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Productos", path: "/productos" },
  { name: "Contacto", path: "/contacto" },
  { name: "Ofertas", path: "/ofertas" },
];

const NavBar = () => {
  const itemInCartCount = 5; 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 sticky-top">
      {/* Usar Link en lugar de a */}
      <a className="navbar-brand" href="/">MyShop</a> 
      
      <button 
        className="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    
      {/* Pasar el conteo de items a widget */}
      <CartWidget itemCount={itemInCartCount} />
    </nav>
  );
};

export default NavBar;