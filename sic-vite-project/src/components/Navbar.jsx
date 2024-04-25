import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { animateScroll as scroll, Link } from "react-scroll";
import logo from "../assets/icon.webp";

import { motion } from "framer-motion";
import { navVariants } from "../components/ui/motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#ffffff");

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#000000");
        setTextColor("#fff");
      } else {
        setColor("transparent");
        setTextColor("#18122B");
      }
    };
    window.addEventListener("scroll", changeColor, {passive:true});
  }, []);

  return (
    <header>
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed top-0 w-full z-10 ease-in duration-300"
    >
      <motion.div 
        className="m-auto flex justify-between items-center p-4"
        variants={navVariants}
        initial="hidden"
        whileInView="show"
      >
        <div className="flex" onClick={toggleHome}>
          <div id="logo-container" className="flex :hidden cursor-pointer">
            <a href="/">
              <img
                alt="Star Instruments & Control logo"
                src= {logo}
                onClick={toggleHome}
                width="50" 
                height="50"
              />
            </a>
          </div>
        </div>
        <ul className="hidden sm:flex" style={{ color: `${textColor}` }}>
          <li className="p-4 nav-item">
            <Link 
              to="hero" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}  
              className="font-bold hover:text-[#66c3e3] cursor-pointer">
              Home
            </Link>
          </li>
          <li className="p-4 font-bold hover:text-[#66c3e3] duration-200 cursor-pointer nav-item">
            <Link 
              to="about" 
              spy={true} 
              smooth={true} 
              offset={-20} 
              duration={500}>
              About
            </Link>
          </li>
          <li className="p-4 font-bold hover:text-[#66c3e3] cursor-pointer nav-item">
            <Link 
              to="services"
              spy={true} 
              smooth={true} 
              offset={-20} 
              duration={500}
            >
              Services
            </Link>
          </li>
          <li className="p-4 font-bold hover:text-[#66c3e3] cursor-pointer nav-item">
            <Link 
              to="products"
              spy={true} 
              smooth={true} 
              offset={0} 
              duration={500}
            >
              Products
            </Link>
          </li>
          <li className="p-4 font-bold hover:text-[#66c3e3] cursor-pointer nav-item">
            <Link 
              to="contact"
              spy={true} 
              smooth={true} 
              offset={40} 
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Mobile Button */}
        <div
          onClick={handleNav}
          className="block sm:hidden z-10 cursor-pointer"
        >
          {nav ? (
            <AiOutlineClose size={20} color="#512de5" />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 overflow-hidden"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 overflow-hiiden"
          }
        >
          <ul className="flex flex-col justify-center items-center gap-4 overflow-hidden">
            <li>
              <Link
                to="hero"
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}  
                onClick={handleNav}
                className="text-4xl text-accent font-bold hover:text-white ease-in duration-300 cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}  
                onClick={handleNav}
                className="text-4xl text-accent font-bold hover:text-white ease-in duration-300 cursor-pointer"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="services" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}  
                href="#services"
                onClick={handleNav}
                className="text-4xl text-accent font-bold hover:text-white ease-in duration-300 cursor-pointer"
              >
                Services
              </Link>
            </li>
            <li> 
              <Link
                to="products" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}  
                onClick={handleNav}
                className="text-4xl text-accent font-bold hover:text-white ease-in duration-300 cursor-pointer"
              >
               Products
              </Link>
            </li>
            <li>
              <Link
                to="contact" 
                spy={true} 
                smooth={true} 
                offset={-80} 
                duration={500}  
                onClick={handleNav}
                className="text-4xl text-accent font-bold hover:text-white ease-in duration-300 cursor-pointer"
               >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
    </header>
  )
}

export default Navbar