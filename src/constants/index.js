import { spring } from "framer-motion";
import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  csharp,
  movimientociudadano,
  hexawareTechnologis,
  dreidel,
  poderjudicial,
  springboot,
  unity,
  unreal,
  azure,
  postgresql,
  sap,
  visualstudio,
  intellij,
  sourcetree,
  mongodb,
  sae,
  unam,
  diplodb,
  dipvideogame,
  udem,
  gis,
  tablerospoliticos,
  sascabinet,
  slots,
  bingos,
  zombilaquita
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mi",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  
  {
    id: "education",
    title: "Educación",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

export const services = [
  { title: "C#", icon: csharp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
  { title: "Javascript", icon: javascript },
];

export const technologies = [
  { name: "React", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Springboot", icon: springboot },
  { name: "git", icon: git },
  { name: "Unity 3D", icon: unity },
  { name: "Unreal Engine", icon: unreal },
  { name: "HTML 5", icon: html },
  { name: "CSS 6", icon: css },
  { name: "Azure", icon: azure },
  { name: "PostgreSQL", icon: postgresql },
  { name: "Sybase SAP", icon: sap },
  { name: "Visual Studio Code", icon: visualstudio },
  { name: "IntelliJ", icon: intellij },
  { name: "Sourcetree", icon: sourcetree },
  { name: "MongoDB", icon: mongodb },
];

export const universities = [  
  {
    title: "Maestría en Desarrollo y Programación de Videojuegos",
    company_name: "Universidad de Morelia | UDEM",
    icon: udem,
    iconBg: "#161329",
    date: "Agosto 2021 - Agosto 2023",
    points: [
      "Curse la maestria en Desarrollo de Videojuegos con Unity 3D y Unreal Engine.",
      "Obtuve la calificación máxima de 10",
      "Gestión de Proyectos con PMI ",
      "Realidad Virtual con Oculus",
    ],
  },
  {
    title: "Ingeniero en Computación",
    company_name: "Universidad Nacional Autónoma de México | UNAM",
    icon: unam,
    iconBg: "#161329",
    date: "Agosto 2012 - Diciembre 2016",
    points: [
      "Estudie la carrera de Ingenieria en Computación en la Facultad de Ingeniería.",
      "Me especialice en las materias de Computación Gráfica e Inteligencia Artificial.",
      "Participe en proyectos extracurriculares con los grupos de: Sodvi(Sociedad de desarrollo de Videojuegos), BioRobotics Facultad de Ingeniería",
    ],
  },
  {
    title: "Diplomado en Administración de Base de Datos",
    company_name: "UNAM Facultad de Ingeniería",
    icon: diplodb,
    iconBg: "#161329",
    date: "Agosto 2017 - Enero 2018",
    points: [
      "Realice un diplomado en Administración de bases de datos con Sybase SAP.",
      "Diseño de base de datos.",
      "Consultas en bases de datos relacionales SQL",
      "Administración de base de datos y optimización",
      "Bases de datos no relacionales con MongoDB",
    ],
  },
  {
    title: "Diplomado en Desarrollo de Videojuegos",
    company_name: "UNAM Facultad de Ingeniería",
    icon: dipvideogame,
    iconBg: "#161329",
    date: "Enero 2016 - Agosto 2016",
    points: [
      "Realice un diplomado en Desarrollo de videojuegos con Unity 3D",
      "Diseño de un videojuego.",
      "Modelado y Animación de personajes con Blender",
      "Programación de Videojuegos con Unity 3D y C#",
    ],
  },
]


export const experiences = [
  {
    title: "Backend Developer",
    company_name: "Movimiento Ciudadano",
    icon: movimientociudadano,
    iconBg: "#161329",
    date: "Enero 2023 - Diciembre 2024",
    points: [
      "Desarrollo de paginas Web con las tecnologias de React, Angular y Javascript. Creacion de API y end points con java, Net Core. Bases de datos con MySQL.",
      "Implementación de Inteligencia geoespacial politica desplegada en paginas web para focalizar sociedades con vulnerabilidades en busca de oportunidades para el partido.",
      "Registro de aspirantes a candidaturas a nivel nacional y conteo de respaldos a los mismos. Participe en la creacion del Metaverso Naranja para el registro y computo de respaldos y firmas electronicas para los candidatos a nivel nacional.",
      "Gerente del Area de Soporte Tecnico y difusion de campañas a traves de redes sociales y bots de campañas."
    ],
  },
  {
    title: "Backend Developer Java",
    company_name: "Hexaware Technologies",
    icon: hexawareTechnologis,
    iconBg: "#161329",
    date: "Marzo 2022 - Diciembre 2022",
    points: [
      "Desarrollo de aplicaciones web con Java y Springboot.",
      "Creación de microservicios RESTful",
      "Desarrollo de aplicaciones web con Angular y React.",
      "Creacion de pruebas unitarias y de integración.",
      "Servicios de consultoria para la industria Hipotecaria Fannie Mac en Estados Unidos"
    ],
  },
  {
    title: "Profesor Programación",
    company_name: "SAE Institute|Artek|EsDIE",
    icon: sae,
    iconBg: "#161329",
    date: "Enero 2022 - Eventual",
    points: [
      "Introducción a la Ciberseguridad y Hardware",
      "Programación de Videojuegos",
      "Programación Orientada a Objetos Java",
      "Programación de Videojuegos Móviles",
      "Usabilidad y Game Experience",
      "Introducción a las Bases de datos relacionales",
    ],
  },
  {
    title: "Sr Game Engineer",
    company_name: "Dreidel Interactive",
    icon: dreidel,
    iconBg: "#161329",
    date: "Enero 2017 - Febrero 2022",
    points: [
      "Colaborador del proyecto SAS (Slot Accounting System). Desarrolle códigos de comunicación entre los sistemas de cajas de casinos y los videojuegos (en Unity) para juegos de Slots y Bingos. ",
      "Encargado de proteger y salvar la información sensible de las jugadas para su correcta recuperación. Participe en la creación de minijuegos para dar bonos a los participantes. Realizados en la plataforma de Unity 3D. ",
      "Cree la comunicación entre gabinetes para las aportaciones de los premios de Jackpots entre las máquinas de la compañía Utilizando las herramientas de MongoDB y .NET ",
    ],
  },
  {
    title: "Becario de Programación",
    company_name: "Consejo de la Judicatura Federal",
    icon: poderjudicial,
    iconBg: "#161329",
    date: "Enero 2015 - Agosto 2015",
    points: [
      "Sistemas de pruebas de Firmas digitales online.",
    ],
  },
];

export const projects = [
  {
    name: "Centro de Inteligencia geoespacial GIS",
    description:
      "Sistema de referencia geoespacial con mapas del Instituto Nacional Electoral INE y censos de población del INEGI",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "Postgres", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
      { name: "leaftlet", color: "blue-text-gradient" },
      { name: "Google Maps API", color: "blue-text-gradient" },
    ],
    image: gis,
    source_code_link: "https://gis.ciudadanosenmovimiento.org/",
  },
  {
    name: "Tableros Politicos Inteligentes",
    description:
      "El Sistema de Gráficas y Mapas es una plataforma interactiva diseñada para ofrecer una visión detallada del estado actual de una región y su población en México. Este sistema combina herramientas visuales como gráficos y mapas para proporcionar información precisa y actualizada sobre diversos aspectos sociales, económicos y demográficos. Además, incluye un módulo especializado para analizar los resultados de las votaciones realizadas en los últimos años, permitiendo observar tendencias y patrones electorales de manera clara y comprensible.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "React", color: "green-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "Postgres", color: "green-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "bootstrap", color: "pink-text-gradient" },
      { name: "leaftlet", color: "blue-text-gradient" },
    ],
    image: tablerospoliticos,
    source_code_link: "https://gis.ciudadanosenmovimiento.org/tablerosia/",
  },
  {
    name: "SAS Slot Accounting System",
    description:
      "Desarrollo y programación de sistemas especializados para la gestión de cobros y pagos en gabinetes de casino. Estos sistemas garantizan transacciones rápidas, seguras y precisas, optimizando la experiencia del usuario y facilitando la operación del casino. Incluyen funcionalidades como registro de ingresos, pagos automáticos, control de saldo en tiempo real y generación de reportes financieros. Además, se integran con tecnologías de hardware, como lectores de tarjetas y dispositivos de pago, asegurando compatibilidad y cumplimiento con normativas del sector. Diseñados con interfaces intuitivas y altos estándares de seguridad, estos sistemas son esenciales para garantizar una operación eficiente y transparente en el entorno de los casinos.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "C#", color: "green-text-gradient" },
      { name: "Unity 3D", color: "pink-text-gradient" },
      { name: "Windows Forms", color: "pink-text-gradient" },
      { name: "SAS", color: "pink-text-gradient" },
      { name: "Gambling", color: "pink-text-gradient" },
      { name: "NVRAM", color: "pink-text-gradient" },
    ],
    image: sascabinet,
    source_code_link:
      "https://www.google.com.mx",
  },
  {
    name: "Slots",
    description:
      "Desarrollo de videojuegos de Slots para casinos en Latinoamérica y Norteamérica, con integración de servidores locales para gestionar premios acumulativos, optimizando la experiencia de juego y la operación del sistema.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "C#", color: "green-text-gradient" },
      { name: "Unity 3D", color: "pink-text-gradient" },
      { name: "Windows Forms", color: "pink-text-gradient" },
      { name: "SAS", color: "pink-text-gradient" },
      { name: "Gambling", color: "pink-text-gradient" },
      { name: "NVRAM", color: "pink-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: slots,
    source_code_link:  "https://www.google.com.mx",
  },
  {
    name: "Bingos",
    description:
      "Desarrollo de videojuegos de Bingos para casinos en Latinoamérica y Norteamérica. Gran experiencia de juego, bonos y operación del sistema.",
    tags: [
      { name: "C#", color: "green-text-gradient" },
      { name: "Unity 3D", color: "pink-text-gradient" },
      { name: "Gambling", color: "pink-text-gradient" },
    ],
    image: bingos,
    source_code_link:  "https://www.google.com.mx",
  },
  {
    name: "Zombilaquita VR",
    description:
      "Videojuego de Realidad Virtual para Oculus Quest 2 inspirado en la riqueza de la cultura mexicana. Sumérgete en una emocionante aventura donde recorrerás el centro histórico y los túneles del metro mientras huyes de peligros inesperados. Vive la adrenalina al máximo en un entorno vibrante y lleno de detalles culturales únicos.  ",
    tags: [
      { name: "C#", color: "blue-text-gradient" },
      { name: "Unity 3D", color: "green-text-gradient" },
      { name: "Unreal Engine", color: "pink-text-gradient" },
      { name: "Blueprint", color: "pink-text-gradient" },
      { name: "Oculus Quest 2", color: "pink-text-gradient" },
    ],

    image: zombilaquita,
    source_code_link: "https://www.youtube.com/watch?v=Qq-v7zwejeg&t=207s",
  },
];
