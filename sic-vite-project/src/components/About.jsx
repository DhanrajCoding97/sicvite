import React from 'react'
import Slide from './ui/Slide';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import "../App.css"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

// import slider images
import slide_image_1 from "../assets/sugar.webp"
import slide_image_2 from "../assets/distillery.webp"
import slide_image_3 from "../assets/food.webp"
import slide_image_4 from "../assets/cement.webp"
import slide_image_5 from "../assets/paper.webp"
import slide_image_6 from "../assets/machine.webp"


const About = () => {
  return (
    <section id="about">
      <Slide>
        <div className="py-20 bg-fixed bg-cover bg-center layered-wave-3-img">
          <div className="text-center px-5 sm:px-8 md:px-10">
            <h1 className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-clip bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent">About us</h1>
            <p className="py-5 text-lg lg:text-xl text-primary">Star Instruments & Control is a company backed by a team of qualified & experienced engineers specialized in Process and Industrial Automation  We take up turnkey projects in Control & Automation Projects for Process Industries like
            </p>
          </div>
          <div className="container">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              coverflowEffect={{
                rotate: 50,
                stretch: -100,
                depth: 500,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay= {{
                delay: 2500,
                disableOnInteraction: false,
              }}
                
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <div className="swiper-wrapper">
                <SwiperSlide>
                  <img src={slide_image_1} alt='Sugar Industry'/>
                  <h2 className='bg-white text-black p-2 text-center font-bold'>Sugar Industry</h2>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_2} alt='Distillery'/>
                  <h2 className='bg-white text-black p-2 text-center font-bold'>Distillery</h2>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_3} alt='Food Industry'/>
                  <h2 className='bg-white text-black p-2 text-center font-bold'>Food Industry</h2>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_4} alt='Cement'/>
                  <h2 className='bg-white text-black p-2 text-center font-bold'>Cement</h2>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_5} alt='paper board industry'/>
                  <h2 className='bg-white text-black p-2 text-center font-bold'>Paper Board Industry</h2>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={slide_image_6} alt='Machine Tool Industry'/>
                  <h2 className='bg-white text-black p-2 text-center font-bold'>Machine Tool Industry</h2>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://as2.ftcdn.net/v2/jpg/04/36/19/69/1000_F_436196943_412LsoLzCWUrLFCakIuWgA1eFQNu0afv.jpg" alt='Milk Industry'/>
                  <h2 className='bg-white text-black p-2 text-center font-bold'>Milk Industry</h2>
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
            <h2 className="text-center font-bold text-3xl text-clip bg-gradient-to-r from-purple-600 to-blue-300 bg-clip-text text-transparent">Our Customers</h2>
            <div className="list">
            <div className="p-5 flex-col lg:flex lg:flex-row gap-10">
            <ul>
              <li><span>Ranna Sugars, Mudhol</span></li>
              <li><span>Hira Sugars, Sankeshwar Belgaum</span></li>
              <li><span>Prabhulingeshwar Sugars, Siddapur Jamkhandi</span></li>
              <li><span>Millenium Starch, Athani, Belgaum</span></li>
              <li><span>Shivshakti Sugars , Yadrav ,Belgaum</span></li>
              <li><span>Solara Pharma ( Formerly Sequent Scientific)</span></li>
              <li><span>Mangalore Refineries & Petrochemicals Ltd, Mangalore</span></li>
            </ul>
            <ul>
              <li><span>Ruchi Soya Industries, Mangalore</span></li>
              <li><span>Adani Wilmar, Mangalore</span></li>
              <li><span>Sequent Scientific, Mangalore</span></li>
              <li><span>Metal Closures Pvt Ltd, Bangalore</span></li>
              <li><span>Group Pharmaceuticals, Malur Kolar District</span></li>
              <li><span>Networth Controls, Bangalore</span></li>
              <li><span>Kewaunee Scientific India Ltd, Bangalore  </span></li>
            </ul>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  )
}

export default About