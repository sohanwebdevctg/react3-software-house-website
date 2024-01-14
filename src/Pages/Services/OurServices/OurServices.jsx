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
      <div className="container mx-auto mb-10">
        {/* title section start */}
        <div className='grid grid-cols-1 text-center mb-2 md:mb-3 lg:mb-5'>
          <h2 className="text-center font-semibold  md:font-bold xl:font-bold text-3xl sm:text-4xl md:text-4xl xl:text-4xl mb-2 " style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Our Service</h2>
          <div className="flex justify-center mb-6">
            <h2 className="bg-red-500 w-52 h-[1px] rounded"></h2>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-3xl mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Enhancing Creativity,<span className='text-blue-600/100'> Step by Step</span></h2>
        </div>
        {/* title section end */}
        {/* serviceCart section start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-4 lg:gap-6">
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