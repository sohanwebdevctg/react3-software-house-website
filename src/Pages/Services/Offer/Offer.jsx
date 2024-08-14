import "./Offer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Offer = ({ offer }) => {
  const { logo, description, title } = offer;

  return (
    <div
      data-aos="fade-right"
      className="flex items-center gap-3 xl:gap-1 p-4 sm:p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-6 rounded-xl shadow-lg hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50 hover:border-solid border-[1px] hover:border-[1px] hover:border-indigo-600"
    >
      {/* logo section start */}
      <div className="w-[15%]">
        <img className="w-10 h-12 sm:w-8 sm:h-8 md:w-12 md:h-12 lg:w-11 lg:h-11 xl:w-11 xl:h-11 2xl:w-12 2xl:h-12 mx-auto" src={logo}></img>
      </div>
      {/* logo section end */}
      {/* title & description start */}
      <div className="w-[85%]">
        {/* title section start */}
        <h3 className="text-xs sm:text-[13px] md:text-sm lg:text-lg xl:text-2xl 2xl:text-2xl font-bold text-gray-900" style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}>{title}</h3>
        {/* title section end */}
        {/* description section start */}
        <p className="text-xs sm:text-[11px] md:text-xs lg:text-sm xl:text-[17px] 2xl:text-xl text-gray-700 italic text-justify mt-1">
          {description}
        </p>
        {/* description section end */}
      </div>
      {/* title & description end */}
      <div></div>
    </div>
  );
};

export default Offer;
