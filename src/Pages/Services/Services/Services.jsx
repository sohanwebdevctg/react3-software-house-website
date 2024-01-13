import BestOffer from "../BestOffer/BestOffer";
import ClientDiscussion from "../ClientDiscussion/ClientDiscussion";
import OurProject from "../OurProject/OurProject";
import OurServices from "../OurServices/OurServices";




const Services = () => {



  return (
    <div>
      {/* ourServices section start */}
      <OurServices></OurServices>
      {/* ourServices section end */}
      {/* clientDiscussion section start */}
      <ClientDiscussion></ClientDiscussion>
      {/* clientDiscussion section end */}
      {/* bestOffer section start */}
      <BestOffer></BestOffer>
      {/* bestOffer section end */}
      {/* ourProject section start */}
      <OurProject></OurProject>
      {/* ourProject section end */}


    </div>
  );
};

export default Services;