import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import { Text } from '../../theme/styledcomponents'; 
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CalendarWidget from '../../components/CalendarWidget/CalendarWidget';
import Reminders from '../../components/Reminders/Reminders';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <SideBar />
      </div>

      <div className="main-content">
        <div className="navbar">
          <NavBar />
        </div>

        <div className="dashboard-body">
          <div className="dashboard-left">
            <Text variant="sectionTitle">Mis Proyectos</Text>

            <ProjectCard
              backgroundImage="https://www.jaramillomora.com/wp-content/uploads/2025/01/origen-galeria-9-scaled.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/CompactoF(logo).png?..."
              location="Pance"
              stage="Etapa III"
              name="Apartamentos Campestres"
              tower="Torre 3 - 201"
              onClick={() => console.log('Clicked')}
            />

            <ProjectCard
              backgroundImage="https://storage.googleapis.com/bucket-jm-web/wp-content/uploads/2024/08/zona-picinic-tamarindo.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/CompactoF(logo).png?..."
              location="Yumbo"
              stage="Etapa I"
              name="Ciudad Guabinas"
              tower="Torre 1 - 204"
            />

            <ProjectCard
              backgroundImage="https://storage.googleapis.com/bucket-jm-web/wp-content/uploads/2024/10/galeria-titanio-piscina.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/CompactoF(logo).png?..."
              location="Sur de Cali"
              stage="Etapa II"
              name="Titanio Apartamentos"
              tower="Torre 2 - 504"
            />
          </div>

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
