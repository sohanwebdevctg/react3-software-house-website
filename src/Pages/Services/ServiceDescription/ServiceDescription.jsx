import { Link } from 'react-router-dom';
import './ServiceDescription.css'

const ServiceDescription = ({serviceData}) => {
  
  const {title, description, highLight, button} = serviceData;
  return (
    <div>
      {/* subTitle section start */}
      <h5 className='text-base sm:text-xl md:text-base lg:text-2xl font-bold'></h5>
      <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-3xl mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>The Project that<span className='text-blue-600/100'> Completed</span></h2>
      {/* subTitle section end */}
      {/* title section start */}
      <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-gray-900 my-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>{title}</h2>
      {/* title section end */}
      {/* description section start */}
      <p className='text-base sm:text-lg md:text-base lg:text-xl lg:pr-20 my-5'>{description}</p>
      {/* description section end */}
      {/* highLight section start */}
      <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl md:text-base lg:text-2xl mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}><span className='text-blue-600/100'> {highLight}</span></h2>
      {/* highLight section end */}
      {/* button section start */}
      <Link to="/contact">
        <button className="group relative h-10 sm:h-10 md:h-10 lg:h-11  w-24 sm:w-28 md:w-28 lg:w-36 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-teal-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
            <span className="relative text-black group-hover:text-white text-sm sm:text-sm md:text-sm lg:text-base">Start Now</span>
        </button>
      </Link>
      {/* button section end */}
    </div>
  );
};

export default ServiceDescription;