import { FaMapMarkerAlt } from "react-icons/fa";
import './Portada.css'
import { Text } from "../../theme/styledcomponents";
import BotonAtras from "../BotonAtras/BotonAtras";

const Portada: React.FC = () => {

  return (
    <section 
    id="portadaDetalle"
    style={{
        backgroundImage: 'linear-gradient(to bottom,rgba(36, 36, 32, 0),rgba(36, 36, 32, 0.93)), url("https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/NoVIS(portada).jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAwNzA2YzcwLWMzOTktNDUwZi04MWM4LWJhYzVmNjhhN2NhNCJ9.eyJ1cmwiOiJwcm95ZWN0b3MvTm9WSVMocG9ydGFkYSkuanBnIiwiaWF0IjoxNzQ3NjEyMDIyLCJleHAiOjE3NzkxNDgwMjJ9.-GpWv3wGIedSz3sV9GUy2PNBEpHuczeBtAsZOunBvNM")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',}}
    >
        <BotonAtras></BotonAtras>
        <div className='infoDetalle'>
            <div className='izquierdaInfo'>
                <div className='proyectoInfo'>
                    <div className='proyectoEtiqueta'>
                        <div className="proyectoUbicacion">
                            <FaMapMarkerAlt size={20} color="#EFEFEF"/>
                            <Text variant="bodyRegular" color="#EFEFEF">Pance, Cali</Text>
                        </div>
                        <div className="buttonProyecto"><Text variant="bodyBold" color="white">Vivienda No VIS</Text></div>
                    </div>
                    <Text variant="headlineRegular" color="#EFEFEF">Origen | Apartamentos Campestres</Text>
                    <Text variant="subtitle" color="#EFEFEF">Precios desde {}</Text>
                </div>
                <div className='proyectoLogo'>
                    <img src="https://ahtgnfecribejsxwcqqv.supabase.co/storage/v1/object/sign/proyectos/NoVIS(logo).png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5XzAwNzA2YzcwLWMzOTktNDUwZi04MWM4LWJhYzVmNjhhN2NhNCJ9.eyJ1cmwiOiJwcm95ZWN0b3MvTm9WSVMobG9nbykucG5nIiwiaWF0IjoxNzQ3NTkwMjk1LCJleHAiOjE3NzkxMjYyOTV9.U1FZfiWXmXumBlKI7yydzXFKZWlarViqWB1Do3xGJJ0" alt="Nombre del proyecto" />
                </div>
            </div>
            <div className='derechaInfo'>
                <div className='proyectoSlogan'>
                    <Text variant="sectionTitle" color="#666666">Bienvenidos al lugar donde lo natural se convierte en hogar</Text>
                    <Text variant="bodyRegular" color="#666666">En medio de un entorno natural que invita a la tranquilidad, Origen se alza como un refugio exclusivo para aquellos que desean reconectar con la esencia de lo natural, el lugar donde todo comienza.</Text>
                </div>
                <div className='proyectoDispo'>
                    <div className='proyectoFecha'>
                        <Text variant="sectionTitle" color="#666666">Fecha de entrega</Text>
                        <div className="proyectoFechaNum">
                           <Text variant="subtitle" color="#2C2B2B">Marzo</Text>
                            <Text variant="subtitle" color="#2C2B2B">del {2027}</Text> 
                        </div>
                        
                        <Text variant="captionItalic" color="#666666">*Esta es una fecha aproximada y puede variar según el desarrollo del proyecto.</Text>
                    </div>
                    <div className='proyectoDisponibilidad'>
                        <Text variant="sectionTitle" color="#666666">Apartamentos disponibles</Text>
                        <div className="proyectoDipsText">
                            <Text variant="subtitle" color="#2C2B2B">{20} Aptos</Text>
                            <Text variant="subtitle" color="#2C2B2B">{20} Torres</Text>
                        </div>
                        <Text variant="captionItalic" color="#666666">*Cantidad estimada hasta el mes de mayo del 2025</Text>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Portada;