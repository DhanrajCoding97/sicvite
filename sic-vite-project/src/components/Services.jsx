import React from 'react';
import { motion } from  "framer-motion";
import Slide from './ui/Slide';

const cardVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

const Services = () => {
  return (
    <section id="services">
      <Slide>
        <div className="py-20 bg-fixed bg-cover bg-center layered-wave-2-img">
          <div className="text-center px-5 sm:px-8 md:px-10">
            <h1 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-clip bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent">Services</h1>
            <p className="py-5 text-xl lg:text-xl text-primary/80">
              We do sales / services of all kinds of Instrumentation / Automation products like Indicators, Process Recorders, Transmitters, Flow meters, etc.
            </p>
          </div>
          <motion.div className="flex flex-wrap justify-center mt-10" 
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="p-4 max-w-sm"
              variants={item}
            >
              <div className="flex rounded-lg h-full dark:bg-violet-900 bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-violet-400 bg-violet-400 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white dark:text-white text-xl font-bold">Pulp & Paper Industries</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="list"> 
                    <ul>
                      <li><span>Pulp flow rate control system</span></li>
                      <li><span>Consistency control system</span></li>
                      <li><span>Temperature control systems at drying cylinders.</span></li>
                      <li><span>Steam pressure reducing & controlling systems</span></li>
                      <li><span>Steam flow rate indicating & totalizing systems.</span></li>
                      <li><span>Moisture & basis weight control systems.</span></li>
                    </ul>
                  </div>   
                </div>
              </div>
            </motion.div>
            <motion.div 
            className="p-4 max-w-sm" 
            variants={item}
            >
              <div className="flex rounded-lg h-full dark:bg-violet-900 bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-violet-400 bg-violet-400 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white dark:text-white text-xl font-bold">Sugar Mills</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="list"> 
                    <ul>
                      <li><span>Electronic weigh bridge</span></li>
                      <li><span>Conductivity measurement & control systems for batch & continuous pan</span></li>
                      <li><span>pH measurement & control at process, feed water etc</span></li>
                      <li><span>Imbibition water flow metering systems</span></li>
                      <li><span>Juice flow rate control systems before evaporators</span></li>
                      <li><span>Centrifuge control systems.</span></li>
                    </ul>
                  </div>   
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="p-4 max-w-sm"
              variants={item}
            >
              <div className="flex rounded-lg h-full dark:bg-violet-900 bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-violet-400 bg-violet-400 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white dark:text-white text-xl font-bold">Distilleries & Breweries</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="list"> 
                    <ul>
                      <li><span>Digital temperature control & recording system for distillation column</span></li>
                      <li><span>Steam flow rate indicating & controlling systems</span></li>
                      <li><span>Molasses dilution control systems</span></li>
                      <li><span>Wash flow rate indicating & controlling systems</span></li>
                      <li><span>Boiler instrumentation & automation</span></li>
                    </ul>
                  </div>   
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="p-4 max-w-sm"
              variants={item}
            >
              <div className="flex rounded-lg h-full dark:bg-violet-900 bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-violet-400 bg-violet-400 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white dark:text-white text-xl font-bold">Pharmaceuticals</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="list"> 
                    <ul>
                      <li><span>Hydrogenator pressure control system with N2 purging</span></li>
                      <li><span>Hydrogenator sampling system with key operated ball valve</span></li>
                      <li><span>Weighing System</span></li>
                    </ul>
                  </div>   
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="p-4 max-w-sm"
              variants={item}
            >
              <div className="flex rounded-lg h-full dark:bg-violet-900 bg-teal-400 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-violet-400 bg-violet-400 text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                      strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white dark:text-white text-xl font-bold">Food Industries</h2>
                </div>
                <div className="flex flex-col justify-between flex-grow">
                  <div className="list"> 
                    <ul>
                      <li><span>Consistency/ Density control systems</span></li>
                      <li><span>Pasteurisation Loops</span></li>
                      <li><span>Temperature control systems for food pulp</span></li>
                      <li><span>Food pulp flow control systems</span></li>
                      <li><span>pH measurement & control systems</span></li>
                    </ul>
                  </div>   
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Slide>
    </section>
  )
}

export default Services