import { Text } from "../../../theme/styledcomponents"
import Disclaimer from "../../Simulv2/Components/Disclaimer/Discalimer";
import'./CardResult.css'
const ResultCard = ({leftcolor, value, months, years, fee,percent} : {leftcolor:string,value:string, months:number, years:number, fee:string, percent: string}) =>{
    return(
        <>
            <div
                className="resultcardleft"
                style={{ borderLeft: `10px solid ${leftcolor}` }}
            >
                    <Text variant='bodyRegular'>Resultado de tu simulación - Cuota Inicial</Text>
                    <div className="topinfo1">
                    <Text variant='captionRegular'>Total estimado a pagar</Text>
                    <Text variant='cardSubtitle'>{/*aun tengo que ver estopendejo*/}{value}</Text>
                    <Text variant='captionRegular'>Equivalente al {percent} del costo de la vivienda</Text>
                    </div>
                    <div className="topinfo1">
                        <div className="infobottomcontainer">
                        <Text variant='captionRegular'>plazo de pago segun el proyecto</Text>
                        <Text variant='captionRegular'>{months} cuotas</Text>
                        </div>
                        <div className="infobottomcontainer">
                        <Text variant='captionRegular'>{years} años</Text>
                        <Text variant='captionRegular'>Mensuales</Text>
                        </div>
                        <hr/>
                        <div className="topinfo1">
                            <div className="infobottomcontainer">
                                <Text variant='captionRegular'>Valor por cuota</Text>
                                <Text variant='captionBold'>{fee}</Text>
                            </div>
                            <Text variant='captionRegular'>Sin interes</Text>
                        </div>
                    </div>
                    <Disclaimer bgcolor="#E9F1FC" color="#102491" title="Proyección estimada" 
            description="Este simulador no representa una cotización real ni reemplaza un estudio de crédito. Las cifras mostradas son estimaciones y no incluyen tasas de interés anuales, gastos notariales, de registro ni otros costos asociados a un crédito hipotecario. Para conocer el valor real de las cuotas y condiciones del financiamiento, debes hacer el trámite directamente con una entidad financiera."></Disclaimer>
                    </div>
        
        </>
    )
}

export default ResultCard;