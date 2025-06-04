import CardSimul from "./Components/CardSimul/CardSimul";
import { Button, Text } from "../../theme/styledcomponents";
import "./Simulv2.css"
import InputsSimul from "./Components/InputsSimul/InputsSimul";
import { useState } from "react";
import proyect from "./data/data";
import Navjm from "../../components/Navjm/Nav";
const Simulv2 = ()=>{


const [cardSelected, setCardSelected] = useState(0)
const [proyectseleced, setproyectSelected] = useState(0)
const [simulationData, setSimulationData]  = useState({

})

const handlechange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = proyect.Types.findIndex(type => type.type === e.target.value);
    setproyectSelected(selectedType);
}
const handleselected = (event: React.MouseEvent<HTMLDivElement>) => {
    const id = Number(event.currentTarget.id);
    setCardSelected(id);
};
    const handleform = ()=>{
        if(cardSelected === 0){
            return(
                <>
                <Text variant="bodyRegular">Modelo de vivienda</Text>
                <select name="Tipo de inmueble" id="proyectModel" onChange={handlechange}>
                    <option value="none">Selecciona el tipo de proyecto</option>
                {proyect.Types.map ((type, index) => (
                    <option key={index} value={type.type}>{type.type}</option>
                ))}
                </select>
            <Text variant="bodyRegular">Valor del inmueble</Text>
            { proyect.Types[proyectseleced] && <Text variant="sectionTitle">{proyect.Types[proyectseleced].price}</Text> }
                <Text variant="bodyRegular">Plazo para pagar la cuota inicial</Text>
                <select name="initialMonths" id="initialMonths">

                {proyect.Types[proyectseleced] && (() => {
                    const today = new Date();
                    const entrega = new Date(proyect.fecha_entrega);
                    const months =
                        (entrega.getFullYear() - today.getFullYear()) * 12 +
                        (entrega.getMonth() - today.getMonth());
                    return Array.from({ length: months > 0 ? months : 0 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} meses</option>
                    ));
                })()}
            </select>
                <InputsSimul type="number" label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>  

                <Text variant="bodyRegular">Plazo para pagar el valor restante</Text>                                
                <select name="yearsFinal" id="yearsFinal">
                {(() => {
                    const minYears = 5
                    const maxYears = 20
                    return Array.from({ length: maxYears - minYears + 1 }, (_, i) => {
                        const year = minYears + i;
                        return <option key={year} value={year}>{year} años</option>;
                    });
                })()}
                </select>
               </>
            )
        } else if(cardSelected === 1){
            return(<>
            <Text variant="bodyRegular">Modelo de vivienda</Text>
                <select name="Tipo de inmueble" id="proyectModel" onChange={handlechange}>
                    <option value="none">Selecciona el tipo de proyecto</option>
                {proyect.Types.map ((type, index) => (
                    <option key={index} value={type.type}>{type.type}</option>
                ))}
                </select>
            <Text variant="bodyRegular">Valor del inmueble</Text>
           { proyect.Types[proyectseleced] && <Text variant="sectionTitle">{proyect.Types[proyectseleced].price}</Text> }
                <InputsSimul type="number" label="Ingresos mensuales" id="incomes"></InputsSimul>
                <InputsSimul type="number" label="Gastos mensuales" id="expenses"></InputsSimul>
                <Text variant="bodyRegular">Plazo para pagar la cuota inicial</Text>
                <select name="initialMonths" id="initialMonths">
                {proyect.Types[proyectseleced] && (() => {
                    const today = new Date();
                    const entrega = new Date(proyect.fecha_entrega);
                    const months =
                        (entrega.getFullYear() - today.getFullYear()) * 12 +
                        (entrega.getMonth() - today.getMonth());
                    return Array.from({ length: months > 0 ? months : 0 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} meses</option>
                    ));
                })()}
            </select>
                <InputsSimul type="number" label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>
                <Text variant="bodyRegular">Plazo para pagar el valor restante</Text>                                
                <select name="yearsFinal" id="yearsFinal">
                {(() => {
                    const minYears = 5
                    const maxYears = 20
                    return Array.from({ length: maxYears - minYears + 1 }, (_, i) => {
                        const year = minYears + i;
                        return <option key={year} value={year}>{year} años</option>;
                    });
                })()}
                </select>
              
            </>)
        } else if(cardSelected === 2){
            return(<>
            <Text variant="bodyRegular">Modelo de vivienda</Text>
            <select name="Tipo de inmueble" id="proyectModel" onChange={handlechange}>
                <option value="none">Selecciona el tipo de proyecto</option>
                {proyect.Types.map ((type, index) => (
                    <option key={index} value={type.type}>{type.type}</option>
                ))}
                </select>
            <Text variant="bodyRegular">Valor del inmueble</Text>
            { proyect.Types[proyectseleced] && <Text variant="sectionTitle">{proyect.Types[proyectseleced].price}</Text> }
            
            <InputsSimul type="number" label="¿Cuánto podrías pagar al mes?" id="payValue"></InputsSimul>
            <Text variant="bodyRegular">Plazo para pagar la cuota inicial</Text>
            <select name="initialMonths" id="initialMonths">
                {proyect.Types[proyectseleced] && (() => {
                    const today = new Date();
                    const entrega = new Date(proyect.fecha_entrega);
                    const months =
                        (entrega.getFullYear() - today.getFullYear()) * 12 +
                        (entrega.getMonth() - today.getMonth());
                    return Array.from({ length: months > 0 ? months : 0 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} meses</option>
                    ));
                })()}
            </select>
            <InputsSimul type="number" label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>                               
            <Text variant="bodyRegular">Plazo para pagar el valor restante</Text>                                
                <select name="yearsFinal" id="yearsFinal">
                {(() => {
                    const minYears = 5
                    const maxYears = 20
                    return Array.from({ length: maxYears - minYears + 1 }, (_, i) => {
                        const year = minYears + i;
                        return <option key={year} value={year}>{year} años</option>;
                    });
                })()}
                </select>
            </>)
        }
    }

    return (
    <>
    <Navjm></Navjm>
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
            <Button variant='light' disabled={true} size='large'>Submit</Button>
            </div>
        </div> 
        </section>
    </>
    );
}

export default Simulv2;