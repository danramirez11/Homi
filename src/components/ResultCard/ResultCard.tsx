import {  } from "react-icons/fa6";
import {  Text } from "../../theme/styledcomponents";
import { FaArrowCircleUp } from "react-icons/fa";
import './ResultCard.css';
import { IoLocationOutline } from "react-icons/io5";

type ResultCardProps = {
    type: 'big' | 'small';
}

const ResultCard = ({type}: ResultCardProps) => {
    return (
        <section className="result-card"
            style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8), transparent), url("https://www.tollbrothersapartmentliving.com/wp-content/uploads/2024/10/Remy-Pool-min.jpg")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            {type === 'big' &&
            <Text variant='bodyRegular' className="chip afinity">Tienes un ?? de afinidad con este hogar</Text>}

            <div className="result-card-location">
                <IoLocationOutline color="white" size={20}/>
                <Text variant='bodyRegular'>Lugar</Text>
                <Text variant='bodyRegular' className="inline">Tipo de vivienda</Text>
            </div>

            <Text variant='display'>Nombre del hogar</Text>
            <Text variant="subtitle">Precios desde 00</Text>

            {type === 'big' && <Text variant="bodyRegular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quas. Ullam, dolorem. Mollitia nulla maiores veniam exercitationem neque dolore, repellendus blanditiis rerum illum nam nemo veritatis magni voluptates eaque nobis.</Text>}

            <FaArrowCircleUp className="resultRedirect" size={32} style={{transform: 'rotate(45deg)'}} color="white" />
            
        </section>
    );
}

export default ResultCard;