import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="bg-slate-400">
      <div className="container mx-auto">
        <div className="flex justify-between h-20 items-center">
          <h1>Software-house</h1>
          <ul className="flex gap-10">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;