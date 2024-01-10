import Interesting from "../Interesting/Interesting";
import OurProject from "../OurProject/OurProject";
import OurServices from "../OurServices/OurServices";




const Services = () => {



  return (
    <div>
      {/* ourServices section start */}
      <OurServices></OurServices>
      {/* ourServices section end */}
      {/* ourProject section start */}
      <OurProject></OurProject>
      {/* ourProject section end */}
      {/* interesting section start */}
      <Interesting></Interesting>
      {/* interesting section end */}
    </div>
  );
};

export default Services;