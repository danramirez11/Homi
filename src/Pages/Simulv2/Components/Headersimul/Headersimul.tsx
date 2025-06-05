import { FaCircleChevronLeft } from "react-icons/fa6"
import { Button, Text } from "../../../../theme/styledcomponents"
import "./Headersimul.css"
const Headersimul  = ( )=> {
    return(
        <section className="headerSimul">
        <div className="simulleftheader">
        <div>
            <img src="/assets/Logo2JaramilloMora.webp" alt="" />
        </div>
        <div className="SimulArrow">
                <FaCircleChevronLeft size={32} color="rgb(0, 0, 0)"/>
                <Text variant='subtitle'> Atras </Text>
              </div>
        </div>
        <div className="simulrigthheader">
        <Text variant='bodyRegular'>¿Necesitas ayuda?</Text>
        <Button variant='dark' size='large'>Contacta un asesor</Button>
        </div>
    </section>
    )
}

export default Headersimul;