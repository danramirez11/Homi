// src/components/ProjectHeader.tsx

import React from "react";
import "./ProjectHeader.css"; // Asegúrate que esta ruta sea correcta
import { MdLocationOn } from "react-icons/md";

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="div-header-proyecto">
      <img src={imageUrl} alt="Header" className="imagen-header-proyecto" />
      <div className="overlay"></div>
      <div className="text-container">
        <div className="location-proyecto">
        <MdLocationOn size={16} color="white"/>
        <p>Pance</p>
        </div>
        <h2>{title}</h2>
        <p className="subtitle-proyecto">{subtitle}</p>
        <div className="logo-div-proyecto">
          <img
            src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(logo).webp"
            alt="Logo del proyecto"
            className="logo-proyecto"
            width={100}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;

