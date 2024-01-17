import './Form.css';

const Form = () => {
  return (
    <div className=''>
      <form>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 lg:gap-5'>
          <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="text" placeholder='Your Name here' name=""></input>
          <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="email" placeholder='Your email here' name=""></input>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5 mt-5'>
        <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="text" placeholder='Your subject here' name=""></input>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 my-5'>
          <textarea className='border-slate-100 focus:border-cyan-400 border-b-2 w-full pb-3 lg:pb-5 h-full sm:h-28 md:h-32 lg:h-36 outline-none' type="text" placeholder='Your Message here' name=""></textarea>
        </div>
        
          <input type="submit" value="Submit" className='bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/50 rounded-md font-bold text-white p-2 lg:p-3 md:w-24 lg:w-32 w-full'></input>
        
      </form>
    </div>
  );
};

export default Form;