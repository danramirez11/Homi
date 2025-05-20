/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaCircleChevronLeft } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import { Text } from "../../theme/styledcomponents";
import ResultCard from "../../components/ResultCard/ResultCard";
import './Results.css';
import { organizeResults } from "../../utils/orgResults";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spiner";

const Results = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const [main, setMain] = useState<any>(null);
    const [other, setOther] = useState<any>(null);
    
    useEffect(() => {
        const fetchResults = async () => {
            const {mainProject, otherResults} = await organizeResults(state.maxResult);
    
            if (!mainProject || !otherResults) {
                return;
            }
    
            setMain(mainProject[0]);
            setOther(otherResults);
        };
    
        fetchResults();
    }, [])

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

            {
                !main || !other ? 

                <div className="resultsLoadingContainer">
                <Spinner/>
                </div> :

                <section className="resultsOptions">
            <ResultCard 
                onclick={() => navigate('/detail', {state: {home: main}})}
                type="big"
                nombre={main?.nombre}
                ubicacion={main?.ubicacion}
                tipoVivienda={main?.tipo_vivienda}
                precio={main?.precio}
                descripcion={main?.explicacion}
                imagen={main?.img_portada}
                />

            <section className="resultsOptionsSmall">
                {other?.map((o: any) => (
                    <ResultCard 
                        key={o.nombre}
                        type="small"
                        nombre={o.nombre}
                        ubicacion={o.ubicacion}
                        tipoVivienda={o.tipo_vivienda}
                        precio={o.precio}
                        imagen={o.img_portada}
                    />
                ))}
            </section>
            </section>

            }

            

            <div className="FormFooter">

            <Text variant='captionRegular'>Powered by Homi</Text>

            </div>
        </section>
        </>
    )
}

export default Results;