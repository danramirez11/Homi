import {  } from "react-icons/fa6";
import {  Text } from "../../theme/styledcomponents";
import { FaArrowCircleUp } from "react-icons/fa";
import './ResultCard.css';
import { IoLocationOutline } from "react-icons/io5";

type ResultCardProps = {
    type: 'big' | 'small';
    ubicacion?: string;
    tipoVivienda?: string;
    nombre?: string;
    precio?: string;
    descripcion?: string;
    imagen?: string;
    onclick?: () => void;
}

const ResultCard = ({type, ubicacion, tipoVivienda, nombre, precio, descripcion, imagen, onclick}: ResultCardProps) => {
    return (
        <section className="result-card"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("${imagen}")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            onClick={onclick}
            >

            <div className="result-card-location">
                <IoLocationOutline color="white" size={20}/>
                <Text variant='bodyRegular'>{ubicacion}</Text>
                <Text variant='bodyRegular' className="inline">Vivienda {tipoVivienda}</Text>
            </div>

            <Text variant='display'>{nombre}</Text>
            <Text variant="subtitle">Precios desde ${precio}</Text>

            {type === 'big' && <Text variant="bodyRegular">{descripcion}</Text>}

            <FaArrowCircleUp className="resultRedirect" size={32} style={{transform: 'rotate(45deg)'}} color="white" />
            
        </section>
    );
}

export default ResultCard;