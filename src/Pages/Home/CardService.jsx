

function CardService() {

  return (
    <>
      <div className="container m-auto p-6 sm:p-4 md:p-0 xl:p-0 2xl:p-0 ">
        <h2 className="text-center font-semibold  md:font-bold xl:font-bold text-3xl sm:text-4xl md:text-4xl xl:text-4xl mb-2 " style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Our Service</h2>
        <div className="flex justify-center mb-6">
          <h2 className="bg-red-500 w-52 h-[1px] rounded"></h2>
        </div>
        <div className="grid sm:grid-cols-2 md:gird-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4 xl:gap-6 2xl:gap-8 2xl:gird-cols-3">
          {/* i 1 */}
          <a href="#">
            <div className="p-3">
              <div className="shadow-lg hover:shadow-blue-700/50 hover:border-solid border-[1px] hover:border-indigo-600 shadow-blue-500/50  cursor-pointer p-2 rounded-md ">
                <div className="relative "> 
                  <img className="mb-4 rounded w-full h-auto " src="https://th.bing.com/th/id/OIP.ks5ajvqsnEeG2DYOaZOhwQHaE8?rs=1&pid=ImgDetMain" alt="image" />
                  <div className="absolute top-0 right-0 me-2 mt-1 p-[1px] px-3 text-white border border-sky-400 rounded bg-sky-900/50 font-semibold">
                    App Development
                  </div>
                </div>                
                <h3 className="font-bold text-xl">Lorem ipsum dolor sit.</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem unde impedit dolor! Quos neque dolorem ab eveniet odit quam consequatur, explicabo, dolores consectetur at ex id, adipisci officia eius!</p>
                <button className="py-2 px-3 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none mt-4 mb-2 ">Learn More</button>
              </div>
            </div>
          </a>
        </div>   
      </div>
    </>
  )
}

export default CardService
