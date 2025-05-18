import {
  FaWallet, FaMoneyBillWave, FaGem,
  FaPaintRoller, FaHandshake, FaHome,
  FaUtensils, FaLaptopHouse, FaSun, FaDog,
  FaPaw, FaHeart, FaFish, FaMinusCircle,
  FaStream, FaUsers, FaLightbulb, FaSeedling,
  FaTree, FaCity, FaBed, FaBicycle, FaBoxes, FaCompress,
  FaMountain, FaWalking, FaSchool, FaBus, FaCoffee
} from 'react-icons/fa';

import {
  FaMountainSun
} from 'react-icons/fa6'

import Sola from './Img/Sola.webp'
import Conamigos from './Img/Conamigos.webp'
import Enpareja from './Img/Enpareja.webp'
import Enfamilia from './Img/Enfamilia.webp'
import type { PreguntaFormulario } from '../components/types';
import { ht } from '../types/homes';

export const preguntasFormulario:  PreguntaFormulario[] = [
  {
    pregunta: "¿Cuál es el rango de inversión que estás dispuesta/o a realizar en una vivienda?",
    descripcion: "Todos soñamos con un hogar propio. Aquí empieza el tuyo.",
    esMultiple: false,
    opciones: [
      { texto: "Viviendas igual o menor a $130 millones",  icono: FaWallet, viviendas: [ht.COMPACTO, ht.BASICO]  },
      { texto: "Viviendas entre $130 y $290 millones", icono: FaMoneyBillWave, viviendas: [ht.FUNCIONAL, ht.ESPACIOSO] },
      { texto: "Viviendas desde $290 millones en adelante", icono: FaGem, viviendas: [ht.PREMIUM] },
    ]
  },
  {
    pregunta: "¿Te emociona la idea de personalizar tu casa desde cero?",
    descripcion: "Cada hogar tiene una historia. ¿Te gustaría escribirla desde el primer ladrillo?",
    esMultiple: false,
    opciones: [
      { texto: "¡Sí! Quiero estar en cada detalle", icono: FaPaintRoller, viviendas: [ht.ESPACIOSO, ht.PREMIUM] },
      { texto: "Me gustaría recibir algunas recomendaciones", icono: FaHandshake, viviendas: [ ht.FUNCIONAL] },
      { texto: "No tanto, prefiero algo listo para vivir", icono: FaHome, viviendas: [ht.COMPACTO, ht.BASICO]},
    ]
  },
  
  {
    pregunta: "¿Con cuál de estas imágenes te identificas más?",
    descripcion: "El hogar ideal no se piensa, se siente. Elige la escena que más se parezca a ti.",
    esMultiple: false,
    opciones: [
      { texto:"Viviendo con mi pareja", imagen: Enpareja, viviendas: [ht.COMPACTO] },
      { texto:"Con mi familia y/o mascotas", imagen: Enfamilia, viviendas: [ht.BASICO, ht.FUNCIONAL, ht.ESPACIOSO] },
      { texto:"Disfrutando de mi independencia", imagen: Sola, viviendas: [ht.COMPACTO] },
      { texto:"Con amigos y/o roomies", imagen: Conamigos, viviendas: [ht.FUNCIONAL, ht.ESPACIOSO] },
    ]
  },
  {
    pregunta: "¿Cómo imaginas un día perfecto en casa?",
    descripcion: "Tu casa ideal se vive en los pequeños momentos. ¿Cuál se parece más a los tuyos?",
    esMultiple: true,
    opciones: [
      { texto: "Cocinando algo rico y compartiendo", icono: FaUtensils, viviendas: [ ht.BASICO, ht.FUNCIONAL] },
      { texto: "Trabajando en un rincón tranquilo", icono: FaLaptopHouse, viviendas: [ht.COMPACTO] },
      { texto: "Tomando sol en una terraza o jardín", icono: FaSun, viviendas: [ ht.PREMIUM] },
      { texto: "Jugando con mis hijos o mascotas", icono: FaDog, viviendas: [ht.FUNCIONAL, ht.ESPACIOSO] },
    ]
  },
  {
    pregunta: "¿Compartes tu vida con alguna mascota, o te gustaría hacerlo?",
    descripcion: "¿Hay patitas, maullidos o plumitas en tu futuro?",
    esMultiple: false,
    opciones: [
      { texto: "Sí, tengo una mascota", icono: FaPaw, viviendas: [ht.FUNCIONAL, ht.ESPACIOSO] },
      { texto: "Me encantaría vivir con una mascota", icono: FaHeart, viviendas: [ht.FUNCIONAL, ht.BASICO] },
      { texto: "Tengo o quiero otros animales que no sean gatos o perros", icono: FaFish, viviendas: [ht.PREMIUM, ht.ESPACIOSO] },
      { texto: "Prefiero un hogar sin mascotas", icono: FaMinusCircle, viviendas: [ht.COMPACTO] },
    ]
  },
  {
    pregunta: "Si tu hogar tuviera una “personalidad”, sería...",
    descripcion: "Las casas también hablan. ¿Qué estilo dice más de ti?",
    esMultiple: false,
    opciones: [
      { texto: "Minimalista, práctico y cálido", icono: FaStream, viviendas: [ht.COMPACTO] },
      { texto: "Familiar, funcional y adaptable", icono: FaUsers, viviendas: [ht.BASICO, ht.FUNCIONAL] },
      { texto: "Creativo, amplio y lleno de rincones", icono: FaLightbulb, viviendas: [ht.ESPACIOSO] },
      { texto: "Natural, luminoso y abierto", icono: FaSeedling, viviendas: [ht.PREMIUM] },
    ]
  },
  {
    pregunta: "¿Qué sensación te gustaría tener al mirar por la ventana?",
    descripcion: "Lo que ves afuera también transforma lo que sientes por dentro.",
    esMultiple: false,
    opciones: [
      { texto: "Ver árboles, plantas o naturaleza", icono: FaMountainSun, viviendas: [ht.PREMIUM, ht.ESPACIOSO] },
      { texto: "Ver movimiento, ciudad y actividad", icono: FaCity, viviendas: [ht.COMPACTO] },
      { texto: "Ver un parque, vecindario tranquilo", icono: FaTree, viviendas: [ht.BASICO, ht.FUNCIONAL] },
      { texto: "No me interesa, mientras me sienta a gusto", icono: FaBed, viviendas: [ht.COMPACTO] },
    ]
  },
  {
    pregunta: "¿Sueles necesitar espacio extra para guardar cosas o hobbies?",
    descripcion: "Un hogar debe tener espacio para lo que amas... y para lo que aún no sabes que amarás.",
    esMultiple: false,
    opciones: [
      { texto: "Sí, tengo bicicletas, herramientas, etc.", icono: FaBicycle, viviendas: [ht.PREMIUM, ht.ESPACIOSO] },
      { texto: "A veces, pero me las arreglo", icono: FaBoxes, viviendas: [ht.FUNCIONAL, ht.BASICO] },
      { texto: "No, no necesito mucho espacio extra", icono: FaCompress, viviendas: [ht.COMPACTO] },
    ]
  },
  {
    pregunta: "¿Qué entorno te hace sentir más en casa?",
    descripcion: "No se trata solo de la casa, sino de lo que la rodea. ¿Qué te hace sentir en tu lugar?",
    esMultiple: true,
    opciones: [
      { texto: "Ciudad, vida activa, todo cerca", icono: FaCity, viviendas: [ht.COMPACTO, ht.BASICO] },
      { texto: "Naturaleza, aire puro, tranquilidad", icono: FaMountain, viviendas: [ht.PREMIUM, ht.ESPACIOSO] },
      { texto: "Un vecindario familiar y tranquilo", icono: FaHome, viviendas: [ht.FUNCIONAL] },
    ]
  },
  {
    pregunta: "Al salir de casa por la mañana, ¿qué es lo primero que haces?",
    descripcion: "Tus rutinas hablan de ti. Queremos que tu casa se adapte a ellas, no al revés.",
    esMultiple: true,
    opciones: [
      { texto: "Disfruto mientras salgo a caminar o trotar", icono: FaWalking, viviendas: [ht.PREMIUM, ht.ESPACIOSO] },
      { texto: "Llevo a mis hijos al colegio", icono: FaSchool, viviendas: [ht.FUNCIONAL, ht.ESPACIOSO] },
      { texto: "Me dirijo a la estación de transporte", icono: FaBus, viviendas: [ht.COMPACTO, ht.BASICO] },
      { texto: "Compro mi desayuno en una tienda cercana", icono: FaCoffee, viviendas: [ht.FUNCIONAL] }, 
    ]
  }
];

export default preguntasFormulario;
