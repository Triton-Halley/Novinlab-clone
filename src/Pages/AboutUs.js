import Hero from "../Components/AboutusComponents/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import AboutUsSection from "../Components/AboutusComponents/Aboutus/AboutusSection";
import DoctorsSlider from "../Components/AboutusComponents/Docotors/DoctorsSlider";
import LatestPosts from "../Components/HomePageComponents/LatestPosts/LatestPostsContainer";
const AboutUs = () => {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <DoctorsSlider />
      <LatestPosts />
      <Footer />
    </>
  );
};

export default AboutUs;
