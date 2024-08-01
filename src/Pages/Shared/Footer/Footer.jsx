import { Link } from "react-router-dom";
import FooterAnimation from '../../ExtraFooter/FooterAnimation';


const Footer = () => {
  return (
    <div className="overflow-hidden">
      {/* footer animation  */}
      <FooterAnimation></FooterAnimation>
      {/* footer animation end */}
      <div className="container mx-auto">
        {/* content section start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-1 mt-10 mb-5">
          <div className="m-2">
            <h3 className="text-sm lg:text-base font-bold mb-2">ABOUT US</h3>
            <ul>
              <li className="text-sm lg:text-base"><Link to="/">Home</Link></li>
              <li className="text-sm lg:text-base my-1"><Link to="/services">Services</Link></li>
              <li className="text-sm lg:text-base"><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-base font-bold mb-2">USEFUL LINK</h3>
            <ul>
              <li className="text-sm lg:text-base"><Link to="/">Returns</Link></li>
              <li className="text-sm lg:text-base my-1"><Link to="/">FAQs</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Support policy</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-base font-bold mb-2">LEARN MORE</h3>
            <ul>
              <li className="text-sm lg:text-base mb-1"><Link to="/">Pricing</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Events</Link></li>
              <li className="text-sm lg:text-base my-1"><Link to="/">Security</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Blog Post</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-base font-bold mb-2">FOLLOW US</h3>
            <ul>
              <li className="text-sm lg:text-base mb-1"><Link to="https://www.facebook.com/">Facebook</Link></li>
              <li className="text-sm lg:text-base"><Link to="https://x.com/login">Twitter</Link></li>
              <li className="text-sm lg:text-base my-1"><Link to="https://www.linkedin.com/">LinkedIn</Link></li>
              <li className="text-sm lg:text-base"><Link to="https://www.instagram.com/">Instagram</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-base font-bold mb-2">Let's Stay Connected</h3>
            <p className="text-sm lg:text-base sm:my-1 lg:my-1">Enter your Email address</p>
            <form className="flex gap-1">
              <input name="" className="border-[1px] p-2 md:w-full focus-within:outline-none" type="email" placeholder="enter your email"></input>
              <button type="submit" className="bg-blue-600/100 text-white px-1 sm:px-2 text-base">Submit</button>
            </form>
          </div>
        </div>
        {/* content section end */}
        <hr className="my-4 lg:my-10 mx-2"></hr>
        <div className="grid grid-cols-1 text-center mb-5">
          <p className="text-sm sm:text-base lg:text-lg">Copyright &copy;logoTechnology 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;