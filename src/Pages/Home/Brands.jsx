
import img1 from '../../../public/brands/img1.png'
import img2 from '../../../public/brands/img2.png'
import img3 from '../../../public/brands/img3.png'
import img4 from '../../../public/brands/img4.png'
import img5 from '../../../public/brands/img5.png'
import img6 from '../../../public/brands/img6.png'
import img7 from '../../../public/brands/img7.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';



const Brands = () => {
  return (
    <>
      <section  className="w-full h-2/6  pt-8 mb-6 px-6 sm:px-4 lg:px-0 2xl:px-0" style={{ borderRadius:"5px 5px 5px 5px" }}>
        <div className="container mx-auto ">
           <div className="pb-4">
            <h2 className="text-center text-3xl xl:text-4xl 2xl:text-4xl font-bold tracking-tight text-gray-900 sm:text-2xl mb-2" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Trusted by <span className='text-blue-600/100'>open</span>, aired out of companies</h2>
            <p className='text-center mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, temporibus.</p>
            
            {/* <div className="mt-6 ">  
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
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img1} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img2} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img3} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img4} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img5} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img6} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img7} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img3} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                    <SwiperSlide><img className='rounded shadow-md mx-2 mb-5' src={img5} alt="" style={{ width:"150px", height:"100px" }} /></SwiperSlide>
                </Swiper>
            </div> */}

<div className="mt-6">
      <Swiper
        spaceBetween={20}
        freeMode={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          loop: true,
        }}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 4,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 5,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 6,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        <SwiperSlide>
          <img
            className='rounded shadow-md mx-2 mb-5'
            src={img1}
            alt=""
            style={{ width: "150px", height: "100px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded shadow-md mx-2 mb-5'
            src={img2}
            alt=""
            style={{ width: "150px", height: "100px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded shadow-md mx-2 mb-5'
            src={img3}
            alt=""
            style={{ width: "150px", height: "100px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded shadow-md mx-2 mb-5'
            src={img4}
            alt=""
            style={{ width: "150px", height: "100px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded shadow-md mx-2 mb-5'
            src={img5}
            alt=""
            style={{ width: "150px", height: "100px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded shadow-md mx-2 mb-5'
            src={img6}
            alt=""
            style={{ width: "150px", height: "100px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded shadow-md mx-2 mb-5'
            src={img7}
            alt=""
            style={{ width: "150px", height: "100px" }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='rounded shadow-md mx-2 mb-5'
            src={img3}
            alt=""
            style={{ width: "150px", height: "100px" }}
          />
        </SwiperSlide>
        {/* Include other SwiperSlides similarly */}
      </Swiper>
    </div>

           </div>
        </div>
      </section>
    </>
  )
}

export default Brands;
