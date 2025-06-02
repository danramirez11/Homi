/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import supabase from "../Services/supabase";
type proyecto = {
    nombre: string;
    slogan_1: string;
    slogan_2: string;
    texto_intro: string;
    fecha_entrega: string;
    inventario_apt: number;
    inventario_torres: number;
    ubicacion: string;
    tipo_vivienda: string;
    explicacion: string;
    descripción_corta: string;
    tipo_de_casa: string;
    precio: number;
    proyecto_id: string;
    img_portada: string;
    img_logo: string;
    img_explicacion1: string;
    img_explicación2: string;
    img_plano: string;
    img_frase: string;
    img_interior_vista: string;
    linkVista_3D: string;
    img_vista3D: string;
    img_informacion: string;
    tipo_perfil: string;
    id: number;
    link_plano: string;
    linkTipo_proyecto: string;
}

const Usedetail = ()=>{
    const [proyecto, setproyecto] = useState<proyecto>({
        nombre: "",
        slogan_1: "",
        slogan_2: "",
        texto_intro: "",
        fecha_entrega: "",
        inventario_apt: 0,
        inventario_torres: 0,
        ubicacion: "",
        tipo_vivienda: "",
        explicacion: "",
        descripción_corta: "",
        tipo_de_casa: "",
        precio: 0,
        proyecto_id: "",
        img_portada: "",
        img_logo: "",
        img_explicacion1: "",
        img_explicación2: "",
        img_plano: "",
        img_frase: "",
        img_interior_vista: "",
        linkVista_3D: "",
        img_vista3D: "",
        img_informacion: "",
        tipo_perfil: "",
        id: 0,
        link_plano: "",
        linkTipo_proyecto: ""
    })

    useEffect(() =>{
        const fetchdata = async ()=>{
            const { data: proyectos, error } = await supabase.from("proyectos").select('*');
            if (proyectos && proyectos.length > 1) {
                setproyecto(proyectos[0]);
            }
            console.log(error);
            
            console.log(proyecto);
        }
        
        fetchdata()
    }
    ,[])
    return{proyecto}
}
export default Usedetail