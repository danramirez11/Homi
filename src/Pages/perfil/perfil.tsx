/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Button, Text } from '../../theme/styledcomponents';
import supabase from '../../Services/Supabase';
import './perfil.css';
import SideBar from '../../components/SideBar/SideBar';
import Spinner from '../../components/Spinner/Spiner';

const Perfil = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) return;

      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('email', user.email) 
        .single();

      if (!error && data) {
        setUserData(data);
      }

      setLoading(false);
    };

    fetchUserData();
  }, []);


  return (
    <div className='perfilContainer'>
    <SideBar />
    
   <div id='profileWrapper'>
    {
      loading ? (
        <>
        <Spinner/>
        </>
      ) : !userData ? (
        <Text variant="bodyRegular">No se encontraron datos de usuario.</Text>
      ) : 
    
        <div id='profileContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div id="imgBanner" style={{
                backgroundColor: '#ccc',
                backgroundImage: './../../utils/Img/PerfilBaner.png',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}></div>


        <section id='info'>
           <img id="PerfilPhoto" src="./../../utils/Img/perfil.png" alt="" />
          <div>
            <Text  id='nombre' variant="sectionTitle">{userData.full_name}</Text>
            <Text  id='Identification' variant="bodyRegular">cc. {userData.document_id}</Text>
          </div>
          <Button variant="dark" size="medium" weight="bold">Editar</Button>
        </section>

        <section id='Info2'>
          <div id='UserName'>
            <Text id='nombre' variant="bodyBold">Nombre de usuario</Text>
            <Text id='nombre' variant="bodyRegular">{userData.username || 'No definido'}</Text>
          </div>
          <div id='Email'>
            <Text id='nombre' variant="bodyBold">Correo electrónico</Text>
            <Text id='nombre' variant="bodyRegular">{userData.email}</Text>
            <Text id='nombre' variant="bodyRegular">Cambiar correo electrónico</Text>
          </div>
          <div id='PhoneNumber'>
            <Text id='nombre'variant="bodyBold">Número de contacto</Text>
            <Text id='nombre' variant="bodyRegular">{userData.phone || 'agregar número de contacto'}</Text>
          </div>
          <div id='ChangePassword'>
            <Text id='nombre' variant="bodyBold">Contraseña y autentificación</Text>
            <Button variant="dark" size="large" weight="bold">Cambiar contraseña</Button>
          </div>
        </section>
      </div>
    }
    </div>

    </div>
  );
};

export default Perfil;
