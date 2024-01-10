import './ServiceProject.css'

const ServiceProject = ({projectsData}) => {

  const {logo, projectNum, title} = projectsData;

  return (
    <div className='text-center rounded mt-3 sm:mt-5 md:mt-8'>
      {/* logo section start */}
      <img className='w-[20%] sm:w-[25%] md:w-[30%] lg:w-[40%] mx-auto' src={logo}></img>
      {/* logo section end */}
      {/* projectNum & title section start */}
      <p className='flex justify-center gap-1 mt-5 text-2xl sm:text-xl md:text-lg lg:text-2xl font-bold'>
        <span>{projectNum}</span>
        <span>{title}</span>
      </p>
      {/* projectNum & title section end */}
    </div>
  );
};

export default ServiceProject;