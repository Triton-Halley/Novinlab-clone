import MainNavigation from "../Components/HomePageComponents/MainNavigation/MainNavigation";
import HeroSlider from "../Components/HomePageComponents/Hero/HeroSilder";
import BoxContent from "../Components/HomePageComponents/Hero/HeroContentBox/Boxs";
import LabServices from "../Components/HomePageComponents/ServicesBox/LabServices";
import LabSection from "../Components/HomePageComponents/LabSection/LabSection";
import LatestPosts from "../Components/HomePageComponents/LatestPosts/LatestPostsContainer";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <>
      <MainNavigation />
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
