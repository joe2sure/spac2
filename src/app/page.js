// import CallToAction from '~/components/Section/AboutUs/CallToAction';
import OurLeaders from '~/components/Section/AboutUs/OurLeaders';
import ChooseSection from '~/components/Section/ChooseSection';
import Footer from '~/components/Section/Footer/Footer';
import Header from '~/components/Section/Header/Header';
import HeroSection from "~/components/Section/HeroSection"; 
import LetsBuildSection from '~/components/Section/LetsBuild';
import PricingSection from '~/components/Section/Pricing';
import RecentBlogSection from '~/components/Section/RecentBlog';
import RecentProjectsSection from '~/components/Section/RecentProjects';
import ServiceSection from "~/components/Section/ServiceSection";
import SuccessRatesSection from '~/components/Section/SuccessRates/SuccessRateSection';
import TestimonialSection from '~/components/Section/Testimonial';


export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <SuccessRatesSection />
      <RecentProjectsSection />
      <ChooseSection />
      <PricingSection />
       <OurLeaders />
      <LetsBuildSection />
      <TestimonialSection />
      <RecentBlogSection />
      <CallToAction />
      <Footer />
    </div>
  );
}