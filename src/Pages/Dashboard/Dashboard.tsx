import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';

import './Dashboard.css';
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <SideBar />

      <div className="main-content">
        <NavBar />

        <div className="page-content">
          {/* Aquí van los cards, calendario, recordatorios, etc */}
          <h2>Contenido del dashboard aquí</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
