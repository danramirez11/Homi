
import supabase from './supabase';  
import type { EstadoObraItem } from '../components/types';

export async function getEstadoObra(): Promise<EstadoObraItem[]> {
  const { data, error } = await supabase
    .from('postventa') 
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error al obtener datos de Supabase:', error.message);
    return [];
  }

  return data as EstadoObraItem[];
}

export const insertarDatos = async (payload: Record<string, any>) => {
  try {
    // Aquí creamos un nuevo objeto con la propiedad 'espacio' en vez de 'area_afectada'
    const { area_afectada, ...rest } = payload;  // sacamos area_afectada
    const datosFormateados = {
      ...rest,
      espacio: area_afectada,  // renombramos aquí
      created_at: new Date().toISOString(),
      estado: 'Recibido',
    };

    console.log("Payload que se va a insertar:", datosFormateados);

    const { data, error } = await supabase
      .from("postventa")
      .insert([datosFormateados]);

    if (error) {
      console.error('Error al insertar datos:', error);
      throw new Error('No se pudo enviar el formulario. Intenta más tarde.');
    }

    console.log("Datos insertados:", data);
    return data;
  } catch (err: any) {
    console.error('Error inesperado:', err.message || err);
    throw err;
  }
};
