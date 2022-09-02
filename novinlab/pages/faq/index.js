import FAQS from "../../components/faq/faqContainer";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/aboutus/hero/Hero";
import Head from "next/head";
const FAQ = () => {
  return (
    <>
      <Head>
        <title>سوالات متداول</title>
      </Head>
      <Hero />
      <FAQS />
      <Footer />
    </>
  );
};

export default FAQ;
