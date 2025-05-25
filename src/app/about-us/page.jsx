import Header from "~/components/Section/Header/Header" 
import Footer from "~/components/Section/Footer/Footer" 
import TrustedBy from "~/components/Section/AboutUs/TrustedBy" 
import AboutMission from "~/components/Section/AboutUs/AboutMission" 
import DataSolutions from "~/components/Section/AboutUs/DataSolutions" 
import JoinTeam from "~/components/Section/AboutUs/JoinTeam" 
import CallToAction from "~/components/Section/AboutUs/CallToAction" 
// import EnhancedPageHeader from "~/components/Section/PageHeader/EnhancedPageHeader" 
import MissionVision from "~/components/Section/AboutUs/MissionVision" 
import TeamSection from "~/components/Section/Team" 
import AboutRecentProjects from "~/components/Section/AboutUs/AboutRecentProject" 
import PageHeader from "~/components/Section/PageHeader/PageHeader"

const AboutPage = () => { 
  // Define custom images for the about page header
  const aboutHeaderImages = [
    "/images/about/abt_hero_1.jpg",
    "/images/about/abt_hero_2.jpg", 
    "/images/about/abt_hero_3.jpg"
  ];

  return ( 
    <div> 
      <Header /> 
      <PageHeader 
        title="About Us" 
        subtitle="Discover our story, mission, and the passionate team driving innovation forward"
        images={aboutHeaderImages}
        headerOffset={130} // Manually set if auto-detection doesn't work
      />  
      <TrustedBy /> 
      <MissionVision /> 
      <AboutMission /> 
      <DataSolutions /> 
      <TeamSection /> 
      <AboutRecentProjects /> 
      <JoinTeam /> 
      <CallToAction /> 
      <Footer /> 
    </div> 
  ) 
}  

export default AboutPage;



// import Header from "~/components/Section/Header/Header" 
// import Footer from "~/components/Section/Footer/Footer" 
// import TrustedBy from "~/components/Section/AboutUs/TrustedBy" 
// import AboutMission from "~/components/Section/AboutUs/AboutMission" 
// import DataSolutions from "~/components/Section/AboutUs/DataSolutions" 
// import JoinTeam from "~/components/Section/AboutUs/JoinTeam" 
// import CallToAction from "~/components/Section/AboutUs/CallToAction" 
// // import EnhancedPageHeader from "~/components/Section/PageHeader/EnhancedPageHeader" 
// import MissionVision from "~/components/Section/AboutUs/MissionVision" 
// import TeamSection from "~/components/Section/Team" 
// import AboutRecentProjects from "~/components/Section/AboutUs/AboutRecentProject" 
// import PageHeader from "~/components/Section/PageHeader/PageHeader"

// const AboutPage = () => { 
//   // Define custom images for the about page header
//   const aboutHeaderImages = [
//     "/images/about/abt_hero_1.jpg",
//     "/images/about/abt_hero_2.jpg", 
//     "/images/about/abt_hero_3.jpg"
//   ];

//   return ( 
//     <div> 
//       <Header /> 
//       <PageHeader 
//         title="About Us" 
//         subtitle="Discover our story, mission, and the passionate team driving innovation forward"
//         images={aboutHeaderImages}
//       />  
//       <TrustedBy /> 
//       <MissionVision /> 
//       <AboutMission /> 
//       <DataSolutions /> 
//       <TeamSection /> 
//       <AboutRecentProjects /> 
//       <JoinTeam /> 
//       <CallToAction /> 
//       <Footer /> 
//     </div> 
//   ) 
// }  

// export default AboutPage;