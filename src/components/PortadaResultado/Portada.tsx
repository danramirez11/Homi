import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCircleChevronLeft } from "react-icons/fa6";
import './Portada.css'

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
        <div className='botonAtras'>
            <FaCircleChevronLeft size={28} color="white"/>
            <p>Volver</p>
        </div>
        <div className='infoDetalle'>
            <div className='izquierdaInfo'>
                <div className='proyectoInfo'>
                    <div className='proyectoEtiqueta'>
                        <FaMapMarkerAlt />
                        <p>Ubicación</p>
                        <button>Vivienda <p>Tipo de vivienda</p></button>
                    </div>
                    <h2>Insertar nombre</h2>
                    <p>precio</p>
                </div>
                <div className='proyectoLogo'>
                    <img src="" alt="" />
                </div>
            </div>
            <div className='derechaInfo'>
                <div className='proyectoSlogan'>
                    <h3>Slogan 2</h3>
                    <p>Detalle del proyecto</p>
                </div>
                <div className='proyectoDispo'>
                    <div className='proyectoFecha'>
                        <h3>Fecha de entrega</h3>
                        <p>poner fecha</p>
                        <p>*Esta es una fecha aproximada y puede variar según el desarrollo del proyecto.</p>
                    </div>
                    <div className='proyectoDisponibilidad'>
                        <h3>Apartamentos disponibles</h3>
                        <p><p>número</p> Aptos</p>
                        <p><p>número</p> Torres</p>
                        <p>*Cantidad estimada hasta el mes de mayo del 2025</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Portada;