import { Text } from '../../theme/styledcomponents';
import './ProNews.css'; // Assuming you have a CSS file for styling

const news = [
    {
        tittle: 'Pruebas de funcionamiento',
        time: 'Hace 2 semanas',
        photo: 'https://i.pinimg.com/736x/fc/d4/11/fcd411c4990e19941a7780ef5e794e21.jpg'
    },
    {
        tittle: 'Instalación electrica',
        time: 'Hace 4 semanas',
        photo: 'https://i.pinimg.com/736x/fc/d4/11/fcd411c4990e19941a7780ef5e794e21.jpg'
    },
    {
        tittle: 'Revisión estructural de la obra',
        time: 'Hace 2 meses',
        photo: 'https://i.pinimg.com/736x/fc/d4/11/fcd411c4990e19941a7780ef5e794e21.jpg'
    },
    {
        tittle: 'Levantamiento de muros',
        time: 'Hace 3 meses',
        photo: 'https://i.pinimg.com/736x/fc/d4/11/fcd411c4990e19941a7780ef5e794e21.jpg'
    },
    {
        tittle: 'Terreno preparado',
        time: 'Hace 3 meses',
        photo: 'https://i.pinimg.com/736x/fc/d4/11/fcd411c4990e19941a7780ef5e794e21.jpg'
    }

]

const ProNews = () => {
    return (
        <section className="pro-news">
            <div className='news-img'/>
            <div className='news-content'>
                <Text variant='cardSubtitle'>Novedades del proyecto</Text>
                <section className='news-news'>
                    {news.map((item, index) => (
                        <div key={index} className='news-item'>
                            <img src={item.photo} alt={item.tittle} className='news-photo' />
                            <div className='news-text'>
                                <Text variant='captionRegular' color='gray'>{item.tittle}</Text>
                                <Text variant='inputText' color='gray'>{item.time}</Text>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </section>
    );
}

export default ProNews;