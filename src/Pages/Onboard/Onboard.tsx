import { useNavigate } from "react-router-dom";
import ButtonOnboarding from "../../components/ButtonOnbording/ButtonOnb";
import Navjm from "../../components/Navjm/Nav";
import "./Onboard.css"
import { Text } from "../../theme/styledcomponents";

const Onboard = () => {
    const navigate = useNavigate();
    
    return (
    <div className="OnboarScreen"
    style={{
        backgroundImage: `url('https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//OnboardingImg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
    }}
    >
        <Navjm/>
        <div className="OnboardInfo">
            <Text variant="display" color="white">¡Bienvenido!</Text>
            <div>
                <Text variant="subtitle" color="white">Encuentra el hogar de tus sueños en unos pocos pasos.</Text>
                <Text variant="subtitle" color="white">¡Haz click en iniciar para comenzar con tu formulario!</Text>
            </div>
            <ButtonOnboarding onClick={() => navigate('/form')}>Iniciar</ButtonOnboarding>
        </div>

        <div className="OnboardSub">
            <Text variant="captionRegular" color="white">Power by Homi</Text>
        </div>
        
    </div>
  );
};

export default Onboard;