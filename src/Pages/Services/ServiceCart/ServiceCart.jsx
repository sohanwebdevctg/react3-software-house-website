import './ServiceCart.css'

const ServiceCart = ({service, index}) => {
  const {image, name, details} = service;
  return (
    // <div className='border-2 hover:border-yellow-400 hover:bg-slate-300 duration-700 rounded-xl'>
    <div className='sm:flex justify-center items-center sm:gap-3 md:gap-2 lg:gap-8'>
      <div className={`flex-2 m-2 sm:m-1 md:m-2 p-4 sm:p-3 md:p-4 lg:p-2 ${index % 1 == 0 ? 'order-2': 'order-1'}`}>
        <img className='w-full sm:w-[250px] md:w-[290px] lg:w-[500px] h-52 sm:h-44 md:h-52 lg:h-60' src={image}></img>
      </div>
      <div className={`shadow-lg rounded hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50 m-3 sm:m-2 md:m-2 lg:m-0 flex-1 ${index % 2 === 0 ? 'order-2': 'order-1'}`}>
        <div className="m-3 sm:m-2 md:m-2 p-4 sm:p-2 md:p-3 lg:p-5">
          <h3 className="text-base sm:text-base md:text-lg lg:text-2xl my-2">{name}</h3>
          <p className="text-sm sm:text-xs md:text-sm lg:text-lg">{details}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;