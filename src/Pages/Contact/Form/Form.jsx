import './Form.css';

const Form = () => {
  return (
    <div className=''>
      <form>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-5'>
          <input className='border-black border-2 w-full p-3 md:p-2 lg:p-5' type="text" placeholder='Your Name here' name=""></input>
          <input className='border-black border-2 w-full p-3 md:p-2 lg:p-5' type="email" placeholder='Your Email Here' name=""></input>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5'>
          <input className='border-black border-2 w-full p-3 md:p-2 lg:p-5' type="text" placeholder='Your subject here' name=""></input>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5'>
          <textarea className='border-black border-2 w-full p-3 lg:p-5 h-full sm:h-28 md:h-32 lg:h-36' type="text" placeholder='Your Message here' name=""></textarea>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5'>
          <input type="submit" value="Submit" className='bg-cyan-500 shadow-lg shadow-cyan-500/50 font-bold text-white p-2 lg:p-3 md:w-24 lg:w-32 w-full'></input>
        </div>
      </form>
    </div>
  );
};

export default Form;