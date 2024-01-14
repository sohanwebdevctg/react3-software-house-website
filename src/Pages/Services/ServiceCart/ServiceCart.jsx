import './ServiceCart.css'

const ServiceCart = ({service}) => {

  const {image, name, details} = service;

  return (
    // <div className='border-2 hover:border-yellow-400 hover:bg-slate-300 duration-700 rounded-xl'>
    <div className='shadow-lg rounded hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50'>
      <div className="m-3 sm:m-2 md:m-2 p-4 sm:p-3 md:p-4 lg:p-5">
      <div className="flex items-center gap-5 mb-3 sm:mb-2 md:mb-3 lg:mb-4">
        {/* image start*/}
        <img src={image} alt="this is image tag" className="w-[12%] sm:w-[13%] md:w-[12%] lg:w-[8%]"></img>
        {/* image end*/}
        {/* name start */}
        <h3 className="text-base sm:text-lg md:text-lg lg:text-2xl my-2">{name}</h3>
        {/* name end */}
      </div>
      {/* description start */}
      <p className="text-sm sm:text-sm md:text-base lg:text-lg">{details}</p>
      {/* description end */}
      {/* details link start */}
    </div>
    </div>
  );
};

export default ServiceCart;