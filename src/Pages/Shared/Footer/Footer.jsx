import { Link } from "react-router-dom";
import FooterAnimation from '../../ExtraFooter/FooterAnimation';


const Footer = () => {
  return (
    <div className="overflow-hidden">
      {/* footer animation  */}
      <FooterAnimation></FooterAnimation>
      {/* footer animation end */}
      <div className="container mx-auto px-4">
        {/* content section start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-0 mt-10 mb-5">
          <div className="m-2">
            <h3 className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold mb-2">ABOUT US</h3>
            <ul>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="/">Home</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="/about">About</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700 my-1"><Link to="/services">Services</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold mb-2">USEFUL LINK</h3>
            <ul>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="/">Returns</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700 my-1"><Link to="/">FAQs</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="/">Support policy</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold mb-2">LEARN MORE</h3>
            <ul>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700 mb-1"><Link to="/">Pricing</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="/">Events</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700 my-1"><Link to="/">Security</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="/">Blog Post</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold mb-2">FOLLOW US</h3>
            <ul>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700 mb-1"><Link to="https://www.facebook.com/">Facebook</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="https://x.com/login">Twitter</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700 my-1"><Link to="https://www.linkedin.com/">LinkedIn</Link></li>
              <li className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700"><Link to="https://www.instagram.com/">Instagram</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-xs sm:text-[13px] md:text-sm lg:text-base xl:text-xl 2xl:text-2xl font-bold mb-2">Let's Stay Connected</h3>
            <p className="text-xs sm:text-xs md:text-sm lg:text-[15px] xl:text-base 2xl:text-xl text-gray-700 sm:my-1 lg:my-1">Enter your Email address</p>
            <form className="flex gap-1 mt-1">
              <input name="" className="w-40 border-[1px] p-1 sm:p-1 md:p-1 lg:p-1 xl:p-2 2xl:p-2 md:w-full focus-within:outline-none" type="email" placeholder="enter your email"></input>
              <button type="submit" className="bg-blue-600/100 text-white px-1 sm:px-2 text-base">Submit</button>
            </form>
          </div>
        </div>
        {/* content section end */}
        <hr className="my-4 lg:my-10 mx-2"></hr>
        <div className="grid grid-cols-1 text-center mb-5">
          <p className="text-sm sm:text-base lg:text-lg italic text-gray-700">Copyright &copy;SofHouse 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;