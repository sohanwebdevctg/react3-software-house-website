import './Location.css'

const Location = () => {
  return (
    <div>
      <div className='container mx-auto my-10'>
        {/* content section start */}
        <div className='flex justify-center m-3 lg:m-0 px-5'>
        
        <iframe className='w-5/6  h-72 rounded shadow-md' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3650.2273572174745!2d90.361783!3d23.810513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDQ4JzM3LjkiTiA5MMKwMjEnNDIuNCJF!5e0!3m2!1sen!2sbd!4v1704951168232!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" ></iframe>
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default Location;