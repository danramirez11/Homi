import { IoLocationOutline } from "react-icons/io5";
import NavBar from "../../components/NavBar/NavBar";
import ProBanner from "../../components/ProBanner/ProBanner";
import SideBar from "../../components/SideBar/SideBar";
import { Text } from "../../theme/styledcomponents";
import './ProjectDetail.css'
import StateGraph from "../../components/StateGraph/StateGraph";
import ProNews from "../../components/ProNews/ProNews";
import { PieChart } from '@mui/x-charts/PieChart';
import Reminders from "../../components/Reminders/Reminders";

const ProjectDetail = () => {

    return (
        <div className="dashboard-container">
            <div className="side-bar"><SideBar /></div>
      

      <div className="main-content" style={{ marginRight: '0',}}>
        <div className="nav-bar">
        <NavBar />
        </div>

        <div className="project-content">
            <section className="project-left">
            <Text variant='inputText' color="gray">Mis proyectos / Apartamentos Campestres</Text>
            <ProBanner/>
            <span>
            <span className="project-location">
                <IoLocationOutline color="black" size={20}/>
                <Text variant='bodyRegular'>Pance</Text>
            </span>
            <Text variant='display'>Apartamentos Campestres</Text>
            </span>

            <Text variant='cardSubtitle'>Estado de la obra</Text>
            <StateGraph step={4}/>
            <ProNews/>
            </section>

            <section className="project-right">
                <section className="project-content-card">
                    <Text variant="cardSubtitle">Mis pagos (estado financiero)</Text>
                    <PieChart
                        series={[
                            {
                            data: [
                                { id: 1, value: 32, label: 'Pagado 32%', color: '#92BFFF' },
                                { id: 0, value: 68, label: 'Deuda 68%', color: 'gray' }
                            ],
                            innerRadius: 50,
                            paddingAngle: 5,
                            cornerRadius: 5,
                            startAngle: 0,
                            endAngle: 360,
                            },
                        ]}
                         slotProps={{
                            legend: {
                            direction: 'horizontal',
                            position: {
                                vertical: 'bottom',
                                horizontal: 'center',
                            },
                            },
                        }}
                        width={170}
                        height={170}
                    />
                </section>
                <section className="project-content-card">
                    <Reminders/>
                </section>
            </section>
        </div>
      </div>
    </div>
    )

}

export default ProjectDetail;