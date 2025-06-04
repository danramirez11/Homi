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
      <SideBar />

      <div className="main-content">
        <NavBar />

        <div className="dashboard-body">
          <div className="dashboard-left">
            <Text variant="sectionTitle">Mis Proyectos</Text>

            <ProjectCard
              backgroundImage="https://www.jaramillomora.com/wp-content/uploads/2025/01/origen-galeria-9-scaled.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/CompactoF(logo).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2Q2NzhmZDkzLTg1ZjgtNDEzOS1hMTcyLTFiN2ZiNjQ3ZTYzNyJ9.eyJ1cmwiOiJwcm95ZWN0b3MvQ29tcGFjdG9GKGxvZ28pLnBuZyIsImlhdCI6MTc0ODcwMzk4MywiZXhwIjoxNzgwMjM5OTgzfQ.pbu-0RTCyYL5zM8ed8lSJ9gsWdPNEIq_RFO53RzNyqY"
              location="Pance"
              stage="Etapa III"
              name="Apartamentos Campestres"
              tower="Torre 3 - 201"
              onClick={() => console.log('Clicked')}
            />

            <ProjectCard
              backgroundImage="https://storage.googleapis.com/bucket-jm-web/wp-content/uploads/2024/08/zona-picinic-tamarindo.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/CompactoF(logo).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2Q2NzhmZDkzLTg1ZjgtNDEzOS1hMTcyLTFiN2ZiNjQ3ZTYzNyJ9.eyJ1cmwiOiJwcm95ZWN0b3MvQ29tcGFjdG9GKGxvZ28pLnBuZyIsImlhdCI6MTc0ODcwMzk4MywiZXhwIjoxNzgwMjM5OTgzfQ.pbu-0RTCyYL5zM8ed8lSJ9gsWdPNEIq_RFO53RzNyqY"
              location="Yumbo"
              stage="Etapa I"
              name="Ciudad Guabinas"
              tower="Torre 1 - 204"
            />
            <ProjectCard
              backgroundImage="https://storage.googleapis.com/bucket-jm-web/wp-content/uploads/2024/10/galeria-titanio-piscina.webp"
              logo="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/CompactoF(logo).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2Q2NzhmZDkzLTg1ZjgtNDEzOS1hMTcyLTFiN2ZiNjQ3ZTYzNyJ9.eyJ1cmwiOiJwcm95ZWN0b3MvQ29tcGFjdG9GKGxvZ28pLnBuZyIsImlhdCI6MTc0ODcwMzk4MywiZXhwIjoxNzgwMjM5OTgzfQ.pbu-0RTCyYL5zM8ed8lSJ9gsWdPNEIq_RFO53RzNyqY"
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
