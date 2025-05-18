import { useState } from "react";
import type { Opcion } from "../components/types";
import preguntasFormulario from "../utils/Preguntas";
import { ht } from "../types/homes";
import { useNavigate } from "react-router-dom";


interface Results {
    [ht.COMPACTO]: number;
    [ht.BASICO]: number;
    [ht.FUNCIONAL]: number;
    [ht.ESPACIOSO]: number;
    [ht.PREMIUM]: number;
}

const initialResults: Results = {
    [ht.COMPACTO]: 0,
    [ht.BASICO]: 0,
    [ht.FUNCIONAL]: 0,
    [ht.ESPACIOSO]: 0,
    [ht.PREMIUM]: 0
}

const useForm = () => {
    const [results, setResults] = useState<Results>(initialResults);
    const [page, setPage] = useState<number>(0);
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const navigate = useNavigate();

    console.log("Selected Options: ", selectedOptions);
    console.log("Results: ", results);

    const goNextQuestion = () => {
        const question = preguntasFormulario[page];

        selectedOptions.forEach((option) => {
            const selectedOption = question.opciones.find((o) => o.texto === option);
            if (selectedOption) {
                selectedOption.viviendas.forEach((vivienda) => {
                    setResults((prev) => ({
                        ...prev,
                        [vivienda]: prev[vivienda] + 1
                    }));
                })
            }
        })
        
        if (page === 9) {
            const maxResult = Object.entries(results).reduce(
                (max, [key, value]) => value > max.value ? { key, value } : max,
                { key: Object.keys(results)[0], value: results[Object.keys(results)[0] as keyof Results] }
            ).key;

            navigate("/results", { state: { maxResult } });
        }

        setPage((prev) => prev + 1);
    }

    const selectOption = (option: Opcion) => {
        if (selectedOptions.includes(option.texto)) {
            setSelectedOptions((prev) => prev.filter((o) => o !== option.texto));
        } else if (preguntasFormulario[page].esMultiple) {
            setSelectedOptions((prev) => [...prev, option.texto]);
        } else {
            setSelectedOptions([option.texto]);
        }
    }


    return { goNextQuestion, selectOption, page, selectedOptions}
}

export default useForm;