import img from '../../../../public/joinOurTeam/team.png'

const OurTeam = () => {
  return (
    <div className='px-5'>
      <section className="w-full h-2/6">
        <div className="container mx-auto px-5 bg-gradient-to-br from-indigo-50 to-cyan-50 md:mt-10 rounded-3xl">
          <div className="sm:flex sm:justify-between sm:items-center px-3 py-6 sm:px-4 sm:py-8 md:px-3 md:py-7 lg:px-4 lg:py-9 xl:px-6 xl:py-12 2xl:px-8 2xl:py-14 gap-10 2xl:gap-16">
            {/* left item start */}
            <div className='sm:flex-1'>
              {/* title section start */}
              <h2 className="text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-3 font-bold tracking-tight text-gray-900 " style={{ textShadow: '2px 2px 5px rgb(99 102 241 / 0.5)' }}>Join our <span className='text-blue-600/100'>Team</span></h2>
              {/* title section end */}
              {/* description section star */}
              <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify">Join our SofHouse team! We're seeking innovative tech enthusiasts to tackle exciting challenges and drive cutting-edge solutions. Apply today to shape the future with us</p>
              {/* description section end */}
              {/* button section start */}
              <button className="group relative h-7 sm:h-7 md:h-8 lg:h-10 xl:h-11 2xl:h-13 w-20 sm:w-20 md:w-[86px] lg:w-24 xl:w-28 2xl:w-32 overflow-hidden rounded-lg bg-white text-lg shadow mt-2 sm:mt-4">
                <div className="absolute inset-0 w-3 bg-blue-600/100 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">Join</span>
              </button>
              {/* button section end */}
            </div>
            {/* left item end */}
            {/* right item start */}
            <div className="overflow-hidden mt-5 sm:mt-0 sm:flex-1 shadow-xl rounded-2xl p-5 sm:p-4 md:p-5 lg:p-4 xl:p-6 2xl:p-8">
              <img src={img} className='w-full mx-auto rounded-2xl'></img>
            </div>
            {/* right item end */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;