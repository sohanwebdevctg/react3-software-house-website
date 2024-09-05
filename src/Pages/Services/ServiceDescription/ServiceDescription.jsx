import { Link } from "react-router-dom";
import "./ServiceDescription.css";

const ServiceDescription = ({ serviceData }) => {
  const { title, description, highLight, button } = serviceData;
  return (
    <div>
      {/* subTitle section start */}
      <h5 className="text-base sm:text-xl md:text-base lg:text-2xl font-bold"></h5>
      <p
        className="text-lg sm:text-xs md:text-sm lg:text-xl xl:text-3xl 2xl:text-3xl mb-3 font-bold tracking-tight text-gray-900 "
        style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
      >
        {" "}
        The Project that<span className="text-blue-600/100"> Completed</span>
      </p>
      {/* subTitle section end */}
      {/* title section start */}
      <h2
        className="text-[22px] sm:text-xl md:text-[27px] lg:text-4xl xl:text-6xl font-extrabold tracking-tight text-gray-900 mb-1 lg:mb-3"
        style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
      >
        {title}
      </h2>
      {/* title section end */}
      {/* description section start */}
      <p className="text-sm sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify w-[90%]">
        {description}
      </p>
      {/* description section end */}
      {/* highLight section start */}
      <h2
        className="font-bold tracking-tight text-gray-900 text-lg sm:text-xs md:text-sm lg:text-xl xl:text-3xl 2xl:text-3xl my-3"
        style={{ textShadow: "2px 2px 5px rgb(99 102 241 / 0.5)" }}
      >
        <span className="text-blue-600/100"> {highLight}</span>
      </h2>
      {/* highLight section end */}
      {/* button section start */}

        {/* button section start */}
        <button className="group relative h-7 sm:h-7 md:h-8 lg:h-10 xl:h-11 2xl:h-13 w-20 sm:w-20 md:w-[86px] lg:w-24 xl:w-28 2xl:w-32 overflow-hidden rounded-lg bg-white text-lg shadow mt-2 sm:mt-4">
          <div className="absolute inset-0 w-3 bg-blue-600/100 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
            Contact
          </span>
        </button>
        {/* button section end */}
      {/* button section end */}
    </div>
  );
};

export default ServiceDescription;
