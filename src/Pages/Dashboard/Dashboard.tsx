import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import { Text } from '../../theme/styledcomponents'; 
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './Dashboard.css';
import CalendarWidget from '../../components/CalendarWidget/CalendarWidget';
import Reminders from '../../components/Reminders/Reminders';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <SideBar />

      <div className="main-content">
        <NavBar />

        <div className="page-content">
          {/* Aquí van los cards, calendario, recordatorios, etc */}
          <Text variant="sectionTitle">Mis Proyectos</Text>
          <ProjectCard
            backgroundImage="/assets/origen.webp"
            logo="/assets/origen-logo.png"
            location="Pance"
            stage="Etapa III"
            name="Apartamentos Campestres"
            tower="Torre 3 - 201"
            onClick={() => console.log('Clicked')}
            />
            <ProjectCard
            backgroundImage="/assets/guabinas.webp"
            logo="/assets/mongui-logo.png"
            location="Yumbo"
            stage="Etapa I"
            name="Ciudad Guabinas"
            tower="Torre 1 - 204"
            />

            <div className="dashboard-right">
  <CalendarWidget />
  <Reminders />
</div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
