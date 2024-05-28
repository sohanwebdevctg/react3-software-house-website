import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';



import retailer from '../../public/demo/retailer.jpeg'
import ecommerce from '../../public/demo/ecommarce.png'
import { Link } from 'react-router-dom';


function OurDemo() {
    return (
        <div>
            {/* title  */}
            <div className="container mx-auto" >
                <div className="grid grid-cols-1 text-center mb-2 md:mb-3 lg:mb-5" >
                    < h2 className="text-center font-semibold  md:font-bold xl:font-bold text-xl sm:text-3xl md:text-3xl xl:text-4xl mb-1 " > Our Products </h2>
                    <div className="flex justify-center mb-2 md:mb-4 lg:mb-4"><h2 className="bg-red-500 w-[32%] sm:w-[32%] md:w-[26%] lg:w-52 h-[1px] rounded"></h2 > </div>
                </div>
            </div>
            {/* demo  */}
            <div className='container mx-auto my-6 mb-8'>
                <div className="grid gap-4  grid-cols-1 md:grid-cols-2  ">
                    {/* p 1  */}
                    <div className='decoration-slate-500 px-1'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <div className='p-2'>
                                    <img className='w-full h-full lg:h-96 xl:h-96 rounded shadow-lg chat-notification-logo' src={retailer} alt="Retailer pos" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='p-2'>
                                    <img className='w-full h-full lg:h-96 xl:h-96 rounded shadow-lg chat-notification-logo' src={retailer} alt="Retailer pos" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='p-2'>
                                    <img className='w-full h-full lg:h-96 xl:h-96 rounded shadow-lg chat-notification-logo' src={retailer} alt="Retailer pos" />
                                </div>
                            </SwiperSlide>
                            <button className="btn btn-sm sm:btn-md md:btn-sm lg:btn-md btn-neutral flex justify-center mx-auto mt-2">
                                <Link to="https://retailer-pos.xcode.com.bd/">Preview</Link>
                            </button>
                        </Swiper>
                    </div>
                    
                    {/* p 2 */}
                    <div className='decoration-slate-500 px-1'>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide>
                        <div className='p-2'>
                            <img className='w-full h-full lg:h-96 xl:h-96 rounded shadow-lg chat-notification-logo' src={ecommerce} alt="Retailer pos" />
                                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-2'>
                            <img className='w-full h-full lg:h-96 xl:h-96 rounded shadow-lg chat-notification-logo' src={ecommerce} alt="Retailer pos" />
                                </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='p-2'>
                            <img className='w-full h-full lg:h-96 xl:h-96 rounded shadow-lg chat-notification-logo' src={ecommerce} alt="Retailer pos" />
                                </div>
                    </SwiperSlide>
                    </Swiper>
                    <button className="btn btn-sm sm:btn-md md:btn-sm lg:btn-md btn-neutral flex justify-center mx-auto mt-2">
                                <Link to="https://ecommerce.xcode.com.bd/">Ecommerce</Link>
                            </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OurDemo
