import Head from "next/head";
import Hero from "../../components/aboutus/hero/Hero";
import ContactUsComponent from "../../components/contactus/ContactUsComponent";
import Footer from "../../components/footer/Footer";

const ContactUs = () => {
  return (
    <>
      <Head>
        <title>تماس با ما</title>
      </Head>
      <Hero />
      <ContactUsComponent />
      <Footer />
    </>
  );
};

export default ContactUs;
