import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

// 1JJvKvM4YjgN15ROy
// template_xqjh6vs
// service_dds7zui

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        "service_dds7zui",
        "template_xqjh6vs",
        {
          from_name: form.name,
          to_name: "Hong Yang",
          from_email: form.email,
          to_email: "aa200205233@gmail.com",
          message: form.message,
        },
        "1JJvKvM4YjgN15ROy"
      )
      .then(() => {
        setIsLoading(false);
        alert("Thank you! I will get back to as soon as possible");
        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setIsLoading(false);
            console.log(error);
            alert("Something went wrong.")
          }
        );
      });
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.65] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={submitHandler}
          className="mt-12 flex flex-col gap-8"
        >
          <div className="flex flex-col">
            <label className="text-white font-medium mb-4">Name</label>
            <input
              type="text"
              name="name"
              placeholder={`what's your name`}
              value={form.name}
              onChange={changeHandler}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-medium mb-4">Email</label>
            <input
              type="email"
              name="email"
              placeholder={`what's your email`}
              value={form.email}
              onChange={changeHandler}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-medium mb-4">Message</label>
            <textarea
              rows={7}
              name="message"
              placeholder={`what's your MESSAGE for me`}
              value={form.message}
              onChange={changeHandler}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </div>
          <button className="bg-tertiary w-fit py-3 px-8 outline-none font-bold text-white rounded-md shadow-md shadow-primary self-center">
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
