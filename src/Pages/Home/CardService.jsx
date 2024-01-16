import cardImage from '../../assets/images/undraw_watch_application_uhc9.svg'
import './CardService.css'

function CardService() {

  return (
    <>
      <div className="container m-auto p-6 sm:p-4 md:p-0 xl:p-0 2xl:p-0 ">
        <h2 className="text-center font-semibold  md:font-bold xl:font-bold text-3xl sm:text-4xl md:text-4xl xl:text-4xl mb-2 " style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Our Service</h2>
        <div className="flex justify-center mb-6">
          <h2 className="bg-red-500 w-52 h-[1px] rounded"></h2>
        </div>
        {/* card section start */}
        <div className='flex justify-around items-center h-96'>
          <div className='card bg-slate-300 w-64 h-[186px] duration-200 hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-20'>
              <img className='w-40 h-40 mx-auto bg-slate-100 rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-xl'>Home section</h1>
              <button className='bg-blue-400 px-2 py-3 my-2 rounded-md'>show detail</button>
              </div>
            </div>
            
          </div>
          <div className='card bg-slate-300 w-64 h-[186px] duration-200 hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-20'>
              <img className='w-40 h-40 mx-auto bg-slate-100 rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-xl'>Home section</h1>
              <button className='bg-blue-400 px-2 py-3 my-2 rounded-md'>show detail</button>
              </div>
            </div>
            
          </div>
          <div className='card bg-slate-300 w-64 h-[186px] duration-200 hover:h-48 rounded-xl relative'>
            <div className='rounded-xl z-10 absolute left-0 right-0 -top-20'>
              <img className='w-40 h-40 mx-auto bg-slate-100 rounded-xl' src={cardImage}></img>
            </div>
            <div className='text-center flex justify-center'>
              <div className='absolute bottom-0 overflow-hidden mb-2'>
              <h1 className='text-xl'>Home section</h1>
              <button className='bg-blue-400 px-2 py-3 my-2 rounded-md'>show detail</button>
              </div>
            </div>
            
          </div>
        </div>
        {/* card section end */}
      </div>
    </>
  )
}

export default CardService
