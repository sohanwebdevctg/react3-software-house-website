import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './ServiceDetails.css'

const ServiceDetails = () => {

  const {id} = useParams();
  
  const [details, setDetails] = useState([])
  const navigate = useNavigate()
  const previous = () => {
    navigate(-1)
  }

  useEffect(() => {
    fetch('/typeOfService.json')
    .then((res) => res.json())
    .then((data) => {
      const value = data.find((items) => items.id === id)
      setDetails(value)
    })
  },[id])

  return (
    <div className="my-10 md:mt-24 md:mb-10 ">
      <div className="container mx-auto px-3 md:px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* details section start */}
          <div className="flex-1 space-y-3">
            <p className="text-xl sm:text-2xl md:text-lg lg:text-2xl text-blue-600/100 font-bold">News</p>
            <h3 className="text-2xl sm:text-3xl md:text-xl lg:text-3xl text-gray-500">{details.title}</h3>
            <ul className="flex items-center gap-2">
            {
              details?.items?.map((item, index) => <li key={index} className=" bg-blue-600/100 text-white rounded-xl text-xs sm:text-sm md:text-sm lg:text-sm px-2 py-1">{item}
                </li>)
            }
            </ul>
            <ul className="flex items-center gap-2">
              <li className="flex items-center gap-2"><img src={details.clientImg} className="w-8 h-8"></img><span className="text-base  sm:text-xl md:text-base lg:text-lg">{details.clientName}</span></li>
              <li>|</li>
              <li><span span className="text-base sm:text-xl md:text-base lg:text-lg">{details.date}</span></li>
            </ul>
            <p className="text-sm sm:text-base md:text-sm lg:text-base italic lg:pr-5">{details.details}</p>
            <span className="flex items-center gap-2 cursor-pointer py-1 px-4 bg-blue-600/100 rounded-3xl w-[25%] sm:w-[16%] md:w-[23%] lg:w-[15%] text-sm sm:text-base md:text-sm lg:text-base text-slate-200" onClick={() => previous()}>
            <Link to="#" >Back </Link>
            <FaArrowRight/>
            </span>
          </div>
          {/* details section end */}
          {/* banner section start */}
          <div className="flex-1 mt-2">
            <img src={details.image} className="rounded-3xl h-full w-full"></img>
          </div>
          {/* banner section end */}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;