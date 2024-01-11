import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* content section start */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-10 my-10">
          <div className="m-2 text-center sm:text-left">
            <h3 className="text-xl font-extrabold uppercase mb-2">software house</h3>
            <p className="lg:text-base">we create seamless, scalable, and secure web experiences that drive business growth and user engagement.</p>
          </div>
          <div className="m-2 text-center sm:text-left">
            <h3 className="text-lg font-extrabold mb-2">ABOUT US</h3>
            <ul>
              <li className="text-base"><Link to="/">Home</Link></li>
              <li className="text-base my-1"><Link to="/">Services</Link></li>
              <li className="text-base"><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div className="m-2 text-center sm:text-left">
            <h3 className="text-lg font-extrabold mb-2">USEFUL LINK</h3>
            <ul>
              <li className="text-base"><Link to="/">Returns</Link></li>
              <li className="text-base my-1"><Link to="/">FAQs</Link></li>
              <li className="text-base"><Link to="/">Support policy</Link></li>
            </ul>
          </div>
          <div className="m-2 text-center sm:text-left">
            <h3 className="text-lg font-extrabold mb-2">LEARN MORE</h3>
            <ul>
              <li className="text-base mb-1"><Link to="/">Pricing</Link></li>
              <li className="text-base"><Link to="/">Events</Link></li>
              <li className="text-base my-1"><Link to="/">Security</Link></li>
              <li className="text-base"><Link to="/">Blog Post</Link></li>
            </ul>
          </div>
          <div className="m-2 text-center sm:text-left">
            <h3 className="text-lg font-extrabold mb-2">FOLLOW US</h3>
            <ul>
              <li className="text-base mb-1"><Link to="/">Facebook</Link></li>
              <li className="text-base"><Link to="/">Twitter</Link></li>
              <li className="text-base my-1"><Link to="/">LinkedIn</Link></li>
              <li className="text-base"><Link to="/">Instagram</Link></li>
            </ul>
          </div>
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default Footer;