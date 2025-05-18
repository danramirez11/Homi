import BotonRespuesta from "../../components/respuestasBotton/respuestaboton";
import useForm from "../../hooks/useForm";
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
        <button>ñaos</button>
        <p>{page + 1} de {preguntasFormulario.length + 1}</p>
      </div>

      <h2>{preguntasFormulario[page].pregunta}</h2>
      <p>{preguntasFormulario[page].descripcion}</p>

      <div>
        {preguntasFormulario[page].opciones.map((o) => (
            <div key={o.texto}>
            <BotonRespuesta
              opcion={o}
              onClick={() => selectOption(o)}
              isSelected={selectedOptions.some(op => op === o.texto)}
            />
            </div>
        ))}
        </div>

      <button onClick={() => goNextQuestion()}>{ page === 9 ? 'Finalizar' : 'Continuar'}</button>

    </section>
  );
};

export default Form;