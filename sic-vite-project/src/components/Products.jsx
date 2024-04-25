import React from 'react'
import { motion } from  "framer-motion";
import Slide from './ui/Slide';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y:100,
  },
  animate: {
    opacity: 1,
    y:0,
  },
}
const Products = () => {
  return (
    <section id="products">
      <Slide>
        <div className="py-20 bg-fixed bg-cover bg-center layered-wave-4-img">
          <div className="text-center px-5 sm:px-8 md:px-10">
            <h1 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-clip bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent">Products</h1>
            <p className="py-5 text-xl lg:text-xl text-primary/80">We integrate the systems by using Quality products like Emerson, Schmersal, Sensotech,Gestra, Siemens, Jumo, Yokogawa, Dembla, C&S, Honeywell, Yamatake, P&F, Valmet, Fouress, Forbes Marshall, Omron, etc.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-10">
            <motion.div 
                className="p-4 max-w-md"
                variants={fadeInAnimationVariants}
                initial= "initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                transition={{delay: 0.4}}
              >
                <div className="flex rounded-lg h-full bg-[#040D12] p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#311D3F] text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-white dark:text-white text-lg font-bold">Product Supply Group</h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="product-list"> 
                      <ul>
                        <li><span>Temperature controllers, Indicators, Process Recorders, Transmitters, Flow meters</span></li>
                        <li><span>Level switches, Flow switches, Temperature sensors, I/P convertors</span></li>
                        <li><span>Pressure Transmitters,Differential Pressure Transmitter, Votex Flow Meters , Magnetic Flow Meters etc</span></li>
                        <li><span>Temperature & Pressure gages, Safety Interlock</span></li>
                        <li><span>Safety Fence, Safety PLC</span></li>
                        <li><span>Control valves, Flame sensors, Modutrol motors</span></li>
                        <li><span>Micro switches, Relays, Power Supply Units,Basic switches, Limit switches</span></li>
                        <li><span>Transformers, Micro-Processor Trainer Kits</span></li>
                      </ul>
                    </div>   
                  </div>
                </div>
            </motion.div>
            <motion.div 
                className="p-4 max-w-md"
                variants={fadeInAnimationVariants}
                initial= "initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                transition={{delay: 0.4}}
              >
                <div className="flex rounded-lg h-full bg-[#040D12] p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#311D3F] text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-white dark:text-white text-lg font-bold">Process Automation Products</h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="product-list"> 
                      <ul>
                        <li><span>Temperature/ Pressure/ Flow Measurement Controller/ Indicator</span></li>
                        <li><span>Temperature/ Pressure/ Flow Sensor( RTDs), Thermocouples</span></li>
                        <li><span>Pressure Transmitters,Differential Pressure Transmitter, Votex Flow Meters , Magnetic Flow Meters etc</span></li>
                        <li><span>Consistency/ Density Measurement Systems</span></li>
                        <li><span>Programmable Controllers / Circular Chart Recoreder / Strip Chart Recorder / Paperless Recorder etc</span></li>
                        <li><span>Limit Switches , Hall effect Sensor , Encoders , Speed Sensors , Power Amplifiers etc</span></li>
                        <li><span>Pressure Gauges & Vacuum Gauges, Dial Thermometers & Thermocouples</span></li>
                      </ul>
                    </div>   
                  </div>
                </div>
            </motion.div>
            <motion.div 
                className="p-4 max-w-md"
                variants={fadeInAnimationVariants}
                initial= "initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                transition={{delay: 0.4}}
              >
                <div className="flex rounded-lg h-full bg-[#040D12] p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-[#311D3F] text-white flex-shrink-0">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="text-white dark:text-white text-lg font-bold">Sensors & Safety Products</h2>
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div className="product-list"> 
                      <ul>
                        <li><span>Proximity, Inductive, Capacitice, Slot Sensors</span></li>
                        <li><span>Safety Fence, Safety PLC, Safety Interlocks, Door Switches, Limit Switches</span></li>
                        <li><span>ASI Modules, Signal Isolators, Intrinsically Safety Barriers</span></li>
                      </ul>
                    </div>   
                  </div>
                </div>
            </motion.div>
          </div>
        </div>
      </Slide>
    </section>
  )
}

export default Products