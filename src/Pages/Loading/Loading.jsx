

const Loading = () => {
  return (
    <div className='bg-white h-screen flex items-center justify-center'>
    <div className='md:container md:mx-auto'>
    <div className='md:h-screen flex justify-center items-center text-center'>
    {/* description section start */}
      <div className='flex'>
        <p className='text-black text-6xl'>L</p>
        <div className='border-4 border-blue-600/100 p-7 border-dotted rounded-full animate-spin'></div>
        <p className='text-black text-6xl'>ading....</p>
      </div>
    {/* description section end */}
    </div>
    {/* items section start */}
  </div>
  </div>
  );
};

export default Loading;