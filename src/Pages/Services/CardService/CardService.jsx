// import cardImage from '../../assets/images/undraw_watch_application_uhc9.svg'
import cardImage from '../../../assets/images/undraw_watch_application_uhc9.svg'
import './CardService.css'

function CardService() {

  return (
    <div className='lg:mt-20'>
      <div className="container m-auto p-6 sm:p-4 md:p-0 xl:p-0 2xl:p-0 h-full lg:h-96">
        <h2 className="text-center font-semibold  md:font-bold xl:font-bold text-3xl sm:text-4xl md:text-4xl xl:text-4xl mb-2 " style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Our Service</h2>
        <div className="flex justify-center mb-6">
          <h2 className="bg-red-500 w-52 h-[1px] rounded"></h2>
        </div>
        {/* card section start */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-10 content-center mx-auto mt-32 lg:mt-10 h-full md:mx-5 lg:mx-0'>
          <div className='card bg-slate-300 w-full h-32 lg:w-64 lg:h-[186px] duration-200 hover:h-36 lg:hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-14 lg:-top-20'>
              <img className='w-52 h-24 lg:w-40 lg:h-40 mx-auto bg-slate-100 rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-base lg:text-xl'>Home section</h1>
              <button className='bg-blue-400 px-2 py-2 lg:px-2 lg:py-3 my-2 rounded-md'>show detail</button>
              </div>
            </div>
          </div>
          <div className='card bg-slate-300 w-full h-32 lg:w-64 lg:h-[186px] duration-200 hover:h-36 lg:hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-14 lg:-top-20'>
              <img className='w-52 h-24 lg:w-40 lg:h-40 mx-auto bg-slate-100 rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-base lg:text-xl'>Home section</h1>
              <button className='bg-blue-400 px-2 py-2 lg:px-2 lg:py-3 my-2 rounded-md'>show detail</button>
              </div>
            </div>
            
          </div>
          <div className='card bg-slate-300 w-full h-32 lg:w-64 lg:h-[186px] duration-200 hover:h-36 lg:hover:h-48 rounded-xl relative'>
          <div className='rounded-xl z-10 absolute left-0 right-0 -top-14 lg:-top-20'>
              <img className='w-52 h-24 lg:w-40 lg:h-40 mx-auto bg-slate-100 rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-base lg:text-xl'>Home section</h1>
              <button className='bg-blue-400 px-2 py-2 lg:px-2 lg:py-3 my-2 rounded-md'>show detail</button>
              </div>
            </div>
          </div>
          <div className='card bg-slate-300 w-full h-32 lg:w-64 lg:h-[186px] duration-200 hover:h-36 lg:hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-14 lg:-top-20'>
              <img className='w-52 h-24 lg:w-40 lg:h-40 mx-auto bg-slate-100 rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-base lg:text-xl'>Home section</h1>
              <button className='bg-blue-400 px-2 py-2 lg:px-2 lg:py-3 my-2 rounded-md'>show detail</button>
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
