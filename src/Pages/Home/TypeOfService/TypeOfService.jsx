import { useEffect, useState } from 'react';
import './TypeOfService.css';
import { Link } from 'react-router-dom';

const TypeOfService = () => {

  const [card, setCard] = useState([])

  useEffect(() => {
    fetch('typeOfService.json')
    .then((res) => res.json())
    .then((data) => setCard(data))
  },[])

  return (
    <div className='container mx-auto'>
      <div className='content px-3'>
        <div className='cardContent grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-16 md:gap-5'>
          {
            card.map((data) => <article key={data.id} className='cardArticle my-2 md:my-4'>
              <img src={data.image} className='cardImg w-full h-[90%] lg:h-full rounded-3xl'></img>
              <Link to={`/service-details/${data.id}`} className='cardData w-4/5 bg-slate-100 h-[50%] sm:h-[66%] md:h-[90%] lg:h-[40%] px-8 py-4 sm:py-3 rounded-2xl shadow-lg space-y-1'>
                <h2 className='cardTitle text-sm sm:test-base text-red-500 font-semibold'>{data.title}</h2>
                <span className='cardDes block text-xs sm:text-sm'>{data.description}</span>
                <Link to={`/service-details/${data.id}`} className="cardBtn text-sm text-blue-600 hover:underline">{data.link}</Link>
              </Link>
            </article>)
          }
        </div>
      </div>
    </div>
  );
};

export default TypeOfService;