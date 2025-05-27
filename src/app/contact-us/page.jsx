// import FooterOneSection from "~/components/Section/Common/FooterOne/FooterOneSection";
// import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
// import PageHeader from "~/components/Section/Common/PageHeader";
// import ContactSection from "~/components/Section/Contact/ContactSection/ContactSection";
// import MapSection from "~/components/Section/Contact/MapSection";
// import Footer from "~/components/Section/Footer";

import Header from "~/components/Section/Header";
import ContactSection from "~/components/Section/Contact/ContactSection";
import MapSection from "~/components/Section/Contact/MapSection";
import PageHeader from "~/components/Section/PageHeader/PageHeader";
import Footer from "~/components/Section/Footer/Footer";
import CallToAction from "~/components/Section/AboutUs/CallToAction";

const ContactPage = () => {
  const HeaderImages = [
    "/images/about/abt_hero_1.jpg",
    "/images/about/abt_hero_2.jpg", 
    "/images/about/abt_hero_3.jpg"
  ];

  return (
    <>
      <Header className="tekup-header-top bg-light1 " />
      <PageHeader title="Contact us" images={HeaderImages}/>
      <ContactSection />
      <MapSection />
      <CallToAction />
      <Footer />
    </>
  );
};

export default ContactPage;
