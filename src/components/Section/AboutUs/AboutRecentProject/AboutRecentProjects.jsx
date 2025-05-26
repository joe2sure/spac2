"use client"

import Link from "next/link";
import styled from 'styled-components';
import AboutRecentProjectsCard from "~/components/Ui/Cards/AboutRecentProjectsCard";
import projects from '~/db/aboutRecentProject.json';

// Only add styling to fix the equal height issue while keeping original design
const StyledRow = styled.div`
  &.row {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch; // This ensures all cards have equal height
  }
`;

const AboutRecentProjects = () => {
    return (
        <div className="section tekup-section-padding">
            <div className="container">
                <div className="tekup-section-title center">
                    <h2>Explore Our Gallery</h2>
                </div>
                <StyledRow className="row">
                    {
                        projects?.map((item, idx) => <AboutRecentProjectsCard key={idx} item={item}></AboutRecentProjectsCard>)
                    }
                </StyledRow>
                <div className="tekup-center-btn">
                    <Link className="tekup-default-btn" href="portfolio-01">View All Projects <i className="ri-arrow-right-up-line"></i></Link>
                </div>
            </div>
        </div>
    );
};

export default AboutRecentProjects;


// import Link from "next/link";
// import AboutRecentProjectsCard from "~/components/Ui/Cards/AboutRecentProjectsCard";
// // import AboutRecentProjectsCard from "~/components/Ui/Cards/RecentProjectsCardFive";
// import projects from '~/db/aboutRecentProject.json'
// const AboutRecentProjects = () => {
//     return (
//         <div className="section tekup-section-padding">
//             <div className="container">
//                 <div className="tekup-section-title center">
//                     <h2>Explore Our Gallery</h2>
//                 </div>
//                 <div className="row">
//                     {
//                         projects?.map((item, idx) => <AboutRecentProjectsCard key={idx} item={item}></AboutRecentProjectsCard>)
//                     }
//                 </div>
//                 <div className="tekup-center-btn">
//                     <Link className="tekup-default-btn" href="portfolio-01">View All Projects <i className="ri-arrow-right-up-line"></i></Link>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutRecentProjects;