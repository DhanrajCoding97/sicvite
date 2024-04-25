import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Slide from "./ui/Slide";
import { IoMdCall, IoIosMail } from "react-icons/io";
import { FaHome } from "react-icons/fa";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_i1iop82",
        "template_qjmx44s",
        {
          from_name: form.name,
          to_name: "SIC",
          from_email: form.email,
          to_email: "dhanrajcoding@gmail.com",
          message: form.message,
        },
        "hk_2xTMSyPRZUVffJ"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
return (
  <section id="contact">
    <Slide >
      <div className="py-20 bg-fixed bg-cover bg-center layered-wave-1-img">
      <h1 className="text-center font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-clip bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent">Contact.</h1>
        <div
          className={`flex xl:flex-row flex-col xl:justify-evenly xl:gap-0 gap-10 pt-3`}
        >
          <div
            className='lg:flex-[0.75] bg-black-100 p-8 bg-black lg:rounded-3xl'
          >
            <h2 className="text-center sm:text-[18px] text-[14px] text-primary uppercase tracking-wider">Get in touch</h2>
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              autoComplete="off"
                className='mt-12 flex flex-col gap-9'
            >
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Name</span>
                <input
                  autoComplete="off"
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium focus:text-black'
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your email</span>
                <input
                  autoComplete="off"
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium focus:text-black'
                  required
                />
              </label>
              <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>Your Message</span>
                <textarea
                  rows={7}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  className='bg-tertiary py-4 px-6 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium focus:text-black'
                  required
                />
              </label>

              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                type='submit'
                className='bg-black hover:bg-purple-600 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary cursor-pointer self-center lg:self-auto'
              >
                {loading ? "Sending..." : "Send"}
              </motion.button>
            </form>
          </div>
          <div className="p-8 flex flex-col gap-5 lg:mx-0 bg-black min-[430px]:rounded-3xl max-w-[700px] self-center">
            <address className="flex gap-2 items-start text-primary sm:text-[18px] text-[14px]"><FaHome size={25}/> 2914/A, 13th Main Rd, D-Block, E block, 2nd Stage, <br/> Rajajinagar, <br/> Bengaluru, Karnataka 560010</address>
            <a href="tel:+918454994139" className="flex gap-2 items-center text-primary sm:text-[18px] text-[14px] hover:text-purple-600 duration-500"><IoMdCall size={25} />Call Now</a>
            <a href="mailto:star_ic@rediffmail.com" className="flex gap-2 items-center text-primary sm:text-[18px] text-[14px] hover:text-purple-600 duration-500"><IoIosMail size={25} /> Email Us</a>
            <div className="max-w-3xl">
              <iframe 
                className="w-full" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.493656626121!2d77.55590527571528!3d13.004204914161292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d86daec7ed1%3A0x91e936c4a674e8d!2sStar%20Instruments%20%26%20Controls!5e0!3m2!1sen!2sin!4v1704807551802!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{borderRadius: "25px", border: 0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>  
        </div>
      </div>
    </Slide>
  </section>
);
};

export default ContactForm