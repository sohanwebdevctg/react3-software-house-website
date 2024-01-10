import { Link } from 'react-router-dom';
import './ServiceDescription.css'

const ServiceDescription = ({serviceData}) => {
  
  const {subTitle, title, description, highLight, button} = serviceData;
  return (
    <div>
      {/* subTitle section start */}
      <h5 className='text-base sm:text-xl md:text-base lg:text-2xl font-bold'>{subTitle}</h5>
      {/* subTitle section end */}
      {/* title section start */}
      <h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold my-3'>{title}</h2>
      {/* title section end */}
      {/* description section start */}
      <p className='text-base sm:text-lg md:text-base lg:text-xl lg:pr-20 my-5'>{description}</p>
      {/* description section end */}
      {/* highLight section start */}
      <p className='text-lg sm:text-xl md:text-base lg:text-2xl font-bold'>{highLight}</p>
      {/* highLight section end */}
      {/* button section start */}
      <Link to="/" className="text-white bg-blue-600 py-2 px-3 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-3 lg:px-6 inline-block mt-2 sm:mt-3 md:mt-4 lg:mt-6 font-bold ">
      <button>{button}</button>
      </Link>
      {/* button section end */}
    </div>
  );
};

export default ServiceDescription;