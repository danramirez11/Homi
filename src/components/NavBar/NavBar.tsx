import React from 'react';
import { useLocation } from 'react-router-dom';
import { Text } from '../../theme/styledcomponents';
import { FiSearch } from 'react-icons/fi';
import { FiSettings, FiBell } from 'react-icons/fi';
import './NavBar.css';
import { useSelector } from 'react-redux';
import type { storeType } from '../../store/store';

const NavBar: React.FC = () => {
  const location = useLocation();
  const showGreeting = location.pathname === '/dashboard';
  const user = useSelector((state: storeType) => state.user.user);


  const userName = user.full_name; 

  return (
    <div className="navbar">
      <div className="navbar-left">
        {showGreeting && (
          <Text variant="headlineBold" color="#2C2C2C">
            Te damos la bienvenida, {userName}
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
          src="https://i.pinimg.com/1200x/29/b8/d2/29b8d250380266eb04be05fe21ef19a7.jpg"
          alt="User"
          className="user-avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
