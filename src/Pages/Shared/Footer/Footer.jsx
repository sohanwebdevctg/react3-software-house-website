import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <div className="container mx-auto">
        {/* content section start */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-1 mt-10 mb-5">
          <div className="m-2">
            <h3 className="text-sm lg:text-xl font-extrabold uppercase mb-2">software house</h3>
            <p className="text-sm lg:text-base">we create seamless, scalable, and secure web experiences that drive business growth and user engagement.</p>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-lg font-extrabold mb-2">ABOUT US</h3>
            <ul>
              <li className="text-sm lg:text-base"><Link to="/">Home</Link></li>
              <li className="text-sm lg:text-base my-1"><Link to="/">Services</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Contact</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-lg font-extrabold mb-2">USEFUL LINK</h3>
            <ul>
              <li className="text-sm lg:text-base"><Link to="/">Returns</Link></li>
              <li className="text-sm lg:text-base my-1"><Link to="/">FAQs</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Support policy</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-lg font-extrabold mb-2">LEARN MORE</h3>
            <ul>
              <li className="text-sm lg:text-base mb-1"><Link to="/">Pricing</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Events</Link></li>
              <li className="text-sm lg:text-base my-1"><Link to="/">Security</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Blog Post</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-lg font-extrabold mb-2">FOLLOW US</h3>
            <ul>
              <li className="text-sm lg:text-base mb-1"><Link to="/">Facebook</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Twitter</Link></li>
              <li className="text-sm lg:text-base my-1"><Link to="/">LinkedIn</Link></li>
              <li className="text-sm lg:text-base"><Link to="/">Instagram</Link></li>
            </ul>
          </div>
          <div className="m-2">
            <h3 className="text-sm lg:text-lg font-extrabold mb-2">Let's Stay Connected</h3>
            <p className="text-sm lg:text-base sm:my-1 lg:my-1">Enter your Email address</p>
            <form>
              <div className="grid grid-cols-2 relative">
                <input type="email" className="border-2 border-black p-2 lg:p-3 w-36 sm:w-44 lg:w-48 rounded"></input>
                <button className="bg-yellow-400 text-white px-2 py-1 lg:py-2 absolute top-2 sm:right-6 md:right-16 lg:right-2 right-2 text-sm">submit</button>
              </div>
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