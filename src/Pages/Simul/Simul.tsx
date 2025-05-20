/* eslint-disable @typescript-eslint/no-explicit-any */

import Usesimul from '../../hooks/Usesimul';
import './Simul.css';
import { Button, Input, Text } from '../../theme/styledcomponents';
import { useNavigate } from 'react-router-dom';
import Options from '../../Pages/Simul/Components/Options/Optionsjm'
import Navjm from '../../components/Navjm/Nav';


const Simul = ()=> {
    const { Proyectos, ProyectoSim} = Usesimul();
    const navigate = useNavigate()
    return (
        <div>
            <Navjm onLoginClick={() =>{}}></Navjm>
            <section className='upper_section'>
            <div className='Simul_title'>
                <div className='button_back'>

            <button onClick={()=>{navigate("/form",)}}></button>
            <p>back</p>
                </div>
            <Text variant='display'>Valida tu proceso de compra</Text>
            </div>
            <Text variant='display' color='#A6BD49' className='proyecttitle' id='title'>{ProyectoSim.nombre}</Text>
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
                <Button variant='dark' size='medium' >Simular</Button>
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
            <section className='Fathercontainer_options'>
                <div className='Options_Container'>
                <p>¿Deseas conocer otras opciones?</p>
                <Options></Options>
            </div>

        </section>
        </div>
        
    );  
}

export default Simul;