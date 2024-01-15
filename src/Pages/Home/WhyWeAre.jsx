// import logo from '../../assets/images/google-logo.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";

defineElement(lottie.loadAnimation);
AOS.init();

const WhyWeAre = () => {
  return (
    <>
        <section  className="w-full h-2/6  pt-3 mb-16 mt-16" >
            <div className="container mx-auto  ">
               <div className="grid md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4  mb-12">
                <div className="flex justify-center items-center ">
                    <div className='mx-2' data-aos="fade-right">
                        <div className="shadow-lg rounded p-3 text-center sm:2/6 sm:2/6 sm:w-32 md:w-40 lg:w-36 xl:w-40 2xl:w-4   hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                            <lord-icon
                                src="https://cdn.lordicon.com/wuvorxbv.json"
                                trigger="hover"
                                >
                            </lord-icon>
                            <h3 className= 'font-semibold md:font-bold xl:font-bold lg:font-bold 2xl:font-bold'>Secure Software Solutions</h3>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <div className='mb-5' data-aos="fade-down">
                            <div className="shadow-lg rounded p-3 text-center sm:2/6 sm:w-32 md:w-40 lg:w-36 xl:w-40 2xl:w-44   hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                            <lord-icon
                                src="https://cdn.lordicon.com/ppsqwkvn.json"
                                trigger="hover">
                            </lord-icon>
                                <h3 className='font-semibold  md:font-bold xl:font-bold lg:font-bold 2xl:font-bold'>Proactive Cyber Protection</h3>
                            </div>
                        </div>
                        <div className='mt-5' data-aos="fade-up">
                            <div className="shadow-lg rounded p-3 text-center sm:2/6 sm:2/6 sm:w-32 md:w-40 lg:w-36 xl:w-40 2xl:w-4   hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                            <lord-icon
                                src="https://cdn.lordicon.com/abwrkdvl.json"
                                trigger="hover">
                            </lord-icon>

                                <h3 className='font-semibold  md:font-bold xl:font-bold lg:font-bold 2xl:font-bold '>Advanced Security Innovations</h3>
                            </div>  
                        </div>
                    </div>
                    <div className='mx-2'>
                        <div className="shadow-lg rounded p-3 text-center sm:2/6 sm:2/6 sm:w-32 md:w-40 lg:w-36 xl:w-40 2xl:w-4   hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50" data-aos="fade-left">
                        <lord-icon
                            src="https://cdn.lordicon.com/lbjtvqiv.json"
                            trigger="hover">
                        </lord-icon>
                            <h3 className='font-semibold  md:font-bold xl:font-bold lg:font-bold 2xl:font-bold'>Cutting-edge Software Security</h3>
                        </div>
                    </div>
                </div>
                {/* who we are */}
                <div className='ps-2 sm:ps-6 md:ps-12 lg:ps-12 px-6 sm:px-6 md:px-0 lg:px-0 '>
                    <h3 className='inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight ' style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Who We Are?</h3>
                    <p className='mt-2 text-lg text-slate-700 mb-6 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur amet, eius aspernatur nam nesciunt libero ipsum esse doloremque error quod explicabo, sint nihil reprehenderit? Rerum itaque deserunt nesciunt minima.</p>
                   
                    <button type="button" className=" bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 drop-shadow-2xl">Reed More</button>
                </div>
               </div>
            </div>
        </section>
    </>
  )
}

export default WhyWeAre
