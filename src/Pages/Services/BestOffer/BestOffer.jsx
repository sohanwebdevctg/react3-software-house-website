import Offer from '../Offer/Offer';
import './BestOffer.css';
import { useEffect, useState } from 'react';

const BestOffer = () => {

  const [offers, setOffers] = useState([])

  useEffect(() => {
    fetch('offer.json')
    .then((res) => res.json())
    .then((data) => setOffers(data))
  },[])

  return (
    <div>
      <div className='container mx-auto'>
        {/* content section start */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-10'>
          {/* offerType section start */}
          <div>
            {/* title section start */}
            <h1 className='lg:text-5xl font-extrabold mb-3'>We Gave The Best Offer</h1>
            <p className='lg:text-2xl font-bold'>Get Special Offer Until 30 December 2022</p>
            {/* title section end */}
            {/* offers section start */}
            <div className='grid grid-cols-1 gap-5'>
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
          {/* profile section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default BestOffer;