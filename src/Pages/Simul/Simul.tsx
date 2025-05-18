import { useEffect, useState } from 'react';
import './Simul.css'
const Simul = ()=> {
    const [ProyectSelected, setProyectSelected] = useState("");
    const [ProyectoSim, setProyectoSim] = useState({
        nombre: "",
        cuotainicial: 0,
        mesesHastaEntrega: 0,
        cuotaMensual: 0,
        añosHastaEntrega: 0,
    })
    const proyectos = [{
        id: 1,
        nombre: "origen",
        descripcion: "proyecto de origen",
        fechaentrega: "2026-01-01",
        precio: 1120000000,
        estado: "en curso",
    },
    {
        id: 2,
        nombre: "violet",
        descripcion: "proyecto violet", 
        fechaentrega: "2027-01-01",
        precio: 900000000,
        estado: "en curso",
    },]
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setProyectSelected(selectedValue);
    };
    useEffect(() => {
        const selectedOption = proyectos.find((proyecto) => proyecto.id === parseInt(ProyectSelected));
        if (selectedOption) {
            const cuotaInicial = selectedOption.precio * 0.2;
            const fechaEntregaParts = selectedOption.fechaentrega.split("-");
            const fechaEntrega = new Date(
                Number(fechaEntregaParts[0]),
                Number(fechaEntregaParts[1]) - 1,
                Number(fechaEntregaParts[2])
            );
            const fechaActual = new Date();
            const diferenciaMs = fechaEntrega.getTime() - fechaActual.getTime();
            const mesesHastaEntrega = Math.ceil(diferenciaMs / (1000 * 3600 * 24 * 30)); // Prevent division by zero
            const cuotaMensual = cuotaInicial / mesesHastaEntrega;
            const añosHastaEntrega = Math.floor(mesesHastaEntrega / 12);
            console.log(cuotaInicial);
            console.log(mesesHastaEntrega);
            console.log(cuotaMensual);
            console.log(añosHastaEntrega);
            setProyectoSim({
                nombre: selectedOption.nombre,
                cuotainicial: cuotaInicial,
                mesesHastaEntrega: mesesHastaEntrega,
                cuotaMensual: cuotaMensual,
                añosHastaEntrega: añosHastaEntrega,
            });
            
        } else {
            console.log("No se seleccionó ningún proyecto.");
        }
    }, [ProyectSelected]);
    

    return (
        <div>
            <h1>Simul</h1>
            <p>Simul page content goes here.</p>
            <div className="Form">
            <h2>Cual de nuestros proyectos crees que es el indicado para ti?</h2>
            <select id='proyecto' name='proyecto' onChange={handleChange}>
                <option value="">Selecciona un proyecto</option>
                {proyectos.map((proyecto) => (
                    <option key={proyecto.id} value={proyecto.id}>
                        {proyecto.nombre}
                    </option>
                ))}
            </select>
                <h2>¿Cuánto ganas al mes aproximadamente? (Incluye tu sueldo, rentas, trabajos extra, etc.)</h2>
                <input type="number" name="" id="" />
                <h2>¿Cuáles son tus gastos mensuales aproximados?</h2>
                <input type="number" name="" id="" />
                <h2>¿Tienes cesantías u otros ahorros que puedas abonar de inmediato? ¿cuánto tienes ahorrado actualmente?</h2>
                <input type="number" name="" id="" />

                </div>
                <div className='resultados de la simulacion'> 
                <h2>Resultados de la simulación</h2>
                <p>El proyecto seleccionado es: {ProyectoSim.nombre}</p>
                <p>La cuota inicial es: {ProyectoSim.cuotainicial}</p>
                <p>Los meses hasta la entrega son: {ProyectoSim.mesesHastaEntrega}</p>
                <p>La cuota mensual es: {ProyectoSim.cuotaMensual}</p>
                <p>Los años hasta la entrega son: {ProyectoSim.añosHastaEntrega}</p>

                </div>
        </div>
        
    );  
}

export default Simul;