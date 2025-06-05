import Navjm from '../../components/Navjm/Nav';
import useForm from "../../hooks/useForm";
import preguntasFormulario from "../../utils/Preguntas";
import { FaCircleChevronLeft } from "react-icons/fa6";
import { Button, Text } from "../../theme/styledcomponents";
import BotonRespuesta from "../../components/respuestasBotton/respuestaboton";
import './Form.css';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const { goNextQuestion, goPreviousQuestion, selectOption, page, selectedOptions } = useForm();
    const navigate = useNavigate();

    return (
        <section className="FormSect">
            <Navjm onLoginClick={() => navigate('/login')}/>
            <div className='FormQuestions'>
                <div className="FormProgress">
                    {preguntasFormulario.map((_, index) => (
                        <div key={index} className={` ${index < page ? 'passed' : index === page ? 'current' : ''}`} />))
                    }
                </div>

                <div
                    className="FormBack"
                    onClick={page > 0 ? goPreviousQuestion : undefined}
                    style={{ cursor: page > 0 ? 'pointer' : 'default' }}
                >
                    <FaCircleChevronLeft
                        size={32}
                        color={page > 0 ? "#2C2B2B" : "#D4D3D3"}
                        className='BotonBackForm'
                    />
                    <Text variant='subtitle'>{page + 1} de {preguntasFormulario.length}</Text>
                </div>

                <Text variant='headlineBold'>{preguntasFormulario[page].pregunta}</Text>
                <Text variant="subtitle">{preguntasFormulario[page].descripcion}</Text>

                <div className="FormAnswer">
                    <section className='FormInputs'>
                        {preguntasFormulario[page].opciones.map((o) => (
                            <BotonRespuesta
                                key={o.texto}
                                opcion={o}
                                onClick={() => selectOption(o)}
                                isSelected={selectedOptions.some(op => op === o.texto)}
                            />
                        ))}
                    </section>

                    <Button variant='dark' size='large' onClick={() => goNextQuestion()}
                        disabled={selectedOptions.length === 0}
                    >
                        {page === 9 ? 'Finalizar' : 'Continuar'}
                    </Button>

                </div>
            </div>
            <div className="OnboardSub">
                <Text variant="captionRegular" color="#2C2B2B">Power by Homi</Text>
            </div>
        </section>
    );
};

export default Form;