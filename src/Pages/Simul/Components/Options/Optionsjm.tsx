import './Optionscss.css'
import { Text } from '../../../../theme/styledcomponents'
const Options =() =>{
    return(
<div className='OptionsContainer'>
        <div className='flexing'>
            <div className="circlevector">
                <img src="src\assets\hand-coins.svg" alt="" />
            </div>
             <Text variant='bodyRegular'>Aplica al subsidio de vivienda (Mi Casa Ya u otros)</Text>
        </div>
        <div className='flexing'>
            <div className="circlevector">
                <img src="src\assets\arrowdown.svg" alt="" />
            </div>
              <Text variant='bodyRegular'>Elige un proyecto con una cuota inicial más baja</Text>
        </div>
        <div className='flexing'>
            <div className="circlevector">
                <img src="src\assets\wallet.svg" alt="" />
            </div>
             <Text variant='bodyRegular'>Usa más recursos como cesantías, primas o ingresos familiares</Text>
        </div>
        <div className='flexing'>
            <div className="circlevector">
                <img src="src\assets\contatc.svg" alt="" />
            </div>
             <Text variant='bodyRegular'>Agenda una cita con un asesor de Jaramillo Mora</Text>
        </div>
        
                      
                    
</div>
    )
}
export default Options