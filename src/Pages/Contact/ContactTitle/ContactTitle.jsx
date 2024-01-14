import './ContactTitle.css'

const ContactTitle = () => {
  return (
    <div className='bg-slate-400 h-72'>
      <div className='container mx-auto h-full'>
        {/* title section start */}
        <div className='flex justify-center items-center h-full'>
         <div>
         <h2 className="text-center font-semibold  md:font-bold xl:font-bold text-3xl sm:text-4xl md:text-4xl xl:text-4xl mb-2 " style={{ textShadow:'2px 2px 5px rgb(99 102 241 / 0.5)' }}>Get In Touch</h2>
          <div className="flex justify-center mb-6">
            <h2 className="bg-red-500 w-52 h-[1px] rounded"></h2>
          </div>
          <p className='text-base sm:text-lg md:text-base lg:text-xl lg:pr-20 my-5 text-center text-gray-500'>We'll create high-quality linkable content and build at least 40 high-authority link to each<br></br>asset.Paving the way for you to grow your rankings.improve brand.</p>
         </div>
        </div>
        {/* title section end */}
      </div>
    </div>
  );
};

export default ContactTitle;

