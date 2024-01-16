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
    <div className='mt-14 overflow-hidden'>
      <div className='container mx-auto'>
        {/* content section start */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-8 md:gap-1 lg:gap-10'>
          {/* offerType section start */}
          <div>
            <div className='ml-3 lg:ml-0'>
              {/* title section start */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-1 lg:mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>We Gave The Best Offer</h2>
              <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl mb-1 mb:mb-1 lg:mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Get Special Offer Until<span className='text-blue-600/100'> <br className="sm:hidden"/>30 December 2022</span></h2>
              {/* title section end */}
            </div>
            {/* offers section start */}
            <div className='grid grid-cols-1 gap-1 sm:gap-1 md:gap-0 lg:gap-4 mt-4 md:mt-1 lg:mt-3'>
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
          <div data-aos="fade-left" className='lg:flex justify-center items-center lg:h-[100%]'>
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