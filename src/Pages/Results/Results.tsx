/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate } from "react-router-dom";
import { Text } from "../../theme/styledcomponents";
import ResultCard from "../../components/ResultCard/ResultCard";
import './Results.css';
import { organizeResults } from "../../utils/orgResults";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spiner";
import Navjm from "../../components/Navjm/Nav";
import BotonAtras from "../../components/BotonAtras/BotonAtras";

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
            // Select two random projects from otherResults
            const shuffled = otherResults.sort(() => 0.5 - Math.random());
            setOther(shuffled.slice(0, 2));
        };
    
        fetchResults();
    }, [])

    return (
        <>
        <section className="ResultSect">
            <Navjm/>
            <div className="ResultContent">
                <div className="ResultTitle">
                    <BotonAtras color="#2C2B2B" onClick={() => navigate(-1)} ></BotonAtras>
                    <div className="ResultTItleText">
                        <Text variant='display'>Los hogares perfectos para ti</Text>
                        <Text variant='subtitle'>Según tus respuestas, estos son los hogares más ideales para ti</Text>
                    </div>
                </div>
                    
                {!main || !other ? 
                <div className="resultsLoading">
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
                    />))}
                    </section>
                </section>}
            </div>
            <div className="OnboardSub">
                <Text variant="captionRegular" color="#2C2B2B">Power by Homi</Text>
            </div>
        </section>
        </>
    )
}

export default Results;