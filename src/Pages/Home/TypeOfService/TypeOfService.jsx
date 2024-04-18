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
      <div className='content'>
        <div className='cardContent'>
          {
            card.map((data) => <article key={data.id} className='cardArticle'>
              <img src={data.image} className='cardImg'></img>
              <div className='cardData'>
                <span className='cardDes'>{data.description}</span>
                <h2 className='cardTitle'>{data.title}</h2>
                <Link to="/" className="cardBtn">{data.link}</Link>
              </div>
            </article>)
          }
          
        </div>
      </div>
    </div>
  );
};

export default TypeOfService;