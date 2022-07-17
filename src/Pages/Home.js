import HeroSlider from "../Components/Hero/HeroSilder";
import BoxContent from "../Components/Hero/HeroContentBox/Boxs";
import LabServices from "../Components/ServicesBox/LabServices";
import LabSection from "../Components/LabSection/LabSection";
import LatestPosts from "../Components/LatestPosts/LatestPostsContainer";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <HeroSlider />
      <BoxContent />
      <LabServices />
      <LabSection />
      <LatestPosts />
      <Footer />
    </>
  );
};

export default Home;
