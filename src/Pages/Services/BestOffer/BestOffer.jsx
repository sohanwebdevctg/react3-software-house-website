import Offer from '../Offer/Offer';
import './BestOffer.css';
import { useEffect, useState } from 'react';
import serviceImg from '../../../../public/service/service.png'

const BestOffer = () => {

  const [offers, setOffers] = useState([])

  useEffect(() => {
    fetch('offer.json')
    .then((res) => res.json())
    .then((data) => setOffers(data))
  },[])

  return (
    <div className='mt-14'>
      <div className='container mx-auto'>
        {/* content section start */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-5 lg:gap-10'>
          {/* offerType section start */}
          <div>
            <div className='ml-3 lg:ml-0'>
              {/* title section start */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>We Gave The Best Offer</h2>
              <h2 className="text-lg font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-2xl mb-3" style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Get Special Offer Until<span className='text-blue-600/100'> <br className="sm:hidden"/>30 December 2022</span></h2>
              {/* title section end */}
            </div>
            {/* offers section start */}
            <div className='grid grid-cols-1 gap-5 mt-4'>
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
          <div>
            <img className='w-full h-full' src={serviceImg}></img>
          </div>
          {/* profile section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default BestOffer;