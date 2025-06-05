import React from 'react';
import SideBar from '../../components/SideBar/SideBar';
import NavBar from '../../components/NavBar/NavBar';
import { Text } from '../../theme/styledcomponents'; 
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import CalendarWidget from '../../components/CalendarWidget/CalendarWidget';
import Reminders from '../../components/Reminders/Reminders';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="side-bar">
      <SideBar />
      </div>
    
      <div className="main-content">
        <div className="nav-bar">
        <NavBar />
        </div>

        <div className="dashboard-body">
          <div className="dashboard-left">
            <Text variant="sectionTitle">Mis Proyectos</Text>

            <ProjectCard
              backgroundImage="https://www.jaramillomora.com/wp-content/uploads/2025/01/origen-galeria-8-scaled.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(logo).webp"
              location="Pance"
              stage="Etapa III"
              name="Apartamentos Campestres"
              tower="Torre 3 - 201"
              onClick={() => navigate('/dashboard/project')}
            />

            <ProjectCard
              backgroundImage="https://www.jaramillomora.com/wp-content/uploads/2024/03/img-galeria-new-maca-6.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//CompactoF(logo).png"
              location="Sur de Cali"
              stage="Etapa I"
              name="Reserva Kachipay"
              tower="Torre 1 - 204"
            />
            <ProjectCard
              backgroundImage="https://storage.googleapis.com/bucket-jm-web/wp-content/uploads/2024/08/olivo-zona-mascotas.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//EspaciosoC(logo).png"
              location="Jamundí"
              stage="Etapa II"
              name="Olivo Apartamentos"
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
