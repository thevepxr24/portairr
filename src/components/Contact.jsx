import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FiMail, FiCopy } from "react-icons/fi";
import { FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import "../index.css";

const InputField = ({ label, value, onChange, placeholder, name, type }) => (
  <label className="flex flex-col">
    <span className="text-white font-medium mb-4">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
    />
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setNameError("");
    setConfirmation("");

    if (!validateEmail(form.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    if (!form.name.trim()) {
      setNameError("Name is required.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_r2i0by4",
        "template_mf5x3bh",
        {
          from_name: form.name,
          to_name: "Irving Rocha",
          from_email: form.email,
          to_email: "irvingrocharesendiz@gmail.com",
          message: form.message,
        },
        "p-gXzzyvEhPaJ0XA-"
      )
      .then(
        () => {
          setLoading(false);
          setConfirmation("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      )
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setConfirmation("Something went wrong. Please try again. :/");
      });
  };

  const email = "irvingrocharesendiz@gmail.com";
  const phone = "(+52)5536511041";

  const handleSendEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleSendWhatsapp = () => {
    window.location.href = `https://web.whatsapp.com/send?phone=5215536511041&text=Hola Irving 👋🏻`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Muchas Gracias!!! Espero tu email para seguir en contacto 😀");
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+525536511041");
    alert("Muchas Gracias!!! Espero tu llamada 😀");
  };

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>A tus ordenes 🙋🏻‍♂️</p>
        <h3 className={styles.sectionHeadText}>Contactame</h3>



        <div className="mt-4 flex gap-4">
          <h2 className="text-white text-lg mt-4">{email}</h2>
          <button
            onClick={handleSendEmail}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Email
          </button>
          <FiCopy
            className="text-white cursor-pointer hover:text-gray-300 mt-4"
            size={24}
            onClick={handleCopyEmail}
            title="Copy Email"
          />
        </div>

        <div className="mt-4 flex gap-4">
          <h2 className="text-white text-lg mt-4">{phone}</h2>
          <button
            onClick={handleSendWhatsapp}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-600"
          >
            Whatsapp
          </button>
          <FiCopy
            className="text-white cursor-pointer hover:text-gray-300 mt-4"
            size={24}
            onClick={handleCopyPhone}
            title="Copy Phone"
          />
        </div>

        <div className="mt-6 flex gap-4">
          {/* YouTube Button */}
          <a
            href="https://www.youtube.com/@irvingrocha2613"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            <FaYoutube size={20} />
            YouTube
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/irving-rocha-resendiz-78533a79/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800"
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/thevepxr24"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </motion.div>



      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
