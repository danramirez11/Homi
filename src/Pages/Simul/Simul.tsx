
import Usesimul from '../../hooks/Usesimul';
import Options from './Components/Options/Optionsjm';
import './Simul.css';
import { Input, Text } from '../../theme/styledcomponents';


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

                <Text variant='cardSubtitle'>Resultados de la simulación</Text>
                <div>
                <Text variant='captionRegular'>Total estimado a pagar</Text>
                <Text variant="display">{new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(ProyectoSim.cuotainicial)}</Text>
                <Text variant='captionRegular'>Equivalente al 20% del costo de la vivienda</Text>
                </div>
                <div>
                <div className='Results_AM'>

                <Text variant='bodyRegular'>Plazo de pago según el proyecto </Text>
                <Text variant='bodyRegular'>{ProyectoSim.mesesHastaEntrega}</Text>
                </div>
                <div className='Results_bottom'>
                    <div className='Results_AM'>
                        <Text variant='bodyRegular'>{ProyectoSim.añosHastaEntrega}  {ProyectoSim.añosHastaEntrega === 1 ? 'año' : 'años'}</Text>
                        <Text variant='bodyRegular'>Mensuales</Text>
                    </div>
                </div>
                <hr/>
                <div className='Results_AM'>

                <Text variant='bodyRegular'>Valor por cuota</Text>
                <Text variant='bodyRegular'>{new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(ProyectoSim.cuotaMensual)}</Text>
                </div>
                <Text variant='subtitle'>Sin interés</Text>
                </div>

                <a className='aoption' href="">¿Esta opción no es para ti?</a>
                </div>
            </section>
            
        </div>
        
    );  
}

export default Simul;