import supabase from "./supabase";

export const getProjects = async (homeType: string) => {
    try {
    const { data, error } = await supabase
        .from('proyectos')
        .select('*')
        .eq('tipo_perfil', homeType);
        if (error) {
            console.error("Error fetching projects:", error);
            return [];
        }

        return data;
    } catch (error) {
        console.error("Error fetching projects:", error);
    }
}

export const getResults = async (homeType: string) => {
    try {
        const { data, error } = await supabase
        .from('resultados')
        .select('*')
        .eq('tipo_vivienda', homeType);
        if (error) {
            console.error("Error fetching results:", error);
            return [];
        }

        return data;
    } catch (error) {
        console.error("Error fetching results:", error);
        
    }
}