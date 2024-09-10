import './CardService.css'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardService = () => {

  //set data
  const [services, setServices] = useState([]);

  // fetch data
  useEffect(() => {
    fetch('ourServicesData.json')
    .then((res) => res.json())
    .then((data) => setServices(data))
  },[]);

  //AOS
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className='mt-6 sm:mt-20 lg:mt-24 xl:mt-28'>
      <div className="container mx-auto">
        {/* title section start */}
        <div className="text-center mb-1 px-5">
          {/* title section start */}
          <h2
            className="text-center font-semibold  md:font-bold xl:font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-1 "
            style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
          >
            Our Services
          </h2>
          {/* title section end */}
          <div className="flex justify-center mb-2 md:mb-4 lg:mb-4">
            <h2 className="bg-red-500 w-[32%] sm:w-[23%] md:w-[22%] lg:w-[19%] xl:w-[18%] 2xl:w-[20%] h-[1px] rounded"></h2>
          </div>
          {/* subtitle section start */}
          <h2
            className="text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-gray-900 mb-3"
            style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
          >
            Building Your Vision,
            <span className="text-blue-600/100"> One Step at a Time</span>
          </h2>
          {/* subtitle section end */}
          {/* description section start */}
          <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-center">
            Your success is our priority. We transform complex ideas<br className="hidden sm:block"></br> into solutions that empower your business
          </p>
          {/* description section end */}
        </div>
        {/* title section end */}
        {/* card section start */}
        <div className='grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-6 2xl:gap-7 mt-6 px-5'>
          {
            services.map((data, index) => <div data-aos="zoom-in" data-aos-duration="2000" key={index} className='text-center rounded-xl shadow-lg hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50 hover:border-solid border-[1px] hover:border-[1px] hover:border-indigo-600 py-3 px-1 lg:py-4 xl:py-5 xl:px-2 space-y-2'>
            <img src={data.image} className='mx-auto w-7 h-7 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14'></img>
            <ul>
            <li className='text-[11px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl font-bold'>{data.title1}</li>
            <li className='text-[11px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl font-bold'>{data.title2}</li>
            </ul>
            
          </div>)
          }
          
        </div>
        {/* card section end */}
      </div>
    </div>
  )
}

export default CardService
