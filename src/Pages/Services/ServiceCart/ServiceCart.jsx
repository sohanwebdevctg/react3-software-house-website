import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const ServiceCart = ({service}) => {
  const {image, name, details} = service;
  return (
    <div className="bg-slate-400 m-3 sm:m-2 md:m-1 p-4 sm:p-3 lg:p-5">
      {/* image start*/}
      <img src={image} alt="this is image tag" className="w-[18%] sm:w-[20%] md:w-[22%] lg:w-[12%]"></img>
      {/* image end*/}
      {/* name start */}
      <h3 className="text-xl sm:text-lg md:text-base lg:text-2xl my-2">{name}</h3>
      {/* name end */}
      <hr className="my-2"></hr>
      {/* description start */}
      <p className="text-base sm:text-base md:text-sm lg:text-lg">{details}</p>
      {/* description end */}
      {/* details link start */}
      {/* details link end */}
      <div className="mt-3">
        <Link to="/" className="flex gap-2 items-center text-sm sm:text-sm md:text-sm lg:text-base">
          <span>LEARN MORE</span>
          <FaArrowRight></FaArrowRight>
        </Link>
      </div>
      {/* details link end */}
    </div>
  );
};

export default ServiceCart;