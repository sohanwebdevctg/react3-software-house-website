import { useEffect, useState } from 'react';
import './OurProject.css';
import ServiceDescription from '../ServiceDescription/ServiceDescription';
import ServiceProject from '../ServiceProject/ServiceProject';

const OurProject = () => {

  // serviceDescription
  const [serviceDescriptions, setServiceDescriptions] = useState([])
  // serviceProject
  const [serviceProjects, setServiceProjects] = useState([])
  
  // serviceDescription
  useEffect(() => {
    fetch('serviceDescription.json')
    .then((res) => res.json())
    .then((data) => setServiceDescriptions(data))
  },[])

  // serviceProject
  useEffect(() => {
    fetch('serviceProject.json')
    .then((res) => res.json())
    .then((data) => setServiceProjects(data))
  },[])

  return (
    <div className='w-full h-2/6'>
      <div className='container mx-auto px-5'>
        {/* content section start */}
        <div className='sm:flex sm:justify-between sm:items-center my-10 gap-5'>
          {/* serviceDescription section start */}
          <div className='sm:flex-1'>
            {
              serviceDescriptions.map((serviceData) => <ServiceDescription
              key={serviceData.id}
              serviceData={serviceData}
              ></ServiceDescription>)
            }
          </div>
          {/* serviceDescription section end */}
          {/* serviceProject section start */}
          <div className='sm:flex-1 mt-5 sm:mt-0'>
            <div className='grid grid-cols-2 gap-3 sm:gap-4 md:gap-4 lg:gap-6 xl:gap-7 2xl:gap-7'>
              {
                serviceProjects.map((projectsData) => <ServiceProject
                key={projectsData.id}
                projectsData={projectsData}
                ></ServiceProject>)
              }
            </div>
          </div>
          {/* serviceProject section end */}
        </div>
        {/* content section end */}
      </div>
    </div>
  );
};

export default OurProject;
