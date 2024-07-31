import Lottie from "lottie-react";
import Security from "../../../assets/Security.json";
import './Banner.css';

const Banner = () => {
  return (
    <>
      <section className="w-full h-2/6 mb-2  pt-3 sm:pt-16 sm:mb-10 md:pt-5 md:mb-5 bg-gradient-to-br from-indigo-50 to-cyan-50 md:mt-14" style={{ borderRadius: "99% 1% 79% 21% / 0% 79% 21% 100% " }}>
        <div className="container mx-auto px-5">
          <div className="sm:flex sm:justify-between sm:items-center lg:px-5">
            {/* left item start */}
            <div className=''>
              {/* title section start */}
              <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-3 font-bold tracking-tight text-gray-900 " style={{ textShadow: '2px 2px 5px rgb(99 102 241 / 0.5)' }}>Easy to manage our <span className='text-blue-600/100'>project</span></h2>
              {/* title section end */}
              {/* description section star */}
              <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify">Simplify project management with our streamlined solutions. We offer efficient tools and support to ensure smooth project execution, empowering your team to succeed effortlessly.</p>
              {/* description section end */}
              {/* button section start */}
              <button className="group relative h-7 sm:h-7 md:h-8 lg:h-10 xl:h-11 2xl:h-13 w-20 sm:w-20 md:w-[86px] lg:w-24 xl:w-28 2xl:w-32 overflow-hidden rounded-lg bg-white text-lg shadow mt-2 sm:mt-4">
                <div className="absolute inset-0 w-3 bg-blue-600/100 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Start Now</span>
              </button>
              {/* button section end */}
            </div>
            {/* left item end */}
            {/* right item start */}
            <div className="overflow-hidden mt-5 sm:mt-0">
              <Lottie animationData={Security} loop={true} />
            </div>
            {/* right item end */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;