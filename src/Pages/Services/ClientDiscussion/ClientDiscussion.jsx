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
            
            <Link to="/contact">
              <button className="group relative h-12  w-32 sm:w-36 md:w-40 lg:w-44 xl:w-48 2xl:w-48 overflow-hidden rounded-lg bg-white text-lg shadow mt-4">
                <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                <span className="relative text-black group-hover:text-white">Contact Us</span>
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