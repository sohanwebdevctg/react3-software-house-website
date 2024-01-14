
import Brands from '../Brands';
import TopSection from '../TopSection'
import WhyWeAre from './../WhyWeAre';
import CardService from './../CardService';


const Home = () => {
  return (
    <>
      <TopSection></TopSection>
      <WhyWeAre></WhyWeAre>
      <CardService></CardService>
      <Brands></Brands>
    </>
  );
};

export default Home;