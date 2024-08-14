import './ServiceProject.css'
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceProject = ({projectsData}) => {

  const {logo, projectNum, title} = projectsData;

  return (
    <div data-aos="fade-right" className='text-center py-3 px-1 lg:py-4 xl:py-5 xl:px-2 space-y-2 shadow-lg rounded-xl hover:shadow-indigo-600/50 cursor-pointer shadow-indigo-500/50 hover:border-solid border-[1px] hover:border-[1px] hover:border-indigo-600'>
      {/* logo section start */}
      <img className='mx-auto w-7 h-7 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14' src={logo}></img>
      {/* logo section end */}
      {/* projectNum & title section start */}
      <p className='flex justify-center gap-1 text-[11px] sm:text-[10px] md:text-xs lg:text-base xl:text-lg 2xl:text-xl font-bold'>
        <p><CountUp end={projectNum} duration={10}></CountUp></p>
        <span>{title}</span>
      </p>
      {/* projectNum & title section end */}
    </div>
  );
};

export default ServiceProject;

