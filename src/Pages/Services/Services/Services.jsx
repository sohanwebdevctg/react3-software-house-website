import BestOffer from "../BestOffer/BestOffer";
import CardService from "../CardService/CardService";
import ClientDiscussion from "../ClientDiscussion/ClientDiscussion";
import OurProject from "../OurProject/OurProject";
import Title from './../../../components/Title';





const Services = () => {



  return (
    <div>
      {/* title section start */}
      <Title title={'Services'}></Title>
      {/* title section end */}
      {/* cardService section start */}
      <CardService></CardService>
      {/* cardService section end */}
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