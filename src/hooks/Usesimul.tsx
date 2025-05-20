import { useEffect, useState } from "react";
import supabase from "../Services/supabase";
import { useLocation, useSearchParams } from "react-router-dom";

 export const Usesimul = ()=>{
    const titleproyect = document.getElementById("title")
    
    const selectinput = document.getElementById("proyecto")
    const titloselect = document.getElementById("proyectoAsk")
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
    const [searchParams] = useSearchParams()
    const stateloc = useLocation()
   

    useEffect(()=>{
    if (stateloc.state && stateloc.state.Proyectodata) {
        console.log(stateloc.state.Proyectodata.id);

        const id = searchParams.get("id");

        setProyectSelected(String(stateloc.state.Proyectodata.id));
        if (titleproyect) {
            titleproyect.style.display = "block";
        }
        if (selectinput) {
            selectinput.style.display = "none";
            if (titloselect) {
                titloselect.style.display = "none";
            }
        }
    } else {
        console.log("No hay ninguna id en la url");
    }
    })
    useEffect(() => {
             const fetchProyectos = async () => {
            let { data, error } = await supabase.from('proyectos').select('*');
            setProyectos(data || []);
            console.log(data);
            if (error) {
                console.error('Error fetching proyectos:', error);
            }         
        };
        fetchProyectos();
   }, [])

    
      
    const handleinfo = () => {
    const ingreso = document.getElementById("Value-ingreso") as HTMLInputElement;
    const gastos = document.getElementById("Value-gastos") as HTMLInputElement;
    const cesantias = document.getElementById("Value-cesantias") as HTMLInputElement;

    setuserinfo({
        ingresos: Number(ingreso.value),
        gastos: Number(gastos.value),
        cesantias: Number(cesantias.value),
    });

    const id = searchParams.get("id");
    if (id && id !== "null" && id !== "undefined") {
        setProyectSelected(id);
    } else {
        const inputvalue = (selectinput as HTMLInputElement | HTMLSelectElement | null)?.value;
        setProyectSelected(inputvalue ?? "");
    }
}
    useEffect(() => {
        
        const selectedOption = Proyectos.find((proyecto) => String(proyecto.id) === ProyectSelected); 
        
        if(selectedOption){

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
            
          
            
            setProyectoSim({
                nombre: selectedOption.nombre,
                cuotainicial: cuotainicialcesantia,
                mesesHastaEntrega: mesesHastaEntrega,
                cuotaMensual: roundedCuotaMensual,
                añosHastaEntrega: añosHastaEntrega,
            });
            
        
        }else {
            console.log("proyecto no encontrado");
            
        }
    }, [userinfo, ProyectSelected, Proyectos]);



    return { handleinfo, Proyectos, ProyectSelected, userinfo, ProyectoSim };
}
    

export default Usesimul;