import { Link } from "react-router-dom";


const Interesting = () => {
  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 text-center">
          {/* content section start */}
          <div>
            {/* description section start */}
            <p className="text-blue-600 text-base sm:text-lg md:text-xl lg:text-2xl">Like what you've seen? <br className="sm:hidden"></br>Get it touch to learn more</p>
            {/* description section end */}
            {/* title section start */}
            <h4 className="my-2 sm:my-4 md:my-4 lg:my-5 text-black text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">Interesting with us?</h4>
            {/* title section end */}
            {/* button section start */}
            <Link to="/contact" className="text-white bg-blue-600 py-2 px-3 sm:py-3 sm:px-5 md:py-4 md:px-6 lg:py-3 lg:px-6 inline-block mt-2 sm:mt-3 md:mt-4 lg:mt-6 font-bold ">
              <button>Get in touch now</button>
            </Link>
            {/* button section end */}
          </div>
          {/* content section end */}
        </div>
      </div>
    </div>
  );
};

export default Interesting;