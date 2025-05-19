import { FaCircleChevronLeft } from "react-icons/fa6";
import BotonRespuesta from "../../components/respuestasBotton/respuestaboton";
import useForm from "../../hooks/useForm";
import { Button, Text } from "../../theme/styledcomponents";
import preguntasFormulario from "../../utils/Preguntas";
import './Form.css'

const Form = () => {
  const { goNextQuestion, selectOption, page, selectedOptions } = useForm();

  return (
    <section className="FormContainer">
      <div className="FormProgressBar">
        {
          preguntasFormulario.map((_, index) => (
            <div
              key={index}
              className={` ${index < page ? 'passed' : index === page ? 'current' : ''}`}
            />
          ))
        }
      </div>

      <div className="FormArrow">
        <FaCircleChevronLeft size={32} color="rgba(26, 25, 30, 1)"/>
        <Text variant='subtitle'>{page + 1} de {preguntasFormulario.length}</Text>
      </div>

      <Text variant='headlineBold'>{preguntasFormulario[page].pregunta}</Text>
      <Text variant="subtitle">{preguntasFormulario[page].descripcion}</Text>

      <div className="formAnswers">

      <section>
        {preguntasFormulario[page].opciones.map((o) => (
            <BotonRespuesta
              key={o.texto}
              opcion={o}
              onClick={() => selectOption(o)}
              isSelected={selectedOptions.some(op => op === o.texto)}
            />
        ))}
        </section>

      <Button variant='dark' size='large' onClick={() => goNextQuestion()}>{ page === 9 ? 'Finalizar' : 'Continuar'}</Button>

      </div>

      <Text variant='captionRegular'>Powered by Homi</Text>

    </section>
  );
};

export default Form;