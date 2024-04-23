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
            <section className="overflow-hidden h-2/6  pt-3 my-3 md:my-16" >
                <div className="container mx-auto ">
                    <div className="lg:flex items-center justify-center gap-10  mb-12">
                        <div className="flex justify-center items-center">
                            <div className='mx-1 sm:mx-2' data-aos="fade-right">
                                <div className="shadow-lg rounded p-1 sm:p-3 text-center sm:2/6 sm:2/6 sm:w-32 md:w-40 lg:w-36 xl:w-40 2xl:w-44   hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/wuvorxbv.json"
                                        trigger="hover"
                                    >
                                    </lord-icon>
                                    <h3 className='font-semibold text-[10px] sm:text-sm md:font-bold xl:font-bold lg:font-bold 2xl:font-bold'>Secure Software Solutions</h3>
                                </div>
                            </div>
                            <div className='mx-0 sm:mx-2'>
                                <div className='mb-5' data-aos="fade-down">
                                    <div className="shadow-lg rounded p-1 sm:p-3 text-center sm:2/6 sm:w-32 md:w-40 lg:w-36 xl:w-40 2xl:w-44   hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/ppsqwkvn.json"
                                            trigger="hover"
                                        >
                                        </lord-icon>
                                        <h3 className='font-semibold text-[10px] sm:text-sm md:font-bold xl:font-bold lg:font-bold 2xl:font-bold'>Proactive Cyber Protection</h3>
                                    </div>
                                </div>
                                <div className='mt-5' data-aos="fade-up">
                                    <div className="shadow-lg rounded p-1 sm:p-3 text-center sm:2/6 sm:2/6 sm:w-32 md:w-40 lg:w-36 xl:w-40 2xl:w-44   hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50">
                                        <lord-icon
                                            src="https://cdn.lordicon.com/abwrkdvl.json"
                                            trigger="hover">
                                        </lord-icon>

                                        <h3 className='font-semibold text-[10px] sm:text-sm md:font-bold xl:font-bold lg:font-bold 2xl:font-bold '>Advanced Security Innovations</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='m-1 sm:mx-2'>
                                <div className="shadow-lg rounded p-1 sm:p-3 text-center sm:2/6 sm:2/6 sm:w-32 md:w-40 lg:w-36 xl:w-40 2xl:w-44   hover:shadow-indigo-600/50 cursor-pointer  shadow-indigo-500/50" data-aos="fade-left">
                                    <lord-icon
                                        src="https://cdn.lordicon.com/lbjtvqiv.json"
                                        trigger="hover">
                                    </lord-icon>
                                    <h3 className='font-semibold text-[10px] sm:text-sm md:font-bold xl:font-bold lg:font-bold 2xl:font-bold'>Cutting-edge Software Security</h3>
                                </div>
                            </div>
                        </div>
                        {/* who we are */}
                        <div className='pt-5 sm:pt-6 md:pt-8 lg:pt-10 px-6 sm:px-4 md:px-6 lg:px-0 '>
                            <h3 className='inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight ' style={{ textShadow: '2px 2px 5px rgb(99 102 241 / 0.5)' }}>Who We Are?</h3>
                            <p className='mt-2 text-sm sm:text-base md:text-lg lg:text-lg text-slate-700 mb-6 text-justify'>We are a dynamic team of professionals dedicated to providing innovative solutions tailored to your needs. With expertise in various domains, we deliver high-quality services and support to drive your success. Trust us to bring your ideas to life and achieve your goals effectively and efficiently.</p>

                            <button type="button" className=" bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 drop-shadow-2xl">Reed More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyWeAre
