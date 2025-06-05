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
      path: '/profile',
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
          src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//Logo2JaramilloMora.webp"
          alt="Logo"
          className="logo"
        />
      </div>

      <ul className="nav-list">
        {navItems.map((item) => {
          const currentFirstSegment = location.pathname.split('/')[1];
          const itemFirstSegment = item.path.split('/')[1];
          const isActive = currentFirstSegment === itemFirstSegment;

          return (
            <li key={item.path} className={`nav-item ${isActive ? 'active' : ''}`}>
              <NavLink to={item.path} className="nav-link">
                <div className="icon">{item.icon}</div>
                <Text variant="subtitle" color={isActive ? '#EB5247' : '#B1B1B1'}>
                  {item.label}
                </Text>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="footer-text">
        <Text variant='captionRegular'>Powered by Homi</Text>
      </div>
    </nav>
  );
};

export default SideBar;
