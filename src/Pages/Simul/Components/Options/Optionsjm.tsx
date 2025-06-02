import './Optionscss.css'
import { Text } from '../../../../theme/styledcomponents'
const Options =() =>{
    return(
<div className='OptionsContainer'>
        <div className='flexing'>
            <div className="circlevector">
                <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//hand-coins.svg" alt=""  className='vectorO'/>
            </div>
             <Text variant='bodyRegular'>Aplica al subsidio de vivienda (Mi Casa Ya u otros)</Text>
        </div>
        <div className='flexing'>
            <div className="circlevector">
                <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//arrowdown.svg" alt="" className='vectorO' />
            </div>
              <Text variant='bodyRegular'>Elige un proyecto con una cuota inicial más baja</Text>
        </div>
        <div className='flexing'>
            <div className="circlevector">
                <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//wallet.svg" alt=""  className='vectorO'/>
            </div>
             <Text variant='bodyRegular'>Usa más recursos como cesantías, primas o ingresos familiares</Text>
        </div>
        <div className='flexing'>
            <div className="circlevector">
                <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/splash//contact.svg" alt=""  className='vectorO'/>
            </div>
             <Text variant='bodyRegular'>Agenda una cita con un asesor de Jaramillo Mora</Text>
        </div>
        
                      
                    
</div>
    )
}
export default Options