import Header from "~/components/Section/Header/Header"
import Footer from "~/components/Section/Footer/Footer"
// import AboutHero from "~/components/Section/AboutUs/AboutHero"
import TrustedBy from "~/components/Section/AboutUs/TrustedBy"
import AboutMission from "~/components/Section/AboutUs/AboutMission"
import DataSolutions from "~/components/Section/AboutUs/DataSolutions"
import OurLeaders from "~/components/Section/AboutUs/OurLeaders"
import Journey from "~/components/Section/AboutUs/Journey"
import JoinTeam from "~/components/Section/AboutUs/JoinTeam"
import CallToAction from "~/components/Section/AboutUs/CallToAction"
import PageHeader from "~/components/Section/PageHeader/PageHeader"
import MissionVision from "~/components/Section/AboutUs/MissionVision"
import TeamSection from "~/components/Section/Team"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <PageHeader title="About Us" /> 
      <TrustedBy />
      <MissionVision />
      <AboutMission />
      <DataSolutions />
      <TeamSection />
      <Journey />
      <JoinTeam />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default AboutPage;