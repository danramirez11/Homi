import { useLocation } from "react-router-dom"
import { Button, Text } from "../../theme/styledcomponents"
import './Simresults.css'
import { BsCircleFill } from "react-icons/bs"
import Navjm from "../../components/Navjm/Nav"
import ResultCard from "./Components/CardResult"
import { useEffect, useState } from "react"
interface SimulData {
    budget: number;
    proyectModel: string;
    price: number;
    initialPayment: number;
    remainingPayment: number;
    monthsUntilDelivery: number;
    yearsUntilDelivery: number;
    monthlyPaymentInit: number;
    monthlyPaymentRemaining: number;
    monthsRemaining: number;
}
const Simresults = () =>{
    const location = useLocation()
    console.log(location.state);
    
    const proyectdata = location.state.proyectData
    const simuldata = location.state.simulationData
    
    const [resultssimuldata, setResultssimuldata] = useState<SimulData>({
        budget: 0,
        proyectModel: "",
        price: 0,
        initialPayment: 0,
        remainingPayment: 0,
        monthsUntilDelivery: 0,
        yearsUntilDelivery: 0,
        monthlyPaymentInit: 0,
        monthlyPaymentRemaining: 0,
        monthsRemaining: 0
    });

    useEffect(() =>{
        handlesimulation();
        console.log(resultssimuldata);
        
    }, [])
    const handlesimulation = () => {
        const budgetaviable = simuldata.incomes - simuldata.expenses;
        const Initialvalue = simuldata.price * 0.2;
        const Remainingvalue = simuldata.price * 0.8;
        let monthsUntilDelivery: number;
        let yearsUntilDelivery: number;

        if (simuldata.initialMonths && simuldata.initialMonths > 0) {
            monthsUntilDelivery = simuldata.initialMonths;
            yearsUntilDelivery = Math.floor(monthsUntilDelivery / 12);
        } else {
            const deliveryDate = new Date(proyectdata.fecha_entrega); // string 2027-02-01
            const currentDate = new Date();
            const timeDifference = deliveryDate.getTime() - currentDate.getTime();
            monthsUntilDelivery = Math.ceil(timeDifference / (1000 * 3600 * 24 * 30));
            yearsUntilDelivery = Math.floor(monthsUntilDelivery / 12);
        }

        const monthlyPaymentinit = Initialvalue / monthsUntilDelivery;

        const yearsFinal = simuldata.yearsFinal;
        const monthsRemaining = yearsFinal * 12;
        const monthlyPaymentRemaining = monthsRemaining > 0 ? Remainingvalue / monthsRemaining : 0;

        const simulationResult = {
            budget: budgetaviable,
            proyectModel: proyectdata.nombre,
            price: simuldata.price,
            initialPayment: Initialvalue,
            remainingPayment: Remainingvalue,
            monthsUntilDelivery: monthsUntilDelivery,
            yearsUntilDelivery: yearsUntilDelivery,
            monthlyPaymentInit: monthlyPaymentinit,
            monthlyPaymentRemaining: monthlyPaymentRemaining,
            monthsRemaining: monthsRemaining
        };
        console.log(simulationResult);
        setResultssimuldata(simulationResult)
    }
    

    return ( 
        <>
        <Navjm></Navjm>
        <section className="simresultscontainer">
        <Text variant='bodyRegular'>Resultados de tu simulacion</Text>
        <div className="Resumecontainer">
            <div className="rightsideresults">
            <Text variant='captionRegular'>Valor Total del Proyecto<span> - {simuldata.proyectModel}</span></Text>
            <Text variant='cardSubtitle'>{new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(simuldata.price)}</Text>
            <input type="range" min={0} max={100} value={20} readOnly className="slider" style={{ '--val': 20 } as React.CSSProperties}/>
            <div className="infocontainer">
            <BsCircleFill className="circleicon" style={{ color: "ffb39b" }} />
            <Text variant='captionRegular'><b>Cuota Inical</b> Equivalente al 20% del costo de la vivienda</Text>
            </div>
            <div className="infocontainer">
            <BsCircleFill className="circleicon" style={{ color: "fcf4c5" }} />
            <Text variant='captionRegular'><b>Cuota Restante</b> Equivalente al 80% de la vivienda</Text>
            </div>
            </div>
            <div className="leftsideresults">
                <div className="leftimgresults">
                            <div className="infoContainer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px", verticalAlign: "middle" }}> <path d="M21 10.5c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0z" />
                                <circle cx="12" cy="10.5" r="3" />
                            </svg>
                            <Text variant='inputText'color="#FFFFFF">{proyectdata.ubicacion}</Text>
                            </div>
                            
                            <Text variant='subtitle' color="#FFFFFF">{proyectdata.nombre}</Text>
                            </div>
                            <div className="rightsidetop">
                            <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(logo).webp" alt=""  height={107}/>    
                            </div>
            </div>
        </div>
        <Text variant='bodyRegular'>Valor de tus cuotas</Text>
        <section className="reulstcardcontainer">
        <ResultCard percent="20%" leftcolor="#ffb39b" value={new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(resultssimuldata.initialPayment)} months={resultssimuldata.monthsUntilDelivery} years={resultssimuldata.yearsUntilDelivery} fee={new Intl.NumberFormat('es-CO', {style: 'currency', currency: 'COP'}).format(resultssimuldata.monthlyPaymentInit)}  ></ResultCard>
        <ResultCard
        percent="80%"
          leftcolor="#fcf4c5"
          value={new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(resultssimuldata.remainingPayment)}
          months={resultssimuldata.monthsRemaining}
          years={resultssimuldata.monthsRemaining / 12}
          fee={new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(resultssimuldata.monthlyPaymentRemaining)}
        />

        </section>
        <div className="asesorcontainer">
            <img src="\src\assets\redchat.svg" alt=""  height={80} width={80}/>
            <Text variant='captionBold'>¿Te gustaría hablar con un asesor?</Text>
            <Text variant='bodyRegular'>Un asesor puede ayudarte a entender mejor tu plan de pago, explicarte los tipos de crédito disponibles según tu perfil, y acompañarte para que tomes una decisión segura y personalizada.</Text>
            <Button variant='dark' size='large'>Contactar un asesor</Button>
        </div>
        </section>
        </>
    )
}
export default Simresults
