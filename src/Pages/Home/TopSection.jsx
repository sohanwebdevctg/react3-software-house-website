// import top_security_image from '../../assets/images/hpme-top-security-removebg-preview.png';
import Lottie from "lottie-react";
import Security from "../../assets/Security.json";
import './TopSection.css';


const TopSection = () => {
  return (
    <>
    <section className="w-full h-2/6 mb-2  pt-3  bg-gradient-to-br from-indigo-50 to-cyan-50 md:mt-14" style={{ borderRadius:"99% 1% 79% 21% / 0% 79% 21% 100% " }}>
    <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:gird-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 py-3 items-center ">
            <div className='px-6 sm:px-4 md:px-2 lg:px-0 xl:px-0 2xl:px-0'>
                <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-3xl mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Easy to manage our <span className='text-blue-600/100'>project</span></h2>
                <p>Lorem ipsum dolor sit  consectetur  elit. Et rem odit rerum eum minima labore earum! Reprehenderit sed ipsum perspiciatis!</p>
                
                <button className="group relative h-10 sm:h-9 md:h-10 lg:h-12   w-24 sm:w-24 md:w-28 lg:w-36 overflow-hidden rounded-lg bg-white text-lg shadow mt-4">
                  <div className="absolute inset-0 w-3 bg-teal-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span className="relative text-black group-hover:text-white text-sm sm:text-sm md:text-sm lg:text-base">Start Now</span>
                </button>
            </div>
            <div className="overflow-hidden">
                <Lottie animationData={Security} loop={true} />
            </div>
        </div>
    </div>
    </section>

   
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>
    {/* <div id='title'>
      <span>
        PURE CSS
      </span>

      <span>
        PARALLAX PIXEL STARS
      </span>
    </div> */}



    </>
  )
}

export default TopSection;
