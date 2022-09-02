import DoctorsSlider from "../../components/aboutus/doctorsSlider/DoctorsSlider";
import Hero from "../../components/aboutus/hero/Hero";
import Information from "../../components/aboutus/information/information";
import Footer from "../../components/footer/Footer";
import Head from "next/head";
const AboutUs = () => {
  return (
    <>
      <Head>
        <title>درباره ما</title>
      </Head>
      <Hero />
      <Information />
      <DoctorsSlider />
      <Footer />
    </>
  );
};

export default AboutUs;
