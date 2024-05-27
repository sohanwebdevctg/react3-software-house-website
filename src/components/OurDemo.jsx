import retailer from '../../public/demo/retailer.jpeg'
import ecommerce from '../../public/demo/ecommarce.png'


function OurDemo() {
    return (
        <div>
            {/* title  */}
            <div className="container mx-auto" >
                <div className="grid grid-cols-1 text-center mb-2 md:mb-3 lg:mb-5" >
                    < h2 className="text-center font-semibold  md:font-bold xl:font-bold text-xl sm:text-3xl md:text-3xl xl:text-4xl mb-1 " > Our Demo </h2>
                    <div className="flex justify-center mb-2 md:mb-4 lg:mb-4"><h2 className="bg-red-500 w-[32%] sm:w-[32%] md:w-[26%] lg:w-52 h-[1px] rounded"></h2 > </div>
                </div>
            </div>
            {/* demo  */}
            <div className='container mx-auto my-6 mb-8'>
                <div className="grid gap-4  grid-cols-1 md:grid-cols-2  ">
                    {/* p 1  */}
                    <div className='decoration-slate-500 p-2'>
                        <a href="https://retailer-pos.xcode.com.bd/">
                            <img className='w-full h-full rounded shadow-lg chat-notification-logo' src={retailer} alt="Retailer pos" />
                            <h3 className='mt-3 text-center text-blue-400 font-bold text-xl	'>Retailer POS</h3>
                        </a>
                    </div>
                    {/* p 2 */}
                    <div className='decoration-slate-500 p-2'>
                        <a href="https://ecommerce.xcode.com.bd/">
                            <img className='w-full h-full rounded shadow-lg chat-notification-logo' src={ecommerce} alt="Retailer pos" />
                            <h3 className='mt-3 text-center text-blue-400 font-bold text-xl	'>Ecommerce</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OurDemo
