import { FaCircleChevronLeft } from "react-icons/fa6"
import { Text } from "../../../../theme/styledcomponents"
import "./Headersimul.css"
const Headersimul  = ( )=> {
    return(
        <section className="headerSimul">
        <div>
            <img src="/assets/LogoJaramilloMora.webp" alt="" />
        </div>
        <div className="SimulArrow">
                <FaCircleChevronLeft size={32} color="rgb(255, 255, 255)"/>
                <Text variant='subtitle'> Atras </Text>
              </div>
              <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/public/proyectos//PremiumF(logo).webp" alt="" />
    </section>
    )
}

export default Headersimul;