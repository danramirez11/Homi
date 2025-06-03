import { Text } from "../../../../theme/styledcomponents"
import "./CardSimul.css"
const CardSimul = ({Cardtitle, Cardbody}:{Cardtitle:string, Cardbody:string})=>{
    return(
        <>
        <div className="CardSimul">
        <img src="src\assets\wallet.svg" alt="" />
        <Text variant='cardSubtitle'>{Cardtitle}</Text>
        <Text variant='captionRegular'>{Cardbody}</Text>
        </div>
        </>
    )
}

export default CardSimul;