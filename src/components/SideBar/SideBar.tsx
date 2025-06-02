import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';
import { FaTools } from 'react-icons/fa';
import { Text } from '../../theme/styledcomponents'; 
import './SideBar.css';

const SideBar: React.FC = () => {
  const location = useLocation();

  const navItems = [
    {
      path: '/dashboard',
      icon: <AiFillHome size={24} />,
      label: 'Mis proyectos',
    },
    {
      path: '/perfil',
      icon: <FaUserAlt size={20} />,
      label: 'Perfil',
    },
    {
      path: '/pagos',
      icon: <BiMoney size={22} />,
      label: 'Pagos',
    },
    {
      path: '/postventa',
      icon: <FaTools size={22} />,
      label: 'Postventa',
    },
  ];

  return (
    <nav className="sidebar">
      <div className="logo-container">
        <img
          src="/assets/LogoJaramilloMora.webp"
          alt="Logo"
          className="logo"
        />
      </div>

      <ul className="nav-list">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <li key={item.path} className={`nav-item ${isActive ? 'active' : ''}`}>
              <NavLink to={item.path} className="nav-link">
                <div className="icon">{item.icon}</div>
                <Text variant="bodyBold" color={isActive ? '#E35252' : '#A3A3A3'}>
                  {item.label}
                </Text>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="footer-text">
        <Text variant="captionRegular" color="#8C93A3">Powered by Homi</Text>
      </div>
    </nav>
  );
};

export default SideBar;
