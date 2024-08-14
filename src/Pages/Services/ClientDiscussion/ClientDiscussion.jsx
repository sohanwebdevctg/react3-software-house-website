
import { IoIosPlay } from "react-icons/io";
import './ClientDiscussion.css'
import { Link } from "react-router-dom";

const ClientDiscussion = () => {
  return (
    <div className='clientDiscussion w-full h-56 sm:h-72 md:h-72 lg:h-96 my-10 sm:my-8 md:my-12 lg:my-20'>
      <div className="clientDetails mx-auto h-full">
        <div className="flex items-center justify-center h-full ">
          {/* content section start */}
          <div className='text-center'>
            {/* description section start */}
            <p className="text-white text-sm sm:text-lg md:text-lg lg:text-2xl xl:text-2xl">Droop Us a line? We are here<br className="sm:hidden"></br> to answer your question 24/7</p>
            {/* description section end */}
            {/* title section start */}
            <h4 className="my-2 sm:my-4 md:my-4 lg:my-5 2xl:mb-8 text-amber-400 text-xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl font-extrabold">Need A Consulation?</h4>
            {/* title section end */}
            {/* button section start */}
            <Link to="/">
            <button className='playBtn w-16 h-16 sm:h-20 sm:w-20 md:w-24 md:h-24 md:text-3xl sm:text-3xl text-xl lg:w-24 lg:h-24 xl:w-20 xl:h-20 2xl:w-24 2xl:h-24 lg:text-4xl'>
              <IoIosPlay className="mx-auto"></IoIosPlay>
            </button>
            </Link>
            
            {/* button section end */}
          </div>
          {/* content section end */}
        </div>
      </div>
    </div>
  );
};

export default ClientDiscussion;