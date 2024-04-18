import { useEffect } from 'react';
import './TypeOfService.css';

const TypeOfService = () => {

  useEffect(() => {
    fetch('typeOfService.json')
    .then((res) => res.json())
    .then((data) => console.log(data))
  },[])

  return (
    <div className='container mx-auto'>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quibusdam quo deserunt. Quae architecto praesentium est sunt debitis quia ratione?</p>
    </div>
  );
};

export default TypeOfService;