"use client"

import Link from "next/link";
import styled, { keyframes, css } from "styled-components";
import { useState, useEffect } from "react";

// Header height detector utility
const useHeaderHeight = () => {
  const [headerHeight, setHeaderHeight] = useState(80);
  
  useEffect(() => {
    const detectHeaderHeight = () => {
      const header = document.querySelector('header') || 
                   document.querySelector('[class*="header"]') || 
                   document.querySelector('nav');
      
      if (header) {
        const height = header.getBoundingClientRect().height;
        setHeaderHeight(height + 20); // Add some buffer
      }
    };
    
    // Detect on mount and resize
    detectHeaderHeight();
    window.addEventListener('resize', detectHeaderHeight);
    
    return () => window.removeEventListener('resize', detectHeaderHeight);
  }, []);
  
  return headerHeight;
};

// Keyframe animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

// Styled Components
const PageHeaderContainer = styled.section`
  position: relative;
  min-height: 70vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin-top: 0;
  padding-top: ${props => props.headerHeight || 120}px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    background: url("data:image/svg+xml,%3Csvg width='100' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 120 Q25 80 50 100 T100 90 V120 Z' fill='white'/%3E%3C/svg%3E") repeat-x;
    background-size: 100px 120px;
    z-index: 3;
  }
  
  /* Responsive padding adjustments */
  @media (max-width: 768px) {
    padding-top: ${props => Math.max((props.headerHeight || 120) - 20, 80)}px;
    min-height: 60vh;
  }
  
  @media (max-width: 480px) {
    padding-top: ${props => Math.max((props.headerHeight || 120) - 40, 60)}px;
    min-height: 50vh;
  }
`;

const BackgroundImageSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 1.5s ease-in-out;
  transform: scale(${props => props.isActive ? 1.05 : 1});
  transition: opacity 1.5s ease-in-out, transform 8s ease-out;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 4;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const MainTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -2px;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: ${fadeInUp} 1s ease-out 0.3s both;
  
  background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #00d4ff, #ff6b6b);
    border-radius: 2px;
    animation: ${fadeInUp} 1s ease-out 0.6s both;
  }
`;

const SubTitle = styled.p`
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  line-height: 1.6;
  animation: ${fadeInUp} 1s ease-out 0.5s both;
`;

const BreadcrumbNav = styled.nav`
  animation: ${slideInRight} 1s ease-out 0.7s both;
`;

const BreadcrumbList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  
  &:not(:last-child)::after {
    content: '/';
    margin-left: 1rem;
    color: rgba(255, 255, 255, 0.6);
    font-weight: 300;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }
`;

const CurrentPage = styled.span`
  color: white;
  padding: 8px 16px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  font-weight: 600;
  
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  background-size: 200px 100%;
  animation: ${shimmer} 2s infinite linear;
`;

const ImageIndicators = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 4;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  background: ${props => props.isActive ? 'white' : 'transparent'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: white;
    transform: scale(1.2);
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 2;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    animation: float 6s ease-in-out infinite;
  }
  
  &::before {
    width: 100px;
    height: 100px;
    top: 20%;
    left: 10%;
    animation-delay: 0s;
  }
  
  &::after {
    width: 60px;
    height: 60px;
    top: 60%;
    right: 15%;
    animation-delay: 3s;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
`;

const PageHeader = ({ 
  title, 
  subtitle,
  headerOffset = 0, // Manual override for header height
  images = [
    "/images/breadcrumb/breadcrumb.png",
    "/images/breadcrumb/breadcrumb-2.png", 
    "/images/breadcrumb/breadcrumb-3.png"
  ]
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const detectedHeaderHeight = useHeaderHeight();
  const finalHeaderHeight = headerOffset || detectedHeaderHeight;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % images.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <PageHeaderContainer headerHeight={finalHeaderHeight}>
      <BackgroundImageSlider>
        {images.map((image, index) => (
          <BackgroundImage
            key={index}
            bgImage={image}
            isActive={index === currentImageIndex}
          />
        ))}
      </BackgroundImageSlider>
      
      <FloatingElements />
      
      <ContentWrapper>
        <MainTitle>{title}</MainTitle>
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
        
        <BreadcrumbNav>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <CurrentPage>
                {title} {title === "404" ? "page not found" : ""}
              </CurrentPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </BreadcrumbNav>
      </ContentWrapper>

      {images.length > 1 && (
        <ImageIndicators>
          {images.map((_, index) => (
            <Indicator
              key={index}
              isActive={index === currentImageIndex}
              onClick={() => handleIndicatorClick(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </ImageIndicators>
      )}
    </PageHeaderContainer>
  );
};

export default PageHeader;





// import Link from "next/link";
// import styled, { keyframes, css } from "styled-components";
// import { useState, useEffect } from "react";

// // Keyframe animations
// const fadeInUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// const slideInRight = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(50px);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const shimmer = keyframes`
//   0% {
//     background-position: -200px 0;
//   }
//   100% {
//     background-position: calc(200px + 100%) 0;
//   }
// `;

// // Styled Components
// const PageHeaderContainer = styled.section`
//   position: relative;
//   min-height: 70vh;
//   display: flex;
//   align-items: center;
//   overflow: hidden;
//   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: rgba(0, 0, 0, 0.4);
//     z-index: 2;
//   }
  
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     height: 120px;
//     background: url("data:image/svg+xml,%3Csvg width='100' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 120 Q25 80 50 100 T100 90 V120 Z' fill='white'/%3E%3C/svg%3E") repeat-x;
//     background-size: 100px 120px;
//     z-index: 3;
//   }
// `;

// const BackgroundImageSlider = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   z-index: 1;
// `;

// const BackgroundImage = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-image: url(${props => props.bgImage});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   opacity: ${props => props.isActive ? 1 : 0};
//   transition: opacity 1.5s ease-in-out;
//   transform: scale(${props => props.isActive ? 1.05 : 1});
//   transition: opacity 1.5s ease-in-out, transform 8s ease-out;
// `;

// const ContentWrapper = styled.div`
//   position: relative;
//   z-index: 4;
//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 0 20px;
//   text-align: center;
// `;

// const MainTitle = styled.h1`
//   font-size: clamp(3rem, 8vw, 6rem);
//   font-weight: 800;
//   color: white;
//   margin-bottom: 1.5rem;
//   line-height: 1.1;
//   letter-spacing: -2px;
//   text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
//   animation: ${fadeInUp} 1s ease-out 0.3s both;
  
//   background: linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
  
//   position: relative;
  
//   &::after {
//     content: '';
//     position: absolute;
//     bottom: -10px;
//     left: 50%;
//     transform: translateX(-50%);
//     width: 80px;
//     height: 4px;
//     background: linear-gradient(90deg, #00d4ff, #ff6b6b);
//     border-radius: 2px;
//     animation: ${fadeInUp} 1s ease-out 0.6s both;
//   }
// `;

// const SubTitle = styled.p`
//   font-size: 1.3rem;
//   color: rgba(255, 255, 255, 0.9);
//   margin-bottom: 3rem;
//   max-width: 600px;
//   margin-left: auto;
//   margin-right: auto;
//   font-weight: 300;
//   line-height: 1.6;
//   animation: ${fadeInUp} 1s ease-out 0.5s both;
// `;

// const BreadcrumbNav = styled.nav`
//   animation: ${slideInRight} 1s ease-out 0.7s both;
// `;

// const BreadcrumbList = styled.ul`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   gap: 1rem;
// `;

// const BreadcrumbItem = styled.li`
//   display: flex;
//   align-items: center;
//   font-size: 1rem;
//   font-weight: 500;
  
//   &:not(:last-child)::after {
//     content: '/';
//     margin-left: 1rem;
//     color: rgba(255, 255, 255, 0.6);
//     font-weight: 300;
//   }
// `;

// const BreadcrumbLink = styled(Link)`
//   color: rgba(255, 255, 255, 0.8);
//   text-decoration: none;
//   padding: 8px 16px;
//   border-radius: 25px;
//   background: rgba(255, 255, 255, 0.1);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.2);
//   transition: all 0.3s ease;
  
//   &:hover {
//     color: white;
//     background: rgba(255, 255, 255, 0.2);
//     transform: translateY(-2px);
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
//   }
// `;

// const CurrentPage = styled.span`
//   color: white;
//   padding: 8px 16px;
//   border-radius: 25px;
//   background: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(10px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   font-weight: 600;
  
//   background: linear-gradient(
//     90deg,
//     rgba(255, 255, 255, 0.1),
//     rgba(255, 255, 255, 0.2),
//     rgba(255, 255, 255, 0.1)
//   );
//   background-size: 200px 100%;
//   animation: ${shimmer} 2s infinite linear;
// `;

// const ImageIndicators = styled.div`
//   position: absolute;
//   bottom: 30px;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   gap: 12px;
//   z-index: 4;
// `;

// const Indicator = styled.button`
//   width: 12px;
//   height: 12px;
//   border-radius: 50%;
//   border: 2px solid rgba(255, 255, 255, 0.5);
//   background: ${props => props.isActive ? 'white' : 'transparent'};
//   cursor: pointer;
//   transition: all 0.3s ease;
  
//   &:hover {
//     border-color: white;
//     transform: scale(1.2);
//   }
// `;

// const FloatingElements = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   pointer-events: none;
//   z-index: 2;
  
//   &::before,
//   &::after {
//     content: '';
//     position: absolute;
//     border-radius: 50%;
//     background: rgba(255, 255, 255, 0.1);
//     animation: float 6s ease-in-out infinite;
//   }
  
//   &::before {
//     width: 100px;
//     height: 100px;
//     top: 20%;
//     left: 10%;
//     animation-delay: 0s;
//   }
  
//   &::after {
//     width: 60px;
//     height: 60px;
//     top: 60%;
//     right: 15%;
//     animation-delay: 3s;
//   }
  
//   @keyframes float {
//     0%, 100% {
//       transform: translateY(0px) rotate(0deg);
//     }
//     50% {
//       transform: translateY(-20px) rotate(180deg);
//     }
//   }
// `;

// const PageHeader = ({ 
//   title, 
//   subtitle,
//   images = [
//     "/images/breadcrumb/breadcrumb.png",
//     "/images/breadcrumb/breadcrumb-2.png", 
//     "/images/breadcrumb/breadcrumb-3.png"
//   ]
// }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         (prevIndex + 1) % images.length
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleIndicatorClick = (index) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <PageHeaderContainer>
//       <BackgroundImageSlider>
//         {images.map((image, index) => (
//           <BackgroundImage
//             key={index}
//             bgImage={image}
//             isActive={index === currentImageIndex}
//           />
//         ))}
//       </BackgroundImageSlider>
      
//       <FloatingElements />
      
//       <ContentWrapper>
//         <MainTitle>{title}</MainTitle>
//         {subtitle && <SubTitle>{subtitle}</SubTitle>}
        
//         <BreadcrumbNav>
//           <BreadcrumbList>
//             <BreadcrumbItem>
//               <BreadcrumbLink href="/">Home</BreadcrumbLink>
//             </BreadcrumbItem>
//             <BreadcrumbItem>
//               <CurrentPage>
//                 {title} {title === "404" ? "page not found" : ""}
//               </CurrentPage>
//             </BreadcrumbItem>
//           </BreadcrumbList>
//         </BreadcrumbNav>
//       </ContentWrapper>

//       {images.length > 1 && (
//         <ImageIndicators>
//           {images.map((_, index) => (
//             <Indicator
//               key={index}
//               isActive={index === currentImageIndex}
//               onClick={() => handleIndicatorClick(index)}
//               aria-label={`Go to image ${index + 1}`}
//             />
//           ))}
//         </ImageIndicators>
//       )}
//     </PageHeaderContainer>
//   );
// };

// export default PageHeader;