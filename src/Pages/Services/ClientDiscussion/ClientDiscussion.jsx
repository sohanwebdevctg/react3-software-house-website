import { Link } from 'react-router-dom';
import './ClientDiscussion.css'

const ClientDiscussion = () => {
  return (
    <div className='clientDiscussion w-full sm:h-64 md:h-80 lg:h-96'>
      <div className="clientDetails mx-auto h-full">
        <div className="flex items-center justify-center h-full ">
          {/* content section start */}
          <div className='text-center'>
            {/* description section start */}
            <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl">Droop Us a line? We are here<br className="sm:hidden"></br> to answer your question 24/7</p>
            {/* description section end */}
            {/* title section start */}
            <h4 className="my-2 sm:my-4 md:my-4 lg:my-5 text-black text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">Need A Consulation?</h4>
            {/* title section end */}
            {/* button section start */}
            <Link to="/contact" className="text-white bg-blue-600 py-2 px-3 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-3 lg:px-6 inline-block mt-2 sm:mt-3 md:mt-4 lg:mt-6 font-bold ">
              <button>Contact Us</button>
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