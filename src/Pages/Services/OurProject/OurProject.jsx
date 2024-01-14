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
    <div>
      <div className='container mx-auto my-10 lg:my-20'>
        {/* content section start */}
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:gap-10'>
          {/* serviceDescription section start */}
          <div className='m-3'>
            {
              serviceDescriptions.map((serviceData) => <ServiceDescription
              key={serviceData.id}
              serviceData={serviceData}
              ></ServiceDescription>)
            }
          </div>
          {/* serviceDescription section end */}
          {/* serviceProject section start */}
          <div className='m-3'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 md:gap-3 lg:gap-10'>
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