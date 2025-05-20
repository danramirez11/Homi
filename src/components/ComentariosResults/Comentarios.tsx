import { Text } from '../../theme/styledcomponents';
import './Comentarios.css'

const Comentarios: React.FC = () => {

  return (
    <section id='SectionComentarios'>
        <Text variant="cardSubtitle" color="#2C2B2B">“Nuestra experiencia fue excelente desde el primer contacto hasta la entrega”</Text>
        <hr />
        <Text variant="cardSubtitle" color="#2C2B2B">+30.000 clientes satisfechos</Text>
        <hr />
        <Text variant="cardSubtitle" color="#2C2B2B">+15.000 familias han confiado en nuestros servicios para encontrar su hogar ideal</Text>
    </section>
  );
};

export default Comentarios;