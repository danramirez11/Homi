import { useEffect, useState } from "react";
import supabase from "../Services/Supabase";

 export const Usesimul = ()=>{

    const [Proyectos, setProyectos] = useState<any[]>([]);
    const [ProyectSelected, setProyectSelected] = useState("");
    const [userinfo, setuserinfo] = useState({
        ingresos: 0,
        gastos: 0,
        cesantias: 0,
    });
    const [ProyectoSim, setProyectoSim] = useState({
        nombre: "",
        cuotainicial: 0,
        mesesHastaEntrega: 0,
        cuotaMensual: 0,
        añosHastaEntrega: 0,
    })
    useEffect(() => {
        const fetchProyectos = async () => {
            let { data, error } = await supabase.from('proyectos').select('*');
            setProyectos(data ?? []);
            console.log(data);
            if (error) {
                console.error('Error fetching proyectos:', error);
            }       
            
        };
        fetchProyectos();
    }, []);
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setProyectSelected(selectedValue);
         
    };
    const handleinfo = () => {
        const ingreso = document.getElementById("Value-ingreso") as HTMLInputElement;
        const gastos = document.getElementById("Value-gastos") as HTMLInputElement;
        const cesantias = document.getElementById("Value-cesantias") as HTMLInputElement;
        
        setuserinfo({
            ingresos: Number(ingreso.value),
            gastos: Number(gastos.value),
            cesantias: Number(cesantias.value),
        });
    }  
    useEffect(() => {
        const selectedOption = Proyectos.find((proyecto) => String(proyecto.id) === ProyectSelected);      
        if (selectedOption) {
            
            
            const cuotaInicial = selectedOption.precio * 0.2;
            const cuotainicialcesantia = cuotaInicial - userinfo.cesantias;
            const fechaEntregaParts = selectedOption.fecha_entrega.split("-");
            const fechaEntrega = new Date(
                Number(fechaEntregaParts[0]),
                Number(fechaEntregaParts[1]) - 1,
                Number(fechaEntregaParts[2])
            );
            const fechaActual = new Date();
            const diferenciaMs = fechaEntrega.getTime() - fechaActual.getTime();
            const mesesHastaEntrega = Math.ceil(diferenciaMs / (1000 * 3600 * 24 * 30)); // Prevent division by zero
            const cuotaMensual = cuotainicialcesantia / mesesHastaEntrega;
            const añosHastaEntrega = Math.floor(mesesHastaEntrega / 12);
            const roundedCuotaMensual = Math.round(cuotaMensual);
            
          
            
           console.log(`Cuota inicial: ${cuotaInicial}`);
           console.log(`Cuota inicial con cesantías: ${cuotainicialcesantia}`);
           
            
            setProyectoSim({
                nombre: selectedOption.nombre,
                cuotainicial: cuotainicialcesantia,
                mesesHastaEntrega: mesesHastaEntrega,
                cuotaMensual: roundedCuotaMensual,
                añosHastaEntrega: añosHastaEntrega,
            });
            
            
        } else {
            console.log("No se seleccionó ningún proyecto.");
        }
    }, [ProyectSelected, userinfo]);
    return { handleinfo, handleChange, Proyectos, ProyectSelected, userinfo, ProyectoSim };
}
    

export default Usesimul;