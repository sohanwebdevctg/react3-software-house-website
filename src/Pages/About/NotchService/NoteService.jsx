import { FaCode } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { IoPersonAdd } from "react-icons/io5";
import { GiNotebook } from "react-icons/gi";
import CountUp from 'react-countup';

const NoteService = () => {
  return (
    <div className='mt-6 mb-10'>
    <div className="container mx-auto">
      {/* post section start */}
      <div className="text-center mb-1 px-5">
        {/* post section start */}
        <h2
          className="text-center font-semibold  md:font-bold xl:font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mb-1 "
          style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
        >
          Top Notch Service
        </h2>
        {/* post section end */}
        <div className="flex justify-center mb-2 md:mb-4 lg:mb-4">
          <h2 className="bg-red-500 w-[62%] sm:w-[30%] md:w-[30%] lg:w-[27%] xl:w-[26%] 2xl:w-[28%] h-[1px] rounded"></h2>
        </div>
        {/* subpost section start */}
        <h2
          className="text-lg sm:text-sm md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold tracking-tight text-gray-900 mb-3"
          style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
        >
          Show our Best,
          <span className="text-blue-600/100"> Service</span>
        </h2>
        {/* subpost section end */}
        {/* description section start */}
        <p className="text-sm sm:text-xs md:text-sm lg:text-[15px]  lg:text-base xl:text-lg 2xl:text-xl text-center">
          We transform complex ideas into solutions
        </p>
        {/* description section end */}
      </div>
      {/* post section end */}
      {/* card section start */}
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-1 my-6 px-5'>
        {/* item1 section start */}
        <div>
          <ul className="text-center">
            <li className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"><FaCode className="text-center mx-auto"></FaCode></li>
            <li className="my-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold text-blue-600/100"><CountUp end={7453664} duration={5.75} />+</li>
            <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-lg">Kilometers<br></br>of code written</li>
          </ul>
        </div>
        {/* item1 section end */}
        {/* item2 section start */}
        <div>
          <ul className="text-center">
            <li className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"><FiCoffee className="text-center mx-auto"></FiCoffee></li>
            <li className="my-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold text-blue-600/100"><CountUp end={43657} duration={5.75} />+</li>
            <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-lg">Coffees<br></br>drunk</li>
          </ul>
        </div>
        {/* item2 section end */}
        {/* item3 section start */}
        <div>
          <ul className="text-center">
            <li className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"><IoPersonAdd className="text-center mx-auto"></IoPersonAdd></li>
            <li className="my-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold text-blue-600/100"><CountUp end={16743} duration={5.75} />+</li>
            <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-lg">Satisfied<br></br>customers</li>
          </ul>
        </div>
        {/* item3 section end */}
        {/* item4 section start */}
        <div>
          <ul className="text-center">
            <li className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"><GiNotebook className="text-center mx-auto"></GiNotebook></li>
            <li className="my-2 text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-4xl 2xl:text-5xl font-bold text-blue-600/100"><CountUp end={36874} duration={5.75} />+</li>
            <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-lg">Realized<br></br>projects</li>
          </ul>
        </div>
        {/* item4 section end */}
      </div>
      {/* card section end */}
    </div>
  </div>
  );
};

export default NoteService;