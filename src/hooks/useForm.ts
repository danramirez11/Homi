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
};

const useForm = () => {
    const [results, setResults] = useState<Results>(initialResults);
    const [page, setPage] = useState<number>(0);

    // Nuevo estado para almacenar opciones seleccionadas por pregunta
    const [selectedOptionsPorPregunta, setSelectedOptionsPorPregunta] = useState<string[][]>(
        Array(preguntasFormulario.length).fill([])
    );

    // Opciones seleccionadas para la pregunta actual
    const selectedOptions = selectedOptionsPorPregunta[page] || [];

    const navigate = useNavigate();

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
                });
            }
        });

        if (page === preguntasFormulario.length - 1) {
            const maxResult = Object.entries(results).reduce(
                (max, [key, value]) =>
                    value > max.value ? { key, value } : max,
                {
                    key: Object.keys(results)[0],
                    value: results[Object.keys(results)[0] as keyof Results]
                }
            ).key;

            navigate("/results", { state: { maxResult } });
        } else {
            setPage((prev) => prev + 1);
        }
    };

    const goPreviousQuestion = () => {
        if (page > 0) {
            setPage((prev) => prev - 1);
        }
    };

    const selectOption = (option: Opcion) => {
        setSelectedOptionsPorPregunta((prev) => {
            const currentSelections = prev[page] || [];
            let updatedSelections: string[];

            if (currentSelections.includes(option.texto)) {
                updatedSelections = currentSelections.filter((o) => o !== option.texto);
            } else if (preguntasFormulario[page].esMultiple) {
                updatedSelections = [...currentSelections, option.texto];
            } else {
                updatedSelections = [option.texto];
            }

            const updated = [...prev];
            updated[page] = updatedSelections;
            return updated;
        });
    };

    return {
        goNextQuestion,
        goPreviousQuestion,
        selectOption,
        page,
        selectedOptions
    };
};

export default useForm;