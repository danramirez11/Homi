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
        <p>{page + 1} de {preguntasFormulario.length}</p>
      </div>

      <h2>{preguntasFormulario[page].pregunta}</h2>
      <p>{preguntasFormulario[page].descripcion}</p>

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

      <button onClick={() => goNextQuestion()}>{ page === 9 ? 'Finalizar' : 'Continuar'}</button>

      </div>

      <p>Powered by Homi</p>

      <p>esperando los estilos globales pa poner las tipografías y botones jeje</p>

    </section>
  );
};

export default Form;