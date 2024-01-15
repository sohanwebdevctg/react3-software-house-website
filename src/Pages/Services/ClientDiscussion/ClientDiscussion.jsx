
import { IoIosPlay } from "react-icons/io";
import './ClientDiscussion.css'

const ClientDiscussion = () => {
  return (
    <div className='clientDiscussion w-full h-48 sm:h-64 md:h-80 lg:h-96 my-5 sm:my-8 md:my-12 lg:my-20'>
      <div className="clientDetails mx-auto h-full">
        <div className="flex items-center justify-center h-full ">
          {/* content section start */}
          <div className='text-center'>
            {/* description section start */}
            <p className="text-white text-base sm:text-base md:text-xl lg:text-2xl">Droop Us a line? We are here<br className="sm:hidden"></br> to answer your question 24/7</p>
            {/* description section end */}
            {/* title section start */}
            <h4 className="my-2 sm:my-4 md:my-4 lg:my-5 text-amber-400 text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">Need A Consulation?</h4>
            {/* title section end */}
            {/* button section start */}
            
            <button className='playBtn w-14 h-14 sm:h-20 sm:w-20 md:w-24 md:h-24 md:text-3xl sm:text-3xl text-xl lg:w-24 lg:h-24 lg:text-4xl'>
              <IoIosPlay className="mx-auto"></IoIosPlay>
            </button>
            {/* button section end */}
          </div>
          {/* content section end */}
        </div>
      </div>
    </div>
  );
};

export default ClientDiscussion;