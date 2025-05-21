import Header from "~/components/Section/Header/Header"
import Footer from "~/components/Section/Footer/Footer"
import AboutHero from "~/components/Section/AboutSection/AboutHero"
import TrustedBy from "~/components/Section/AboutSection/TrustedBy"
import AboutMission from "~/components/Section/AboutSection/AboutMission"
import DataSolutions from "~/components/Section/AboutSection/DataSolutions"
import OurLeaders from "~/components/Section/AboutSection/OurLeaders"
import Journey from "~/components/Section/AboutSection/Journey"
import JoinTeam from "~/components/Section/AboutSection/JoinTeam"
import CallToAction from "~/components/Section/AboutSection/CallToAction"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <AboutHero />
      <TrustedBy />
      <AboutMission />
      <DataSolutions />
      <OurLeaders />
      <Journey />
      <JoinTeam />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default AboutPage;