import React from 'react'
import { Link } from 'react-scroll'
import Slide from './ui/Slide'
const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-black to-black/5'>
      <Slide>
        <div className="footer">
          <div className="row">
            <ul>
              <li>
                <Link 
                  to="hero" 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500}  
                  className="text-xl font-bold hover:text-[#66c3e3] cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  spy={true} 
                  smooth={true} 
                  offset={-50} 
                  duration={500}
                  className="text-xl font-bold hover:text-[#66c3e3] cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="services"
                  spy={true} 
                  smooth={true} 
                  offset={-50} 
                  duration={500}
                  className="text-xl font-bold hover:text-[#66c3e3] cursor-pointer"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="products"
                  spy={true} 
                  smooth={true} 
                  offset={-50} 
                  duration={500}
                  className="text-xl font-bold hover:text-[#66c3e3] cursor-pointer"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                to="contact"
                spy={true} 
                smooth={true} 
                offset={-50} 
                duration={500}
                className="text-xl font-bold hover:text-[#66c3e3] cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="row">
            <h2 className="text-xl font-bold">Star Instruments & Control © 2023 
              <br /> 
              All rights reserved
            </h2>
          </div>
        </div>
      </Slide>
    </footer>
  )
}

export default Footer