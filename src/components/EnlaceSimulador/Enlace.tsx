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
        backgroundImage: 'url("https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/SIM-imagen.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAwNzA2YzcwLWMzOTktNDUwZi04MWM4LWJhYzVmNjhhN2NhNCJ9.eyJ1cmwiOiJwcm95ZWN0b3MvU0lNLWltYWdlbi5qcGciLCJpYXQiOjE3NDc3MDc2OTYsImV4cCI6MTc3OTI0MzY5Nn0.529uBFg3XVSuO-zl8hpKYUo_htbjR0pnN3Lvk2uzY-A")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',}}
        >
            <div className='SectionEnlaceInfo'>
                <Text variant="sectionTitle" color="#EFEFEF">En Jaramillo Mora, te ayudamos  a hacerlo realidad</Text>
                <Text variant="subtitle" color="#EFEFEF">Simula tu crédito y descubre lo cerca que estás</Text>
                <Button variant='light' size='small' onClick={() => navigate('/Simulation', { state: { Proyectodata } })} >Me interesa</Button>
            </div>
        </div>
        
    </section>
  );
};

export default Enlace;