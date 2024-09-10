import { FaGooglePlay, FaApple } from "react-icons/fa";
import img from '../../../../public/available/img3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Available = () => {

  //AOS
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className='px-5 mt-20'>
      <section className="w-full h-2/6">
        <div className="container mx-auto px-5 bg-gradient-to-br from-indigo-50 to-cyan-50 md:mt-10 rounded-3xl overflow-hidden">
          <div className="sm:flex sm:justify-between sm:items-center px-3 py-6 sm:px-4 sm:py-6 md:px-3 md:py-8 lg:px-4 lg:py-7 xl:px-6 xl:py-8 2xl:px-8 2xl:py-10 gap-10 2xl:gap-16">
            {/* left item start */}
            <div className='sm:flex-1' data-aos="fade-right" data-aos-duration="1500">
              {/* title section start */}
              <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-3 font-bold tracking-tight text-gray-900 " style={{ textShadow: '2px 2px 5px rgb(99 102 241 / 0.5)' }}><span className='text-blue-600/100'>Available</span> on ISO & Android</h2>
              {/* title section end */}
              {/* description section star */}
              <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify">We suggests that compatible with both iOS & Android operating systems. Users can access or use it regardless of whether they have an Apple or Android device</p>
              {/* description section end */}
              {/* button section start */}
              <div className='flex items-center gap-2 sm:gap-2 md:gap-4 mt-5'>
                {/* btn1 start */}
                <button className='bg-blue-600/100 px-3 py-2 2xl:px-4 2xl:py-3 rounded-full'>
                  <ul className='flex items-center gap-1 sm:gap-2 text-white'>
                    <li><FaGooglePlay className="text-xs sm:text-[10px] md:text-[11px] lg:text-xs xl:text-base 2xl:text-lg"></FaGooglePlay></li>
                    <li>
                      <p className='text-[8px] sm:text-[6px] md:text-[7px] lg:text-[10px] xl:text-[10px] 2xl:text-xs'>Available on the</p>
                      <p className='text-[7px] sm:text-[6px] md:text-[7px] lg:text-[9px] xl:text-xs 2xl:text-xs font-bold'>Play Store</p>
                    </li>
                  </ul>
                </button>
                {/* btn1 end */}
                {/* btn2 start */}
                <button className='bg-blue-600/100 px-3 py-2 2xl:px-4 2xl:py-3 rounded-full'>
                  <ul className='flex items-center gap-2 text-white'>
                    <li><FaApple className="text-xs sm:text-xs md:text-xs lg:text-base xl:text-lg 2xl:text-xl"></FaApple></li>
                    <li>
                      <p className='text-[8px] sm:text-[6px] md:text-[7px] lg:text-[10px] xl:text-[10px] 2xl:text-xs'>Available on the</p>
                      <p className='text-[7px] sm:text-[6px] md:text-[7px] lg:text-[9px] xl:text-xs 2xl:text-xs font-bold'>Play Store</p>
                    </li>
                  </ul>
                </button>
                {/* btn2 end */}
              </div>
              {/* button section end */}
            </div>
            {/* left item end */}
            {/* right item start */}
            <div className="overflow-hidden mt-5 sm:mt-0 sm:flex-1 p-5 sm:p-4 md:p-5 lg:p-4 xl:p-6 2xl:p-8" data-aos="zoom-in" data-aos-duration="1500">
              <img src={img} className='w-full h-full sm:w-full sm:h-56 md:w-full md:h-60 lg:w-full lg:h-72 xl:w-96 xl:h-[360px] 2xl:w-96 2xl:h-[380px] mx-auto'></img>
            </div>
            {/* right item end */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Available;