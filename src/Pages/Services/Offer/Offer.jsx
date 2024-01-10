import './Offer.css'

const Offer = ({offer}) => {
  console.log(offer)
  const {logo, description, title} = offer;
  return (
    <div className='flex'>
      <div>
        <img className='w-[10%]' src={logo}></img>
      </div>
    </div>
  );
};

export default Offer;