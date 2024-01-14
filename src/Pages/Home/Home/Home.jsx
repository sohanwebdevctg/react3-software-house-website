
import Brands from '../Brands';
import TopSection from '../TopSection'
import WhyWeAre from './../WhyWeAre';
import CardService from './../CardService';
// import FooterX from './../../ExtraFooter/FooterX';

const Home = () => {
  return (
    <>
      <TopSection></TopSection>
      <WhyWeAre></WhyWeAre>
      <CardService></CardService>
      <Brands></Brands>
      {/* <FooterX></FooterX> */}
    </>
  );
};

export default Home;