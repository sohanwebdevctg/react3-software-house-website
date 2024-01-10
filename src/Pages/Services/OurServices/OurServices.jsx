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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-4 lg:gap-10">
          {/* serviceCart section start */}
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