// import cardImage from '../../assets/images/undraw_watch_application_uhc9.svg'
import { Link } from 'react-router-dom'
import cardImage from '../../../assets/images/undraw_watch_application_uhc9.svg'
import './CardService.css'

function CardService() {

  return (
    <div className='lg:mt-20'>
      <div className="container m-auto p-6 sm:p-4 md:p-0 xl:p-0 2xl:p-0 h-full lg:h-96">
        <div className='grid grid-cols-1 text-center md:mt-20 mb-2 md:mb-1 lg:mb-3'>
          <h2 className="text-center font-semibold  md:font-bold xl:font-bold text-xl sm:text-3xl md:text-3xl xl:text-4xl mb-1 " style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Our Service</h2>
          <div className="flex justify-center mb-2 md:mb-4 lg:mb-4">
            <h2 className="bg-red-500 w-[32%] sm:w-[32%] md:w-[26%] lg:w-52 h-[1px] rounded"></h2>
          </div>
          <p className='mt-2 md:mt-0 text-sm sm:text-base md:text-base lg:text-lg text-slate-700 mb-6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi amet praesentium.</p>
        </div>
        {/* title section end */}
        {/* card section start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-10 content-center mx-auto mt-24 lg:mt-5 h-full md:mx-5 lg:mx-0'>
          <div className='card bg-indigo-50 w-full h-32 lg:w-64 lg:h-[186px] duration-200 hover:h-36 lg:hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-14 lg:-top-20'>
              <img className='w-52 h-24 lg:w-40 lg:h-40 mx-auto rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-base lg:text-xl'>Home section</h1>
              <Link to="/">
                <button className='bg-teal-500 text-slate-200 text-sm font-bold px-2 py-2 lg:px-2 lg:py-3 my-2 rounded-md'>show detail</button>
              </Link>
              </div>
            </div>
          </div>
          <div className='card bg-indigo-50 w-full h-32 lg:w-64 lg:h-[186px] duration-200 hover:h-36 lg:hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-14 lg:-top-20'>
              <img className='w-52 h-24 lg:w-40 lg:h-40 mx-auto rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-base lg:text-xl'>Home section</h1>
              <Link to="/">
                <button className='bg-teal-500 text-slate-200 text-sm font-bold px-2 py-2 lg:px-2 lg:py-3 my-2 rounded-md'>show detail</button>
              </Link>
              </div>
            </div>
          </div>
          <div className='card bg-indigo-50 w-full h-32 lg:w-64 lg:h-[186px] duration-200 hover:h-36 lg:hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-14 lg:-top-20'>
              <img className='w-52 h-24 lg:w-40 lg:h-40 mx-auto rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-base lg:text-xl'>Home section</h1>
              <Link to="/">
                <button className='bg-teal-500 text-slate-200 text-sm font-bold px-2 py-2 lg:px-2 lg:py-3 my-2 rounded-md'>show detail</button>
              </Link>
              </div>
            </div>
          </div>
          <div className='card bg-indigo-50 w-full h-32 lg:w-64 lg:h-[186px] duration-200 hover:h-36 lg:hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-14 lg:-top-20'>
              <img className='w-52 h-24 lg:w-40 lg:h-40 mx-auto rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-base lg:text-xl'>Home section</h1>
              <Link to="/">
                <button className='bg-teal-500 text-slate-200 text-sm font-bold px-2 py-2 lg:px-2 lg:py-3 my-2 rounded-md'>show detail</button>
              </Link>
              </div>
            </div>
          </div>

        </div>
        {/* card section end */}
      </div>
    </div>
  )
}

export default CardService
