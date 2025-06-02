import supabase from "./Supabase";

export const getProjects = async (homeType: string) => {
  if (!supabase) {
    console.warn("❌ Supabase no disponible: getProjects cancelado.");
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("proyectos")
      .select("*")
      .eq("tipo_vivienda", homeType);

    if (error) {
      console.error("Error fetching projects:", error);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
};

export const getResults = async (homeType: string) => {
  if (!supabase) {
    console.warn("❌ Supabase no disponible: getResults cancelado.");
    return [];
  }

  try {
    const { data, error } = await supabase
      .from("resultados")
      .select("*")
      .eq("tipo_vivienda", homeType);

    if (error) {
      console.error("Error fetching results:", error);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Error fetching results:", error);
    return [];
  }
};