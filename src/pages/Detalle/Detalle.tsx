import Portada from "../../components/PortadaResultado/Portada";
import NewNav from "../../components/NavDet/NewNav";
import Explicacion from "../../components/ExplicacionResultados/Eplicacion";
import Slogan from "../../components/SloganResultados/Slogan";

const Detalle = () => {
  return (
    <div>
      <NewNav onLoginClick={() => {}}/>
      <Portada/>
      <Explicacion/>
      <Slogan/>
    </div>
  );
};

export default Detalle;