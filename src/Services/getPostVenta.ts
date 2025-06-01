
import supabase from './supabase';  
import type { EstadoObraItem } from '../components/types';

export async function getEstadoObra(): Promise<EstadoObraItem[]> {
  const { data, error } = await supabase
    .from('posventa') 
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error al obtener datos de Supabase:', error.message);
    return [];
  }

  return data as EstadoObraItem[];
}
