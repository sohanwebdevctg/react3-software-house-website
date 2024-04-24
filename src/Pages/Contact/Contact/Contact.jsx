
import Form from '../Form/Form';
import ContactDescription from './../ContactDescription/ContactDescription';
import Location from './../Location/Location';

const Contact = () => {
  return (
    <>
      <div className='relative '>
        <div className='h-96 w-full  bg-teal-100	' >
          <div className='container mx-auto h-full'>
            {/* title section start */}
            <div className='flex justify-center items-center h-full'>
              <div>
                <h2 className="text-center font-semibold  md:font-bold xl:font-bold text-3xl sm:text-4xl md:text-4xl xl:text-4xl mb-2 " style={{ textShadow: '2px 2px 5px rgb(99 102 241 / 0.5)' }}>Get In Touch</h2>
                <div className="flex justify-center mb-6">
                  <h2 className="bg-red-500 w-52 h-[1px] rounded"></h2>
                </div>
                <p className='text-base sm:text-lg md:text-base lg:text-xl lg:pr-20 my-5 text-center text-gray-500'>We'll create high-quality linkable content and build at least 40 high-authority link to each<br></br>asset.Paving the way for you to grow your rankings.improve brand.</p>
              </div>
            </div>
            {/* title section end */}
          </div>
        </div>

        <div className='h-screen   md:h-80 lg:h-80 xl:h-80 2xl:h-80 w-full ' style={{ height: "revert-layer" }}></div>

        <div className='h-auto w-6/6  absolute inset-2/4 left-0 right-0 top-72'>
          <div className='flex justify-center'>
            <div className='md:w-5/6 lg:w-4/6 xl:w-5/6 2xl:w-4/6 bg-white rounded-lg shadow-2xl  p-2 m-4 sm:m-4 md:m-4 lg:m-2 xl:m-0 2xl:m-0'>
              <div className='grid grid-cols-1 gap-1  md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 '>
                <div className='rounded-lg bg-teal-500 relative overflow-hidden'>
                  {/* contact detales  */}
                  <ContactDescription></ContactDescription>
                  {/* div style  */}
                  <div className='absolute -bottom-10 -right-10   rounded-full z-10 opacity-25 bg-gradient-to-r from-white to-blue-500 ' style={{ width: "150px", height: "150px" }}></div>
                </div>
                <div className='p-5 pb-0 col-span-2'>
                  <Form></Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <Location></Location>
      </div>



    </>

  );
};

export default Contact;

