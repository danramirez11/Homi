import { FaMapMarkerAlt } from "react-icons/fa";
import './Portada.css'
import { Text } from "../../theme/styledcomponents";
import BotonAtras from "../BotonAtras/BotonAtras";
import Usedetail from "../../hooks/usedetail";
import type { Proyecto } from "../../types/Proyectos";

const Portada = ({ Proyectodata }: { Proyectodata: Proyecto }) => {


return (
    <section
        id="portadaDetalle"
        style={{
            backgroundImage: `linear-gradient(to bottom,rgba(36, 36, 32, 0),rgba(36, 36, 32, 0.93)), url(${Proyectodata.img_portada})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
        }}
    >
        <BotonAtras />
        <div className='infoDetalle'>
            <div className='izquierdaInfo'>
                <div className='proyectoInfo'>
                    <div className='proyectoEtiqueta'>
                        <div className="proyectoUbicacion">
                            <FaMapMarkerAlt size={20} color="#EFEFEF" />
                            <Text variant="bodyRegular" color="#EFEFEF">{Proyectodata.ubicacion}</Text>
                        </div>
                        <div className="buttonProyecto">
                            <Text variant="bodyBold" color="white">
                                Vivienda {Proyectodata.tipo_vivienda}
                            </Text>
                        </div>
                    </div>
                    <Text variant="headlineRegular" color="#EFEFEF">{Proyectodata.nombre}</Text>
                    <Text variant="cardSubtitle" color="#EFEFEF">
                        Precios desde {Proyectodata.precio}
                    </Text>
                </div>
                <div className='proyectoLogo'>
                    <img src={Proyectodata.img_logo} alt={Proyectodata.nombre} />
                </div>
            </div>
            <div className='derechaInfo'>
                <div className='proyectoSlogan'>
                    <Text variant="sectionTitle" color="#666666">{Proyectodata.slogan_1}</Text>
                    <Text variant="bodyRegular" color="#666666">{Proyectodata.texto_intro}</Text>
                </div>
                <div className='proyectoDispo'>
                    <div className='proyectoFecha'>
                        <Text variant="sectionTitle" color="#666666">Fecha de entrega</Text>
                        <div className="proyectoFechaNum">
                            <Text variant="subtitle" color="#2C2B2B">{Proyectodata.fecha_entrega}</Text>
                            <Text variant="subtitle" color="#2C2B2B">del {Proyectodata.fecha_entrega}</Text>
                        </div>
                        <Text variant="captionItalic" color="#666666">
                            *Esta es una fecha aproximada y puede variar según el desarrollo del proyecto.
                        </Text>
                    </div>
                    <div className='proyectoDisponibilidad'>
                        <Text variant="sectionTitle" color="#666666">Apartamentos disponibles</Text>
                        <div className="proyectoDipsText">
                            <Text variant="subtitle" color="#2C2B2B">{Proyectodata.inventario_apt} Aptos</Text>
                            <Text variant="subtitle" color="#2C2B2B">{Proyectodata.inventario_torres} Torres</Text>
                        </div>
                        <Text variant="captionItalic" color="#666666">
                            *Cantidad estimada hasta el mes de mayo del 2025
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
};

export default Portada;