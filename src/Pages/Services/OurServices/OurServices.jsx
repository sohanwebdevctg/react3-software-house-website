import './OurServices.css'
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceData from '../ServiceData/ServiceData.jsx';
import ServiceImg from '../../../../public/service/serviceImg.jpg'


const OurServices = () => {

  const [service, setService] = useState([])

  // useEffect fetch the data from server
  useEffect(() => {
    fetch('services.json')
    .then((res) => res.json())
    .then((data) => setService(data))
  },[])


  return (
    <div>
      <div className="container mx-auto md:my-20">
        {/* title section start */}
        <div className='grid grid-cols-1 text-center mb-2 md:mb-3 lg:mb-5'>
          <h2 className="text-center font-semibold  md:font-bold xl:font-bold text-xl sm:text-3xl md:text-3xl xl:text-4xl mb-1 " style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Our Service</h2>
          <div className="flex justify-center mb-2 md:mb-4 lg:mb-4">
            <h2 className="bg-red-500 w-[32%] sm:w-[32%] md:w-[26%] lg:w-52 h-[1px] rounded"></h2>
          </div>
          <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl md:text-2xl lg:text-3xl mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Enhancing Creativity,<span className='text-blue-600/100'> Step by Step</span></h2>
        </div>
        {/* title section end */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:h-64 lg:h-96  gap-6" >
            <div>
              <img className='w-full lg:w-[100%]' src={ServiceImg}></img>
            </div>
            <div className="serviceCon p-5">
              {
              service.map((service, index) => <ServiceData
              service={service}
              key={service._id}
              index={index}
              ></ServiceData>)
              }
            </div>
          
          </div>
        </div>
    </div>
  );
};

export default OurServices;