


const ServiceData = ({service,index}) => {

  const {name, details} = service;

  return (
    <div>
      <div>
        <div className={`${index >= 5 ? 'border-l-2 lg:border-l-[3px] border-white ml-2 lg:ml-3' : 'border-l-2 lg:border-l-[3px] border-gray-500 ml-2 lg:ml-3'}`}>
          <div className='relative'>
            <div className='absolute top-0 -left-[12px] lg:-left-[16px] bg-blue-400 h-5 w-5 lg:h-7 lg:w-7 rounded-full flex justify-center items-center lg:text-base font-semibold'>{index + 1}</div>
            <div className='pl-3 sm:pl-5 md:pl-4 lg:pl-10'>
              <div className="pb-2">
              <span className=''>13 November</span>
              <h3 className=''>{name}</h3>
              <p className="text-xs sm:text-base md:text-sm lg:text-lg">{details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceData;