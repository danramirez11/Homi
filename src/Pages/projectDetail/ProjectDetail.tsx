import { IoLocationOutline } from "react-icons/io5";
import NavBar from "../../components/NavBar/NavBar";
import ProBanner from "../../components/ProBanner/ProBanner";
import SideBar from "../../components/SideBar/SideBar";
import { Text } from "../../theme/styledcomponents";
import './ProjectDetail.css'
import StateGraph from "../../components/StateGraph/StateGraph";
import ProNews from "../../components/ProNews/ProNews";

const ProjectDetail = () => {

    return (
        <div className="dashboard-container">
      <SideBar />

      <div className="main-content">
        <NavBar />

        <div className="project-content">
            <section className="project-left">
            <Text variant='inputText' color="gray">Mis proyectos / Apartamentos Campestres</Text>
            <ProBanner/>
            <span className="project-location">
                <IoLocationOutline color="black" size={20}/>
                <Text variant='bodyRegular'>Pance</Text>
            </span>
            <Text variant='display'>Apartamentos Campestres</Text>
            <Text variant='cardSubtitle'>Estado de la obra</Text>
            <StateGraph step={4}/>
            <ProNews/>
            </section>

            <section className="project-right">
                <h1>hi</h1>
            </section>
        </div>
      </div>
    </div>
    )

}

export default ProjectDetail;