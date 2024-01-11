import logo from '../../assets/images/google-logo.jpg';
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation);

const WhyWeAre = () => {
  return (
    <>
        <section  className="w-full h-2/6  pt-3 mb-16 mt-16" style={{ borderRadius:"5px 5px 5px 5px" }}>
            <div className="container mx-auto ">
               <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-center items-center">
                    <div className='mx-2'>
                        <div className="shadow-lg rounded p-3 text-center w-48  hover:shadow-xl ">
                            <lord-icon
                                src="https://cdn.lordicon.com/wuvorxbv.json"
                                trigger="hover"
                                >
                            </lord-icon>
                            <h3 className='font-bold '>Secure Software Solutions</h3>
                        </div>
                    </div>
                    <div className='mx-2'>
                        <div className='mb-5'>
                            <div className="shadow-lg rounded p-3 text-center w-48 hover:shadow-xl">
                            <lord-icon
                                src="https://cdn.lordicon.com/ppsqwkvn.json"
                                trigger="hover">
                            </lord-icon>
                                <h3 className='font-bold '>Proactive Cyber Protection</h3>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="shadow-lg rounded p-3 text-center w-48 hover:shadow-xl">
                            <lord-icon
                                src="https://cdn.lordicon.com/abwrkdvl.json"
                                trigger="hover">
                            </lord-icon>

                                <h3 className='font-bold '>Advanced Security Innovations</h3>
                            </div>  
                        </div>
                    </div>
                    <div className='mx-2'>
                        <div className="shadow-lg rounded p-3 text-center w-48 hover:shadow-xl">
                        <lord-icon
                            src="https://cdn.lordicon.com/lbjtvqiv.json"
                            trigger="hover">
                        </lord-icon>
                            <h3 className='font-bold '>Cutting-edge Software Security</h3>
                        </div>
                    </div>
                </div>
                {/* who we are */}
                <div className='ps-20'>
                    <h3 className='inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight '>Who We Are?</h3>
                    <p className='mt-2 text-lg text-slate-700 mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla consectetur amet, eius aspernatur nam nesciunt libero ipsum esse doloremque error quod explicabo, sint nihil reprehenderit? Rerum itaque deserunt nesciunt minima.</p>
                    <a href="#" className=' text-slate-400'>Reed More..</a>
                </div>
               </div>
            </div>
        </section>
    </>
  )
}

export default WhyWeAre
