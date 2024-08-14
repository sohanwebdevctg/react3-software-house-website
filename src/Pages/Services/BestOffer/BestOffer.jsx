import Offer from '../Offer/Offer';
import './BestOffer.css';
import { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import ClientService from "../../../assets/two.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

const BestOffer = () => {

  const [offers, setOffers] = useState([])

  useEffect(() => {
    fetch('offer.json')
    .then((res) => res.json())
    .then((data) => setOffers(data))
  },[])

  return (
    <div className='w-full h-2/6'>
      <div className='container mx-auto px-5'>
        {/* content section start */}
        <div className='sm:flex sm:justify-between sm:items-center'>
          {/* offerType section start */}
          <div className="sm:flex-1">
            <div className='ml-3 lg:ml-0'>
              {/* title section start */}
              <h2 className="text-[22px] sm:text-xl md:text-[27px] lg:text-4xl xl:text-6xl font-extrabold tracking-tight text-gray-900 mb-1 lg:mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>We Gave The Best Offer</h2>
              <h2 className="text-lg sm:text-xs md:text-sm lg:text-xl xl:text-3xl 2xl:text-3xl mb-3 font-bold tracking-tight text-gray-900 " style={{ textShadow: '2px 2px 5px rgb(99 102 241 / 0.5)' }}>Get Special Offer Until <span className='text-blue-600/100'><br className="sm:hidden"/>30 December 2022</span></h2>
              {/* title section end */}
            </div>
            {/* offers section start */}
            <div className='grid grid-cols-1 gap-3 sm:gap-2 md:gap-2 lg:gap-4 xl:gap-5 2xl:gap-6 mt-4 md:mt-1 lg:mt-3'>
            {
              offers.map((offer) => <Offer
              key={offer.id}
              offer={offer}
              ></Offer>)
            }
            </div>
            {/* offers section end */}
          </div>
          {/* offerType section end */}
          {/* profile section start */}
          <div data-aos="fade-left" className='overflow-hidden mt-5 sm:mt-0 sm:flex-1'>
            <Lottie className='lg:h-full' animationData={ClientService} loop={true} />
          </div>
          {/* profile section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default BestOffer;