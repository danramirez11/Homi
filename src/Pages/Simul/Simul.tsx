
import Usesimul from '../../hooks/Usesimul';
import Options from './Components/Options/Optionsjm';
import './Simul.css';
import { Input } from '../../theme/styledcomponents';

const Simul = ()=> {
    const { handleinfo, Proyectos, ProyectoSim} = Usesimul();
    return (
        <div>
            <section className='upper_section'>
            <div className='Simul_title'>
                <div className='button_back'>

            <button></button>
            <p>back</p>
                </div>
            <h1>Valida tu proceso de compra</h1>
            </div>
            <p id='description'>Bienvenido al simulador de planes de pago. Ingresa los siguientes datos para ofrecerte una propuesta personalizada, pensada especialmente para ajustarse a tus necesidades y posibilidades. ¡Para nosotros lo mas importante es que obtengas el hogar de tus sueños!</p>

            </section>

            <section className='Sim_container'>
            <div className="Form">
            <h2 className='h2title' id='proyectoAsk'>Cual de nuestros proyectos crees que es el indicado para ti?</h2>
           <select id='proyecto' name='proyecto' aria-placeholder='Proyecto a seleccionar'>
                <option value="">Selecciona un proyecto</option>
                {Proyectos.map((proyecto: any, index: number) => (
                    <option key={index} value={proyecto.id}>
                        {proyecto.nombre}
                    </option>
                ))}
            </select>
                <h2 className='h2title'>¿Cuánto ganas al mes aproximadamente? (Incluye tu sueldo, rentas, trabajos extra, etc.)</h2>
                <Input size={'medium'} placeholder='Ej: $1´000.000,00' type="number" name="" id="Value-ingreso" />
                <h2 className='h2title'>¿Cuáles son tus gastos mensuales aproximados?</h2>
                <Input size={'medium'} placeholder='Ej: $1´000.000,00' type="number" name="" id="Value-gastos" />
                <h2 className='h2title'>¿Tienes cesantías u otros ahorros que puedas abonar de inmediato? ¿cuánto tienes ahorrado actualmente?</h2>
                <Input size={'medium'} placeholder='Ej: $1´000.000,00' type="number" name="" id="Value-cesantias" />
                <button onClick={handleinfo}>Simular</button>
                </div>
                <div className='Results_simulation'> 
                <h2 className='h2title'>Resultados de la simulación</h2>
                <p>El proyecto seleccionado es: {ProyectoSim.nombre}</p>
                <p>La cuota inicial es: {new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(ProyectoSim.cuotainicial)}</p>
                <p>Los meses hasta la entrega son: {ProyectoSim.mesesHastaEntrega}</p>
                <p>La cuota mensual es: {new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(ProyectoSim.cuotaMensual)}</p>
                <p>Los años hasta la entrega son: {ProyectoSim.añosHastaEntrega}</p>

                </div>
            </section>
            <section>
                <div>
                <p>¿Deseas conocer otras opciones?</p>
                <Options></Options>
                <div>
                    <div>
                        <div>
                            <p>Aplica al subsidio de vivienda (Mi Casa Ya u otros)</p>
                        </div>
                        <div>
                            <p>Elige un proyecto con una cuota inicial más baja</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Usa más recursos como cesantías, primas o ingresos familiares</p>
                        </div>
                        <div>
                            <p>Agenda una cita con un asesor de Jaramillo Mora</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        </div>
        
    );  
}

export default Simul;