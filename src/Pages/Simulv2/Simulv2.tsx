import CardSimul from "./Components/CardSimul/CardSimul";
import { Text } from "../../theme/styledcomponents";
import "./Simulv2.css"
import InputsSimul from "./Components/InputsSimul/InputsSimul";
const Simulv2 = ()=>{



    return (
    <>
        <section className="Simulcontainerv2">
        

        <div className="CardSimulContainer">
        <Text variant="sectionTitle">Elige cómo quieres hacer tu simulacion</Text>
        <CardSimul Cardbody="Calcula tu cuota según tus ingresos individuales o con tu grupo familiar" Cardtitle="Valor del inmueble"></CardSimul>
        <CardSimul Cardbody="Calcula tu cuota según el valor que puedas pagar mensualmente" Cardtitle="Valor a tu medida"></CardSimul>
        <CardSimul Cardbody="Calcula tu cuota según tus ingresos individuales o con tu grupo familiar" Cardtitle="Valor del inmueble"></CardSimul>
        <CardSimul Cardbody="Calcula tu cuota según tus ingresos individuales o con tu grupo familiar" Cardtitle="Valor del inmueble"></CardSimul>
        </div>
        <div className="formSimulv2">
        <div className="formHeader">
        
        </div>
            <Text variant="sectionTitle">Datos de tu simulación</Text>
            <InputsSimul label="¿Qué proyecto quieres simular?" id="proyecto"></InputsSimul>
            <InputsSimul label="¿Cuánto ganas al mes aproximadamente? (Incluye tu sueldo, rentas, trabajos extra, etc.)" id="Value-ingreso"></InputsSimul>                  
        </div> 
        </section>
    </>
    );
}

export default Simulv2;