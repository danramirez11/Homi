import { Text } from '../../theme/styledcomponents';
import './ProNews.css'; // Assuming you have a CSS file for styling

const news = [
    {
        tittle: 'Pruebas de funcionamiento',
        time: 'Hace 2 semanas',
        photo: 'https://i.pinimg.com/736x/f6/2f/a8/f62fa84d75c7a0a5cb4e2473b4d42199.jpg'
    },
    {
        tittle: 'Instalación electrica',
        time: 'Hace 4 semanas',
        photo: 'https://i.pinimg.com/736x/39/8d/56/398d56167d054d8e75992a45311c5e95.jpg'
    },
    {
        tittle: 'Revisión estructural de la obra',
        time: 'Hace 2 meses',
        photo: 'https://i.pinimg.com/736x/fc/d4/11/fcd411c4990e19941a7780ef5e794e21.jpg'
    },
    {
        tittle: 'Levantamiento de muros',
        time: 'Hace 3 meses',
        photo: 'https://i.pinimg.com/736x/3d/a7/28/3da728439c6e21d0eae754aeb0203431.jpg'
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