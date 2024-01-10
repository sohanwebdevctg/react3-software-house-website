import './OurServices.css'
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCart from '../ServiceCart/ServiceCart';

const OurServices = () => {

  // set the data from fetch request
  const [services, setServices] = useState([])

  // useEffect fetch the data from server
  useEffect(() => {
    fetch('ourServices.json')
    .then((response) => response.json())
    .then((data) => setServices(data))
  },[])

  return (
    <div>
      <div className="container mx-auto my-10">
        {/* title section start */}
        <div className='grid grid-cols-1 text-center mb-2 md:mb-3 lg:mb-5'>
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-2xl text-blue-600'>Our Services</h1>
          <p className='text-lg sm:text-2xl md:text-3xl lg:text-4xl'>Enhancing Creativity, Step by Step</p>
        </div>
        {/* title section end */}
        {/* serviceCart section start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-4 lg:gap-10">
          {
            services.map((service) => <ServiceCart
            key={service.id}
            service={service}
            ></ServiceCart>)
          }
          {/* service cart section end */}
        </div>
        </div>
    </div>
  );
};

export default OurServices;