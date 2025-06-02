import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import { Text } from '../../theme/styledcomponents'; 

import './Dashboard.css';
const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <SideBar />

      <div className="main-content">
        <NavBar />

        <div className="page-content">
          {/* Aquí van los cards, calendario, recordatorios, etc */}
          <Text variant="sectionTitle">Mis Proyectos</Text>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
