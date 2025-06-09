import CardSimul from "./Components/CardSimul/CardSimul";
import { Button, Text } from "../../theme/styledcomponents";
import "./Simulv2.css"
import InputsSimul from "./Components/InputsSimul/InputsSimul";
import { useState } from "react";
import proyect from "./data/data";
import Navjm from "../../components/Navjm/Nav";
import { useNavigate } from "react-router-dom";
import Disclaimer from "./Components/Disclaimer/Discalimer";
const Simulv2 = ()=>{

    // Get all input and select values from the form using DOM by id
        const proyectmodelinput = (document.getElementById("proyectModel") as HTMLSelectElement)?.value
        const initialMonthsinput = (document.getElementById("initialMonths") as HTMLSelectElement)?.value
        const yearsFinalinput = (document.getElementById("yearsFinal") as HTMLSelectElement)?.value
        const cesantiasinput = (document.getElementById("cesantias") as HTMLInputElement)?.value
        const incomeSinput = (document.getElementById("incomes") as HTMLInputElement)?.value
        const expensesinput = (document.getElementById("expenses") as HTMLInputElement)?.value
        const payvalueinput = (document.getElementById("payValue") as HTMLInputElement)?.value
     
const [cardSelected, setCardSelected] = useState(0)
const [proyectseleced, setproyectSelected] = useState(0)
 
const [simulationData, setSimulationData]  = useState({
    proyectModel: "",
    initialMonths: 0,
    yearsFinal: 0,
    cesantias: 0,
    incomes: 0,
    expenses: 0,
    payValue: 0,
    price: 0,
})
const navigate = useNavigate()

console.log("Datos del proyecto:", simulationData);

const [showErrorDisclaimer, setShowErrorDisclaimer] = useState(false);

const handleSubmit = () => {
    
    const parseNumber = (value: string | undefined | null) => {
        if (!value || value.trim() === "") return 0;
        const cleaned = value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'); 
        return Number(cleaned) || 0;
    };

    const budgetaviable = parseNumber(incomeSinput) - parseNumber(expensesinput);
    const Initialvalue = proyect.Types[proyectseleced].price * 0.2;
    const monthpaymentinitial = Initialvalue / parseNumber(initialMonthsinput);

    if (
        cardSelected !== 0 &&
        ((budgetaviable < monthpaymentinitial || Number(payvalueinput) < monthpaymentinitial)
        && !showErrorDisclaimer)
    ) {
        setShowErrorDisclaimer(true);
        return;
    }

    setShowErrorDisclaimer(false);
    const newData = {
        proyectModel: proyectmodelinput,
        initialMonths: Number(initialMonthsinput),
        yearsFinal: Number(yearsFinalinput),
        cesantias: Number(cesantiasinput),
        incomes: Number(incomeSinput),
        expenses: Number(expensesinput),
        payValue: Number(payvalueinput),
        price: proyect.Types[proyectseleced].price
    };
    setSimulationData(newData);
    console.log("Datos de la simulación:", newData);
    navigate("/simresults", {
        state: {
            proyectData: proyect,
            simulationData: newData
        }
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

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
            { proyect.Types[proyectseleced] && <Text variant="sectionTitle">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(proyect.Types[proyectseleced].price)}</Text> }
                <Text variant="bodyRegular">Plazo para pagar la cuota inicial</Text>
                <select name="initialMonths" id="initialMonths">

                {proyect.Types[proyectseleced] && (() => {
                    const today = new Date();
                    const entrega = new Date(proyect.fecha_entrega);
                    const months =
                        (entrega.getFullYear() - today.getFullYear()) * 12 +
                        (entrega.getMonth() - today.getMonth()) + 1;
                    return Array.from({ length: months > 0 ? months : 0 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} meses</option>
                    ));
                })()}
            </select>
                <InputsSimul type="number" label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>  

                <Text variant="bodyRegular">Plazo para pagar el valor restante</Text>                                
                <select name="yearsFinal" onChange={enablesubmit} id="yearsFinal">
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
           { proyect.Types[proyectseleced] && <Text variant="sectionTitle">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(proyect.Types[proyectseleced].price)}</Text> }
                <InputsSimul type="number" label="Ingresos mensuales" id="incomes"></InputsSimul>
                <InputsSimul type="number" label="Gastos mensuales" id="expenses"></InputsSimul>
                <Text variant="bodyRegular">Plazo para pagar la cuota inicial</Text>
                <select name="initialMonths" id="initialMonths">
                {proyect.Types[proyectseleced] && (() => {
                    const today = new Date();
                    const entrega = new Date(proyect.fecha_entrega);
                    const months =
                        (entrega.getFullYear() - today.getFullYear()) * 12 +
                        (entrega.getMonth() - today.getMonth()) + 1;
                    return Array.from({ length: months > 0 ? months : 0 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} meses</option>
                    ));
                })()}
            </select>
                <InputsSimul type="number" label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>
                <Text variant="bodyRegular">Plazo para pagar el valor restante</Text>                                
                <select name="yearsFinal" onChange={enablesubmit} id="yearsFinal">
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
            { proyect.Types[proyectseleced] && <Text variant="sectionTitle">{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(proyect.Types[proyectseleced].price)}</Text> }
            
            <InputsSimul type="number" label="¿Cuánto podrías pagar al mes?" id="payValue"></InputsSimul>
            <Text variant="bodyRegular">Plazo para pagar la cuota inicial</Text>
            <select name="initialMonths" id="initialMonths">
               {proyect.Types[proyectseleced] && (() => {
                    const today = new Date();
                    const entrega = new Date(proyect.fecha_entrega);
                    const months =
                        (entrega.getFullYear() - today.getFullYear()) * 12 +
                        (entrega.getMonth() - today.getMonth()) + 1;
                    return Array.from({ length: months > 0 ? months : 0 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>{i + 1} meses</option>
                    ));
                })()}
            </select>
            <InputsSimul type="number" label="¿Tienes ahorros o cesantías que quieras usar?" id="cesantias"></InputsSimul>                               
            <Text variant="bodyRegular">Plazo para pagar el valor restante</Text>                                
                <select name="yearsFinal" onChange={enablesubmit} id="yearsFinal">
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
    // Use the correct ButtonVariant type values, e.g., "light" or "dark"
const [buttonState, setButtonState] = useState<"light" | "dark">("light");
const [isButtonDisabled, setIsButtonDisabled] = useState(true);
const disclaimers = document.getElementById("disclaimer")
const enablesubmit = () => {
    const yearsFinal = (document.getElementById("yearsFinal") as HTMLSelectElement);
    if (yearsFinal && yearsFinal.value !== "none") {
        setButtonState("dark");
        setIsButtonDisabled(false);
        if (disclaimers) {
            disclaimers.style.display = "block";
        }
        
    } else {
        setButtonState("light");
        setIsButtonDisabled(true);
    }
};
return (
    <>
    <Navjm></Navjm>
        <section className="Simulcontainerv2">
        <div className="CardSimulContainer">
        <Text variant="sectionTitle">Elige cómo quieres hacer tu simulacion</Text>
        <CardSimul functionclicked={(e) => handleselected(e)} Cardbody="Mira cómo se ajusta este proyecto a tu presupuesto." Cardtitle="Valor del inmueble" cardId="0"></CardSimul>
        <CardSimul functionclicked={(e) => handleselected(e)} Cardbody="Calcula una cuota estimada según tus ingresos al mes." Cardtitle="Tus ingresos" cardId="1"></CardSimul>
        <CardSimul functionclicked={(e) => handleselected(e)} Cardbody="Simula un plan según lo que puedes pagar al mes." Cardtitle="Valor de la cuota" cardId="2"></CardSimul>
        </div>
        <div className="formSimulv2">
        <div className="upperimage">
            <div className="leftsidetop">
            <div className="infoContainer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px", verticalAlign: "middle" }}> <path d="M21 10.5c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10.5" r="3" />
            </svg>
            <Text variant='inputText'color="#FFFFFF">{proyect.ubicacion}</Text>
            </div>
            
            <Text variant='cardSubtitle' color="#FFFFFF">{proyect.nombre}</Text>
            </div>
            <div className="rightsidetop">
            <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(logo).webp" alt="" />    
            </div>
        </div>  
            <div className="inputscontainer" id="inputscontainer">

            <Text variant="sectionTitle">Datos de tu simulación</Text>
            {handleform()}   

           
            <Button variant={buttonState} size='medium' id="submitbutton" disabled={isButtonDisabled} onClick={handleSubmit}>Confirmar</Button>          
            <Disclaimer bgcolor="#E9F1FC" colorText="#0000F1" title="Esta es una simulación referencial" 
            description="Este simulador no representa una cotización real ni reemplaza un estudio de crédito. Las cifras mostradas son estimaciones y no incluyen tasas de interés anuales, gastos notariales, de registro ni otros costos asociados a un crédito hipotecario."></Disclaimer>
            {showErrorDisclaimer === true && (
                <Disclaimer bgcolor="#FDEDED" colorText="#B00020" title="Ups, por ahora tu capacidad de endeudamiento no alcanza para este proyecto." 
                description="Lo sentimos, no cumples con la capacidad de endeudamiento mínima para este proyecto.Pero no te preocupes, aún tienes opciones: Puedes sumar tus ingresos con los de tu grupo familiar, o también podemos ayudarte a encontrar un proyecto que se ajuste mejor a tu capacidad de pago."></Disclaimer>
            )}
            </div>
        </div>
        </section>
    </>
    );
}

export default Simulv2