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

const preguntasFormulario = [
  {
    pregunta: "¿Cuál es el rango de inversión que estás dispuesta/o a realizar en una vivienda?",
    descripcion: "Todos soñamos con un hogar propio. Aquí empieza el tuyo.",
    opciones: [
      { texto: "Viviendas igual o menor a $130 millones",  icono: FaWallet  },
      { texto: "Viviendas entre $130 y $290 millones", icono: FaMoneyBillWave },
      { texto: "Viviendas desde $290 millones en adelante", icono: FaGem },
    ]
  },
  {
    pregunta: "¿Te emociona la idea de personalizar tu casa desde cero?",
    descripcion: "Cada hogar tiene una historia. ¿Te gustaría escribirla desde el primer ladrillo?",
    opciones: [
      { texto: "¡Sí! Quiero estar en cada detalle", icono: FaPaintRoller },
      { texto: "Me gustaría recibir algunas recomendaciones", icono: FaHandshake },
      { texto: "No tanto, prefiero algo listo para vivir", icono: FaHome },
    ]
  },
  
  {
    pregunta: "¿Con cuál de estas imágenes te identificas más?",
    descripcion: "El hogar ideal no se piensa, se siente. Elige la escena que más se parezca a ti.",
    opciones: [
      { texto:"Viviendo con mi pareja", imagen: Enpareja },
      { texto:"Con mi familia y/o mascotas", imagen: Enfamilia },
      { texto:"Disfrutando de mi independencia", imagen: Sola },
      { texto:"Con amigos y/o roomies", imagen: Conamigos },
    ]
  },
  {
    pregunta: "¿Cómo imaginas un día perfecto en casa?",
    descripcion: "Tu casa ideal se vive en los pequeños momentos. ¿Cuál se parece más a los tuyos?",
    opciones: [
      { texto: "Cocinando algo rico y compartiendo", icono: FaUtensils },
      { texto: "Trabajando en un rincón tranquilo", icono: FaLaptopHouse },
      { texto: "Tomando sol en una terraza o jardín", icono: FaSun },
      { texto: "Jugando con mis hijos o mascotas", icono: FaDog },
    ]
  },
  {
    pregunta: "¿Compartes tu vida con alguna mascota, o te gustaría hacerlo?",
    descripcion: "¿Hay patitas, maullidos o plumitas en tu futuro?",
    opciones: [
      { texto: "Sí, tengo una mascota", icono: FaPaw },
      { texto: "Me encantaría vivir con una mascota", icono: FaHeart},
      { texto: "Tengo o quiero otros animales que no sean gatos o perros", icono: FaFish },
      { texto: "Prefiero un hogar sin mascotas", icono: FaMinusCircle },
    ]
  },
  {
    pregunta: "Si tu hogar tuviera una “personalidad”, sería...",
    descripcion: "Las casas también hablan. ¿Qué estilo dice más de ti?",
    opciones: [
      { texto: "Minimalista, práctico y cálido", icono: FaStream },
      { texto: "Familiar, funcional y adaptable", icono: FaUsers },
      { texto: "Creativo, amplio y lleno de rincones", icono: FaLightbulb },
      { texto: "Natural, luminoso y abierto", icono: FaSeedling },
    ]
  },
  {
    pregunta: "¿Qué sensación te gustaría tener al mirar por la ventana?",
    descripcion: "Lo que ves afuera también transforma lo que sientes por dentro.",
    opciones: [
      { texto: "Ver árboles, plantas o naturaleza", icono: FaMountainSun},
      { texto: "Ver movimiento, ciudad y actividad", icono: FaCity },
      { texto: "Ver un parque, vecindario tranquilo", icono: FaTree },
      { texto: "No me interesa, mientras me sienta a gusto", icono: FaBed },
    ]
  },
  {
    pregunta: "¿Sueles necesitar espacio extra para guardar cosas o hobbies?",
    descripcion: "Un hogar debe tener espacio para lo que amas... y para lo que aún no sabes que amarás.",
    opciones: [
      { texto: "Sí, tengo bicicletas, herramientas, etc.", icono: FaBicycle },
      { texto: "A veces, pero me las arreglo", icono: FaBoxes },
      { texto: "No, no necesito mucho espacio extra", icono: FaCompress},
    ]
  },
  {
    pregunta: "¿Qué entorno te hace sentir más en casa?",
    descripcion: "No se trata solo de la casa, sino de lo que la rodea. ¿Qué te hace sentir en tu lugar?",
    opciones: [
      { texto: "Ciudad, vida activa, todo cerca", icono: FaCity },
      { texto: "Naturaleza, aire puro, tranquilidad", icono: FaMountain },
      { texto: "Un vecindario familiar y tranquilo", icono: FaHome },
    ]
  },
  {
    pregunta: "Al salir de casa por la mañana, ¿qué es lo primero que haces?",
    descripcion: "Tus rutinas hablan de ti. Queremos que tu casa se adapte a ellas, no al revés.",
    opciones: [
      { texto: "Disfruto mientras salgo a caminar o trotar", icono: FaWalking },
      { texto: "Llevo a mis hijos al colegio", icono: FaSchool },
      { texto: "Me dirijo a la estación de transporte", icono: FaBus },
      { texto: "Compro mi desayuno en una tienda cercana", icono: FaCoffee},
    ]
  }
];

export default preguntasFormulario;
