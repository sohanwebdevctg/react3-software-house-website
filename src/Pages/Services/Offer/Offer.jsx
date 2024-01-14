import './Offer.css'

const Offer = ({offer}) => {
  const {logo, description, title} = offer;
  return (
    <div className='sm:flex items-center gap-5 p-4 sm:p-5 lg:p-6 rounded-xl m-2 lg:m-0 shadow-lg hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50 hover:border-solid border-[1px] hover:border-[1px] hover:border-indigo-600'>
      {/* logo section start */}
      <div className='flex-1 w-[18%] sm:w-[10%] md:w-[25%] lg:w-[10%] mx-auto'>
        <img className='w-[100%]' src={logo}></img>
      </div>
      {/* logo section end */}
      {/* title & description start */}
      <div className='flex-2 sm:w-[85%] md:w-[75%] lg:w-[85%] text-center sm:text-left mt-2 sm:mt-0'>
        <h4 className='text-xl sm:text-2xl md:text-base lg:text-2xl font-bold'>{title}</h4>
        <p className='text-sm sm:text-lg md:text-sm lg:text-base'>{description}</p>
      </div>
      {/* title & description end */}
      <div></div>
    </div>
  );
};

export default Offer;