import Portada from "../../components/PortadaResultado/Portada";
import NewNav from "../../components/NavDet/NewNav";
import Explicacion from "../../components/ExplicacionResultados/Eplicacion";
import Slogan from "../../components/SloganResultados/Slogan";
import Vista from "../../components/VistaResultados/Vista";
import Planos from "../../components/PlanosResultados/Planos";
import Enlace from "../../components/EnlaceSimulador/Enlace";
import Comentarios from "../../components/ComentariosResults/Comentarios";
import { useLocation } from "react-router-dom";

const Detalle = () => {
  const lolquebien = useLocation()
  const Proyectoinfo = lolquebien.state.home;
  console.log("lolquebein", Proyectoinfo);
  
  return (
    <div>
      <NewNav onLoginClick={() => {}}/>
      <Portada Proyectodata={Proyectoinfo}/>
      <Explicacion Proyectodata={Proyectoinfo}/>
      <Slogan Proyectodata={Proyectoinfo}/>
      <Vista Proyectodata={Proyectoinfo}/>
      <Planos Proyectodata={Proyectoinfo}/>
      <Enlace Proyectodata={Proyectoinfo}/>
      <Comentarios Proyectodata={Proyectoinfo}/>
    </div>
  );
};

export default Detalle;