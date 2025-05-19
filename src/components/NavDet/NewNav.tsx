import React from 'react';
import "./NewNav.css";

export interface NavjmProps {
  onLoginClick: () => void;
}

const NewNav: React.FC<NavjmProps> = ({ onLoginClick }) => {
  return (
    <nav className="New_nav">
      <div className="logo-container">
        <img
          src="/assets/LogoJaramilloMora.webp"
          alt="Logo"
          className="Logo_nav"
        />
      </div>

      <div className="Info_container">
        <p className="Nav_text">Línea de servicio al cliente: (602) 3989898</p>

        <button onClick={onLoginClick} className="Login_button">
          Iniciar sesión
        </button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          />
        </svg>

      </div>
    </nav>
  );
};

export default NewNav;