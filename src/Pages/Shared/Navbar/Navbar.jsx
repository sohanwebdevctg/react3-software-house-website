import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

  const [show, setShow] = useState(false)

  return (
    <div>
    {/* desktop section start */}
      <div className=" hidden md:block  bg-indigo-50 fixed z-10 top-0 left-0 right-0 w-full">
        <div className="container mx-auto">
          <div className="flex justify-between h-16 items-center px-8">
            {/* logo start */}
            <h1><Link to="/"><h1 className='text-gray-400 md:text-xl lg:text-2xl font-bold'>Xcode</h1></Link></h1>
            {/* logo end */}
            {/* link start */}
            <ul className="md:flex gap-10">
              <li><NavLink to="/" className={({ isActive}) => isActive ? "text-gray-400 md:text-base lg:text-lg font-semibold" : "text-black md:text-base lg:text-lg" }>Home</NavLink></li>
              <li><NavLink to="/services" className={({ isActive}) => isActive ? "text-gray-400 md:text-base lg:text-lg font-semibold" : "text-black md:text-base lg:text-lg" }>Services</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive}) => isActive ? "text-gray-400 md:text-base lg:text-lg font-semibold" : "text-black md:text-base lg:text-lg" }>Contact</NavLink></li>
            </ul>
            {/* link end */}
          </div>
        </div>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div className='md:hidden'>
        {/* title section start */}
        <div className='bg-indigo-50 h-16 flex items-center px-4 justify-between relative'>
          <div>
            <Link to="/"><h1 className='text-lg font-bold text-gray-400'>Software House</h1></Link>
          </div>
          <div>
            {
              show ? <button onClick={() => {setShow(false)}}><IoClose className='text-gray-500 w-5 h-5'>close</IoClose></button> : <button onClick={() => {setShow(true)}}><GiHamburgerMenu className='text-gray-400 w-5 h-5'>open</GiHamburgerMenu></button>
            }
          </div>
        </div>
        {/* title section end */}
        {/* navItem section start */}
        <div className={`absolute ${show ? 'right-0': 'right-[1000px]'} z-10 bg-indigo-50 w-full duration-700`}>
          {/* link section start */}
            <div className='md:flex gap-5 text-center'>
              <p className='my-2'>
                <NavLink to="/" className={({ isActive}) => isActive ? "text-gray-400 text-base font-semibold" : "text-black text-base" }>Home</NavLink>
              </p>
              <p className='my-2'>
                <NavLink to="/services" className={({ isActive}) => isActive ? "text-gray-400 text-base font-semibold" : "text-black text-base" }>Services</NavLink>
              </p>
              <p className='my-2'>
                <NavLink to="/contact" className={({ isActive}) => isActive ? "text-gray-400 text-base font-semibold" : "text-black text-base" }>Contact</NavLink>
              </p>
            </div>
        </div>
        {/* navItem section end */}
      </div>
      {/* mobile section end */}
    </div>
  );
};

export default Navbar;