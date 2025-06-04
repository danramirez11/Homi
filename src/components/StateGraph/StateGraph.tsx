import { Text } from '../../theme/styledcomponents';
import './StateGraph.css'
import { FaCheck, FaCircle } from 'react-icons/fa6';

type StateGraphProps = {
    step: number;
}

const steps = [
    'Inicio de obra',
    'Cimentación',
    'Estructura',
    'Mampostería y fachadas',
    'Instalaciones internas',
    'Acabados',
    'Espacios comunes',
    'Entrega de unidades',
    'Escrituración'
]

const StateGraph = ({step}: StateGraphProps) => {
    return (
        <section className='state-graph'>
  <div className='graph-track' />
  <div className='graph-progress' style={{ width: `${(step / (steps.length - 1)) * 100}%` }} />
  {steps.map((s, i) => {
    const isActive = i < step;
    const isCurrent = i === step;

    return (
      <div key={i} className='state-step'>
        <div className={`step-circle ${isActive ? 'active' : ''} ${isCurrent ? 'current' : ''}`}>
          {isCurrent && <FaCircle size={8} color='#A6BD49' />}
          {isActive && <FaCheck size={16} color='white' />}
        </div>
        <Text variant='inputLabel'>{s}</Text>
      </div>
    );
  })}
</section>

    )
}

export default StateGraph;