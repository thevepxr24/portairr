import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <section className="relative w-full mx-auto h-[30vh] md:h-[20vh] sm:h-[15vh] bg-hero-pattern bg-cover bg-no-repeat bg-center">
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hola, Soy <span className="text-[#46E61F]">Irving</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <Typewriter
              options={{
                strings: ["Ingeniero en Computación Gráfica", "Slot Accounting System SAS", "Desarrollador Web","Full Stack Developer","Video Game Developer","Administrador de bases de datos"],
                autoStart: true,
                loop: true,
                loopCount: Infinity,
                deleteSpeed: "fast",
                pauseFor: 1500,
              }}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
