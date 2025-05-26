"use client"

import Link from "next/link";
import styled from 'styled-components';

// Styled Components - keeping original structure but fixing dimensions
const CardColumn = styled.div`
  // Keep original Bootstrap classes but ensure equal height
  &.col-xl-4.col-md-6 {
    display: flex;
    margin-bottom: 30px;
  }
`;

const PortfolioWrap = styled.div`
  // Keep original class name and styling
  &.tekup-portfolio-wrap4 {
    width: 100%;
    height: 100%; // Ensure full height
    display: flex;
    flex-direction: column;
  }
`;

const PortfolioThumb = styled.div`
  // Keep original class name and styling
  &.tekup-portfolio-thumb4 {
    position: relative;
    overflow: hidden;
    height: 100%; // Ensure full height
    display: flex;
    flex-direction: column;
  }
  
  img {
    width: 100%;
    height: 250px; // Fixed height for all images
    object-fit: cover; // Maintain aspect ratio while filling container
    object-position: center;
  }
`;

const PortfolioData = styled.div`
  // Keep original class name and styling
  &.tekup-portfolio-data4 {
    // Preserve original styling while ensuring consistent height
    min-height: 120px; // Fixed minimum height for content area
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    
    h5 {
      // Limit title to 2 lines to prevent height variation
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: 2.4em; // Reserve space for 2 lines
      line-height: 1.2;
    }
    
    p {
      // Limit category to 1 line
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0;
    }
  }
`;

const PortfolioBtn = styled(Link)`
  // Keep original class name and styling
  &.tekup-portfolio-btn4 {
    // Preserve original button styling
    position: absolute;
    bottom: 15px;
    right: 15px;
  }
`;

const AboutRecentProjectsCard = ({item}) => {
    return (
        <CardColumn className="col-xl-4 col-md-6">
            <PortfolioWrap className="tekup-portfolio-wrap4">
                <PortfolioThumb className="tekup-portfolio-thumb4">
                    <img src={item?.image} alt="" />
                    <PortfolioData className="tekup-portfolio-data4">
                        <div>
                            <Link href="single-portfolio">
                                <h5>{item?.title}</h5>
                            </Link>
                            <p>{item?.category}</p>
                        </div>
                        <PortfolioBtn className="tekup-portfolio-btn4" href="single-portfolio">
                            <i className="ri-arrow-right-up-line"></i>
                        </PortfolioBtn>
                    </PortfolioData>
                </PortfolioThumb>
            </PortfolioWrap>
        </CardColumn>
    );
};

export default AboutRecentProjectsCard;



// import Link from "next/link";

// const AboutRecentProjectsCard = ({item}) => {
//     return (
//         <div className="col-xl-4 col-md-6">
//             <div className="tekup-portfolio-wrap4">
//                 <div className="tekup-portfolio-thumb4">
//                     <img src={item?.image} alt="" />
//                     <div className="tekup-portfolio-data4">
//                         <Link href="single-portfolio">
//                             <h5>{item?.title}</h5>
//                         </Link>
//                         <p>{item?.category}</p>
//                         <Link className="tekup-portfolio-btn4" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutRecentProjectsCard;