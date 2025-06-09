import supabase from "./Supabase";

export const fetchUserData = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) return;

      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', user.email) 
        .single();

      if (!error && data) {
        return data
      }
};