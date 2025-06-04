import CardSimul from "./Components/CardSimul/CardSimul";
import { Button, Text } from "../../theme/styledcomponents";
import "./Simulv2.css"
import InputsSimul from "./Components/InputsSimul/InputsSimul";
import { useState } from "react";
const Simulv2 = ()=>{

const [cardSelected, setCardSelected] = useState(0)

const handleselected = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = Number(event.currentTarget.id);
    setCardSelected(id);
    
};
    const handleform = ()=>{
        if(cardSelected === 0){
            return(
                <>
                <InputsSimul label="Modelo de vivienda" id="proyectType"></InputsSimul>
                <InputsSimul label="Valor del inmueble" id="price"></InputsSimul>
                <InputsSimul label="Plazo para pagar la cuota inicial" id="monthsInitial"></InputsSimul>
                <InputsSimul label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>                                <InputsSimul label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>
                <InputsSimul label="Plazo para pagar el valor restante" id="monthsFinal"></InputsSimul>
               </>
            )
        } else if(cardSelected === 1){
            return(<>
                <InputsSimul label="Modelo de vivienda" id="proyectType"></InputsSimul>
                <InputsSimul label="Valor del inmueble" id="price"></InputsSimul>
                <InputsSimul label="Ingresos mensuales" id="incomes"></InputsSimul>
                <InputsSimul label="Gastos mensuales" id="expenses"></InputsSimul>
                <InputsSimul label="Plazo para pagar la cuota inicial" id="monthsInitial"></InputsSimul>
                <InputsSimul label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>                                <InputsSimul label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>
                <InputsSimul label="Plazo para pagar el valor restante" id="monthsFinal"></InputsSimul>
              
            </>)
        } else if(cardSelected === 2){
            return(<>
            <InputsSimul label="Modelo de vivienda" id="proyectType"></InputsSimul>
            <InputsSimul label="Valor del inmueble" id="price"></InputsSimul>
            <InputsSimul label="¿Cuánto podrías pagar al mes?" id="payValue"></InputsSimul>
            <InputsSimul label="Plazo para pagar la cuota inicial" id="monthsInitial"></InputsSimul>
            <InputsSimul label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>                                <InputsSimul label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>
            <InputsSimul label="Plazo para pagar el valor restante" id="monthsFinal"></InputsSimul>
            </>)
        }
    }

    return (
    <>
        <section className="Simulcontainerv2">
        <div className="CardSimulContainer">
        <Text variant="sectionTitle">Elige cómo quieres hacer tu simulacion</Text>
        <CardSimul functionclicked={(e) => handleselected(e)} Cardbody="Calcula tu cuota según tus ingresos individuales o con tu grupo familiar" Cardtitle="Valor del inmueble" cardId="0"></CardSimul>
        <CardSimul functionclicked={(e) => handleselected(e)} Cardbody="Calcula tu cuota según el valor que puedas pagar mensualmente" Cardtitle="Valor a tu medida" cardId="1"></CardSimul>
        <CardSimul functionclicked={(e) => handleselected(e)} Cardbody="Calcula tu cuota según tus ingresos individuales o con tu grupo familiar" Cardtitle="Valor del inmueble" cardId="2"></CardSimul>
        </div>
        <div className="formSimulv2">
        <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(portada).webp" alt="" />
            <div className="inputscontainer">

            <Text variant="sectionTitle">Datos de tu simulación</Text>
            {handleform()}   
            <Button variant='light' size='large'>Submit</Button>
            </div>
        </div> 
        </section>
    </>
    );
}

export default Simulv2;