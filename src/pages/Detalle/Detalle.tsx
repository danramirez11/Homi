import Portada from "../../components/PortadaResultado/Portada";
import NewNav from "../../components/NavDet/NewNav";
import Explicacion from "../../components/ExplicacionResultados/Eplicacion";
import Slogan from "../../components/SloganResultados/Slogan";
import Vista from "../../components/VistaResultados/Vista";
import Planos from "../../components/PlanosResultados/Planos";
import Enlace from "../../components/EnlaceSimulador/Enlace";
import Comentarios from "../../components/ComentariosResults/Comentarios";

const Detalle = () => {
  return (
    <div>
      <NewNav onLoginClick={() => {}}/>
      <Portada/>
      <Explicacion/>
      <Slogan/>
      <Vista/>
      <Planos/>
      <Enlace/>
      <Comentarios/>
    </div>
  );
};

export default Detalle;