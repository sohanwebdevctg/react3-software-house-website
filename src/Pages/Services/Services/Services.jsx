import { useState } from "react";
import { useEffect } from "react";
import ServicesCard from "../ServicesCard/ServicesCard";



const Services = () => {

  const [service, setService] = useState([])

  useEffect(() => {
    fetch('service.json')
    .then((response) => response.json())
    .then((data) => setService(data))
  }, [])

  console.log(service)

  return (
    <div>
      {/* servicesCard section start */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {
            service.map((items) => <ServicesCard
            key={items.id}
            items={items}
            ></ServicesCard>)
          }
        </div>
      </div>
      {/* servicesCard section end */}
    </div>
  );
};

export default Services;