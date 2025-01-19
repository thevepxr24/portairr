import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { me } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div>
          <h2 className={styles.sectionHeadText}>Sobre mi:</h2>
        </div>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <motion.img
          src={me}
          className="w-full md:w-1/2"
        />

        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-secondary text-white text-[17px] max-w-3xl leading-[30px] text-justify "
          style={{padding:"1rem"}}
        >
          Soy desarrollador de software con una profunda pasión por la tecnología y la ciencia.
          Me apasiona programar videojuegos en los motores gráficos como Unity y Unreal Engine. He lanzado videojuegos para casinos en Norteamérica con gran popularidad.
          Tambien he lanzado demos de videojuegos para Oculus Quest y algunos móbiles.
          Me gusta impartir catedra sobre desarrollo y diseño de videojuegos.
          <br></br>
          <br></br>
          He desarrollado aplicaciones con un enfoque en el impacto social, realizando análisis de carencias
          y oportunidades en comunidades vulnerables.
          <br/>
          <br/>
          He colaborado con equipos interdisciplinarios compuestos por profesionales de diversas culturas y especialidades.
          Cumplo con mis responsabilidades y obligaciones dentro de cada sprint del proyecto, apoyando y solicitando ayuda a
          compañeros cuando es necesario. Mi objetivo es entregar software de calidad, funcional y eficiente. Además, he tenido
          la oportunidad de impartir cátedra en una universidad privada, liderar equipos de desarrollo, así como equipos de
          soporte y mantenimiento, tanto a nivel nacional como internacional.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} className="w-full sm:w-1/2 lg:w-1/4" />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
