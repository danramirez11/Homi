import { Button, Text } from '../../theme/styledcomponents';
import './Enlace.css'
import type { Proyecto } from '../../types/Proyectos';
import { useNavigate } from 'react-router-dom';

// const Portada = ({ Proyectodata }: { Proyectodata: Proyecto }) => {
const Enlace = ({ Proyectodata }: { Proyectodata: Proyecto }) => {
const navigate = useNavigate()
  return (
    <section id='SectionEnlaceSimg'>
        <div 
        className='SectionEnlaceBack'
        style={{
        backgroundImage: 'url("https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/SIM-imagen.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2Q2NzhmZDkzLTg1ZjgtNDEzOS1hMTcyLTFiN2ZiNjQ3ZTYzNyJ9.eyJ1cmwiOiJwcm95ZWN0b3MvU0lNLWltYWdlbi5qcGciLCJpYXQiOjE3NDg3MDM4OTcsImV4cCI6MTc4MDIzOTg5N30.20Lu5q4LWsf8v3E2QzEJdTEUFQSA9_e40FbmTiCnSNg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}
        >
            <div className='SectionEnlaceInfo'>
                <Text variant="sectionTitle" color="#EFEFEF">En Jaramillo Mora, te ayudamos  a hacerlo realidad</Text>
                <Text variant="subtitle" color="#EFEFEF">Simula tu crédito y descubre lo cerca que estás</Text>
                <Button variant='light' size='medium' onClick={() => navigate('/Simulation', { state: { Proyectodata } })} >Me interesa</Button>
            </div>
        </div>
        
    </section>
  );
};

export default Enlace;