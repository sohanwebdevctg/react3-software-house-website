import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import './ServiceDetails.css'
import contactForm from '../../../../public/contactImg.png'

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

  const userContact = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const phone = form.phone.value;
    const message = form.message.value;
    const userData = {name, email, phone, subject, message}
    console.log(userData)

    form.reset();
  }


  return (
    <div className="my-10 md:mt-24 md:mb-10 ">
      <div className="container mx-auto px-3 md:px-2">
        {/* details start */}
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
        {/* details end */}
        {/* contact section start */}
        <div className='md:flex md:justify-between md:items-center md:gap-5 lg:gap-10 bg-white rounded-lg shadow-2xl p-2 md:p-4 mt-20 sm:w-5/6 mx-auto'>
          <div className="md:flex-1">
            <img src={contactForm} className="h-[225px] md:h-full w-full sm:h-[310px]"></img>
          </div>
          <form onSubmit={userContact} className="space-y-5 p-2 md:p-5 md:flex-1">
            <div className="space-y-4 mb-2">
              <h1 className="text-xl sm:text-2xl md:text-xl lg:text-4xl font-bold">Get in Touch</h1>
              <p className="text-gray-500 text-sm sm:text-base md:text-base lg:text-lg">Fill out the Form below, and We'll get back to you as soon as possible</p>
            </div>
            <div className='form-control grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-5 md:gap-10'>
              <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="text" placeholder='Your Name here' name="name"></input>
              <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="email" placeholder='Your email here' name="email"></input>
            </div>
            <div className='form-control grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 sm:gap-5 md:gap-10'>
              <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="text" placeholder='Your subject here' name="subject" defaultValue={details.title}></input>
              <input className='border-slate-100 focus:border-cyan-400 border-b-2 w-full  outline-none pb-3' type="number" placeholder='Your phone here' name="phone"></input>
            </div>
            <div className='form-control grid grid-cols-1 gap-3'>
              <textarea className='border-slate-100 focus:border-cyan-400 border-b-2 w-full pb-3 lg:pb-5 h-full sm:h-28 md:h-32 lg:h-36 outline-none' type="text" placeholder='Your Message here' name="message"></textarea>
            </div>
            <input type="submit" value="Submit" className='bg-teal-500 hover:bg-teal-600 shadow-lg shadow-teal-500/50 rounded-md font-bold text-white p-2 lg:p-3 md:w-24 lg:w-32 w-full'></input>
          </form>
        </div>
        {/* contact section end */}
      </div>
    </div>
  );
};

export default ServiceDetails;