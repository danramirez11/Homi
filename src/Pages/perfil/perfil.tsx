import { Button, Text } from '../../theme/styledcomponents'
import "./perfil.css"

const Perfil = () => {
    return (
        <div id='profileWrapper'>
        <div id='profileContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <div id="imgBanner" style={{
                backgroundColor: '#ccc',
                backgroundImage: 'url(/ruta-a-tu-imagen.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}></div>

            <section id='info'>
                <img id="PerfilPhoto" src="" alt="" />
                <div>
                    <Text id='nombre' variant="sectionTitle">Valentina Ramirez Lopez</Text>
                    <Text id='Identification' variant="bodyRegular">cc. 1.025.784.392</Text>
                </div>
                <Button variant="dark" size="medium" weight="bold">Editar</Button>
            </section>

            <section id='Info2'>
                <div id='UserName'>
                <Text id='nombre' variant="bodyBold">Nombre de usuario</Text>
                <Text id='nombre' variant="bodyRegular">ValentinaRamirez</Text>
                </div>
                  <div id='Email'>
                <Text id='nombre' variant="bodyBold">Correo electronico</Text>
                <Text id='nombre' variant="bodyRegular">valentinaRamirez22@gmail.com</Text>
               <Text id='nombre' variant="bodyRegular">Cambiar correo electronico</Text>
                </div>
                  <div id='PhoneNumber'>
                <Text id='nombre' variant="bodyBold">Numero de contacto</Text>
                <Text id='nombre' variant="bodyRegular">4126510336000</Text>
                </div>
                <div id='ChangePassword'>
                <Text id='nombre' variant="bodyBold">Contraseña y autentificación </Text>
                <Button variant="dark" size="large" weight="bold">Cambiar contraseña</Button>
                </div>
            </section>

        </div>
        </div>
    );
};

export default Perfil;