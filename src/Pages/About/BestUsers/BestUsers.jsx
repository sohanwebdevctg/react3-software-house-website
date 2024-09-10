import AOS from 'aos';
import 'aos/dist/aos.css';
import mapImg from "../../../../public/map/map1.png";
import { useEffect } from 'react';

const BestUsers = () => {

  
  //AOS
  useEffect(() => {
    AOS.init();
  },[])

  return (
    <div className="w-full h-2/6 my-16">
      <div className="container mx-auto px-5">
        {/* content section start */}
        <div className="sm:flex sm:justify-between sm:items-center my-10 gap-5">
          {/* description section start */}
          <div className="sm:flex-1">
            {/* subTitle section start */}
            <h5 className="text-base sm:text-xl md:text-base lg:text-2xl font-bold"></h5>
            <p
              className="text-lg sm:text-xs md:text-sm lg:text-xl xl:text-3xl 2xl:text-3xl mb-3 font-bold tracking-tight text-gray-900 "
              style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
            >
              Our Best<span className="text-blue-600/100"> Users</span>
            </p>
            {/* subTitle section end */}
            {/* title section start */}
            <h2
              className="text-[22px] sm:text-xl md:text-[27px] lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-gray-900 mb-1 lg:mb-3"
              style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
            >
              Are all over the<br></br>Worldwide Coverage
            </h2>
            {/* title section end */}
            {/* description section start */}
            <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-xl text-justify w-full lg:w-[90%]">
              Our best users span across the globe, representing a diverse and
              dynamic range of locations. Their engagement showcases our
              product's universal appeal and effectiveness, transcending
              geographical boundaries.
            </p>
            <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-xl text-justify w-full lg:w-[90%] my-2">
              we continually refine and enhance our services to ensure they meet
              the highest standards of satisfaction and functionality worldwide
            </p>
            {/* description section end */}
            {/* user percent section start */}
            <div className="grid grid-cols-3 gap-3 sm:gap-2 lg:gap-3 xl:gap-5 mt-5 md:mt-3">
              <div data-aos="zoom-in" data-aos-duration="1500" className="rounded-xl shadow-lg p-2 lg:p-3 hover:shadow-indigo-600/50 shadow-indigo-500/50 hover:border-solid border-[1px] hover:border-[1px] hover:border-indigo-600">
                <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold">150k+</p>
                <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">USA & UK</p>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1500" className="rounded-xl shadow-lg p-2 lg:p-3 hover:shadow-indigo-600/50 shadow-indigo-500/50 hover:border-solid border-[1px] hover:border-[1px] hover:border-indigo-600">
                <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold">45k+</p>
                <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Europe</p>
              </div>
              <div data-aos="zoom-in" data-aos-duration="1500" className="rounded-xl shadow-lg p-2 lg:p-3 hover:shadow-indigo-600/50 shadow-indigo-500/50 hover:border-solid border-[1px] hover:border-[1px] hover:border-indigo-600">
                <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-bold">15k+</p>
                <p className="text-[10px] sm:text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Asia</p>
              </div>
            </div>
            {/* user percent section end */}
          </div>
          {/* description section end */}
          {/* img section start */}
          <div className="sm:flex-1 mt-10 sm:mt-0" data-aos="zoom-in" data-aos-duration="1500">
            <img src={mapImg} className="w-full h-56 sm:h-64 md:h-72 lg:h-80 mx-auto"></img>
          </div>
          {/* img section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default BestUsers;
