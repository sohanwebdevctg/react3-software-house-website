import './ServiceProject.css'
import CountUp from 'react-countup';

const ServiceProject = ({projectsData}) => {

  const {logo, projectNum, title} = projectsData;

  return (
    <div className='text-center mt-3 sm:mt-5 md:mt-2 shadow-lg rounded-xl hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50 p-5 md:p-3 lg:p-5'>
      {/* logo section start */}
      <img className='w-[20%] sm:w-[25%] md:w-[12%] lg:w-[40%] mx-auto' src={logo}></img>
      {/* logo section end */}
      {/* projectNum & title section start */}
      <p className='flex justify-center gap-1 mt-5 text-lg sm:text-xl md:text-sm lg:text-xl font-bold'>
        <span><CountUp end={projectNum} duration={10}></CountUp></span>
        <span>{title}</span>
      </p>
      {/* projectNum & title section end */}
    </div>
  );
};

export default ServiceProject;