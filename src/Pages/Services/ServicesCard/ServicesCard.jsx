

const ServicesCard = ({items}) => {
  const {name, details} = items
  return (
    <div className="bg-slate-500 p-5">
      <h1 className="lg:text-2xl font-bold uppercase">{name}</h1>
      <hr className="my-2"></hr>
      <p className="lg:text-base italic">{details}</p>
    </div>
  );
};

export default ServicesCard;