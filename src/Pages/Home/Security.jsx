import logo from '../../assets/images/google-logo.jpg';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';



const Security = () => {
  return (
    <>
      <section  className="w-full h-2/6  pt-3 mb-5 " style={{ borderRadius:"5px 5px 5px 5px" }}>
        <div className="container mx-auto ">
           <div className="pb-4">
            <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-2">Trusted by <span className='text-blue-600/100'>open</span>, aired out of companies</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, temporibus.</p>
            
            <div className=" mt-3 ">  
                <Swiper 
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    pagination={{
                    // clickable: true,
                    loop: true,
                    }}
                    modules={[FreeMode,Autoplay]}
                    className="mySwiper" >
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={logo} alt="" style={{ width:"150px", height:"auto" }} /></SwiperSlide>
                </Swiper>
            </div>
           </div>
        </div>
      </section>
    </>
  )
}

export default Security;
