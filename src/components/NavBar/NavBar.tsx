import React from 'react';
import { useLocation } from 'react-router-dom';
import { Text } from '../../theme/styledcomponents';
import { FiSearch } from 'react-icons/fi';
import { FiSettings, FiBell } from 'react-icons/fi';
import './NavBar.css';

const NavBar: React.FC = () => {
  const location = useLocation();
  const showGreeting = location.pathname === '/dashboard';

  const userName = 'Melissa'; // Temporalmente

  return (
    <div className="navbar">
      <div className="navbar-left">
        {showGreeting && (
          <Text variant="headlineBold" color="#2C2C2C">
            Bienvenida de nuevo, {userName}
          </Text>
        )}
      </div>

      <div className="navbar-right">
        <div className="search-box">
          <FiSearch size={18} color="#A3AED0" />
          <input
            type="text"
            placeholder="Busca tu proyecto"
            className="search-input"
          />
        </div>
        <div className="icon-button">
          <FiSettings size={20} />
        </div>
        <div className="icon-button">
          <FiBell size={20} />
        </div>
        <img
          src="/assets/user_avatar.webp"
          alt="User"
          className="user-avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
