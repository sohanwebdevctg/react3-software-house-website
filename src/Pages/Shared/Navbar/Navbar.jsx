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
          <div className="flex justify-between h-16 items-center">
            {/* logo start */}
            <h1><Link to="/"><h1 className='text-2xl font-bold'>Software house</h1></Link></h1>
            {/* logo end */}
            {/* link start */}
            <ul className="md:flex gap-10">
              <li><NavLink to="/" className={({ isActive}) => isActive ? "text-gray-400 text-lg font-semibold" : "text-black text-lg" }>Home</NavLink></li>
              <li><NavLink to="/services" className={({ isActive}) => isActive ? "text-gray-400 text-lg font-semibold" : "text-black text-lg" }>Services</NavLink></li>
              <li><NavLink to="/contact" className={({ isActive}) => isActive ? "text-gray-400 text-lg font-semibold" : "text-black text-lg" }>Contact</NavLink></li>
            </ul>
            {/* link end */}
          </div>
        </div>
      </div>
      {/* desktop section end */}
      {/* mobile section start */}
      <div className='md:hidden'>
        {/* title section start */}
        <div className='bg-gray-400 h-20 flex items-center px-2 justify-between relative'>
          <div>
            <Link to="/"><h1 className='text-xl font-bold text-white'>Software House</h1></Link>
          </div>
          <div>
            {
              show ? <button onClick={() => {setShow(false)}}><IoClose className='text-white w-6 h-6'>close</IoClose></button> : <button onClick={() => {setShow(true)}}><GiHamburgerMenu className='text-white w-6 h-6'>open</GiHamburgerMenu></button>
            }
          </div>
        </div>
        {/* title section end */}
        {/* navItem section start */}
        <div className={`absolute ${show ? 'right-0': 'right-[1000px]'} z-10 bg-gray-400 w-full duration-700`}>
          {/* link section start */}
            <div className='md:flex gap-5 text-center'>
              <p className='my-2'>
                <NavLink to="/" className={({ isActive}) => isActive ? "text-white text-xl font-semibold" : "text-black text-xl" }>Home</NavLink>
              </p>
              <p className='my-2'>
                <NavLink to="/services" className={({ isActive}) => isActive ? "text-white text-xl font-semibold" : "text-black text-xl" }>Services</NavLink>
              </p>
              <p className='my-2'>
                <NavLink to="/contact" className={({ isActive}) => isActive ? "text-white text-xl font-semibold" : "text-black text-xl" }>Contact</NavLink>
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