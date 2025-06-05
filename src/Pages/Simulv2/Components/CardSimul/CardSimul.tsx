import { Text } from "../../../../theme/styledcomponents"
import "./CardSimul.css"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CardSimul = ({Cardtitle, Cardbody, functionclicked, cardId}:{Cardtitle:string, Cardbody:string,functionclicked: (e: any) => void,cardId: string})=>{
    return(
        <>
        <div className="CardSimul" onClick={(e) => functionclicked(e)} id={cardId}>
        <img src="src\assets\wallet.svg" alt="" />
        <Text variant='cardSubtitle'>{Cardtitle}</Text>
        <Text variant='captionRegular'>{Cardbody}</Text>
        </div>
        </>
    )
}

export default CardSimul;