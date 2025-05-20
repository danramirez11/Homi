import { FaCircleChevronLeft } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { Text } from "../../theme/styledcomponents";
import ResultCard from "../../components/ResultCard/ResultCard";
import './Results.css';

const Results = () => {
    const { state } = useLocation();

    console.log("Results State: ", state);

    return (
        <>
        <section className="resultsContainer">
            <div className="FormArrow">
            <FaCircleChevronLeft size={32} color="rgba(26, 25, 30, 1)"/>
            <Text variant='cardSubtitle'>Volver</Text>
            </div>

            <div className="resultsTittle">
                <Text variant='display'>Los hogares perfectos para ti</Text>
                <Text variant='subtitle'>Según tus respuestas, estos son los hogares más ideales para ti</Text>
            </div>

            <section className="resultsOptions">
            <ResultCard type="big"/>

            <section className="resultsOptionsSmall">
                <ResultCard type="small"/>
                <ResultCard type="small"/>
            </section>
            </section>

            <div className="FormFooter">

            <Text variant='captionRegular'>Powered by Homi</Text>

            </div>
        </section>
        </>
    )
}

export default Results;