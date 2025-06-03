import React from 'react';
import './ProjectCard.css';
import { Text } from '../../theme/styledcomponents';
import { MdLocationOn } from 'react-icons/md';

type ProjectCardProps = {
  backgroundImage: string;
  logo: string;
  location: string;
  stage: string;
  name: string;
  tower: string;
  onClick?: () => void;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  backgroundImage,
  logo,
  location,
  stage,
  name,
  tower,
  onClick,
}) => {
  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      onClick={onClick}
    >
      <div className="overlay">
        <div className="card-left">
          <div className="card-tags">
            <div className="tag">
              <MdLocationOn size={16} />
              <Text variant="captionRegular" color="#FFFFFF">
                {location}
              </Text>
            </div>
            <div className="tag stage">
              <Text variant="captionRegular" color="#FFFFFF">
                {stage}
              </Text>
            </div>
          </div>

          <Text variant="sectionTitle" color="#FFFFFF">{name}</Text>
          <Text variant="bodyRegular" color="#FFFFFF">{tower}</Text>
        </div>

        <div className="card-right">
          <img src={logo} alt="Logo" className="project-logo" />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
