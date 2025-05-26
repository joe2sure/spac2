"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

// Styled Components
const DataSolutionsSection = styled.section`
  padding: 120px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e2e8f0' fill-opacity='0.3'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    pointer-events: none;
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 2;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 60px;
    text-align: center;
  }
`

const ImageContainer = styled.div`
  position: relative;
  height: 500px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);

  @media (max-width: 768px) {
    height: 400px;
  }
`

const AnimatedImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 1s ease-in-out;
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const FloatingCard = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 200px;

  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 600;
    color: #1e293b;
  }

  p {
    margin: 0;
    font-size: 14px;
    color: #64748b;
  }
`

const ContentWrapper = styled.div`
  max-width: 600px;
`

const SubTitle = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

const MainTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #1e293b;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 40px;
`

const FeatureList = styled.div`
  margin-bottom: 40px;
`

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 16px 0;
  border-bottom: 1px solid rgba(226, 232, 240, 0.5);

  &:last-child {
    border-bottom: none;
  }

  .icon {
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    flex-shrink: 0;

    i {
      color: white;
      font-size: 12px;
    }
  }

  span {
    font-size: 16px;
    color: #334155;
    font-weight: 500;
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
    color: white;
    text-decoration: none;
  }

  i {
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateX(4px);
  }
`

const ImageIndicators = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
`

const Indicator = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: white;
  }
`

export default function DataSolutions() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of images to cycle through
  const images = [
    "/images/blog/male_guest_2.jpg",
    "/images/blog/male_guest_1.jpg",
     "/images/blog/male_guest_3.jpg",
    "/images/p1/female_guest_1.jpg"
  ]

  const features = [
    "Real-time data analytics and insights",
    "Free low-level API with hundreds of endpoints",
    "Comprehensive historical analytics tracking",
    "Advanced machine learning algorithms",
    "Custom dashboard creation tools"
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    })

    tl.fromTo(imageRef.current, 
      { opacity: 0, x: -50, scale: 0.9 }, 
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power2.out" }
    )

    tl.fromTo(contentRef.current, 
      { opacity: 0, x: 50 }, 
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }, 
      "-=0.8"
    )

    gsap.fromTo(
      ".feature-item-animated",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".feature-list-animated",
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Image cycling effect
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [images.length])

  const handleIndicatorClick = (index) => {
    setCurrentImageIndex(index)
  }

  return (
    <DataSolutionsSection ref={sectionRef}>
      <Container>
        <ContentGrid>
          <ImageContainer ref={imageRef}>
            {images.map((image, index) => (
              <AnimatedImage
                key={index}
                src={image}
                alt={`Data analytics ${index + 1}`}
                active={index === currentImageIndex}
              />
            ))}
            <ImageOverlay />
            <FloatingCard>
              <h4>Live Analytics</h4>
              <p>Real-time data processing with 99.9% uptime</p>
            </FloatingCard>
            <ImageIndicators>
              {images.map((_, index) => (
                <Indicator
                  key={index}
                  active={index === currentImageIndex}
                  onClick={() => handleIndicatorClick(index)}
                />
              ))}
            </ImageIndicators>
          </ImageContainer>

          <ContentWrapper ref={contentRef}>
            <SubTitle>DATA SOLUTIONS</SubTitle>
            <MainTitle>
              We Deliver Advanced
              <br />
              Data Solutions
            </MainTitle>
            <Description>
              Powerful and intuitive UI combined with our proprietary data processing engine 
              makes Spacinfotech the premier choice for enterprise-level data analytics and 
              business intelligence solutions.
            </Description>
            
            <FeatureList className="feature-list-animated">
              {features.map((feature, index) => (
                <FeatureItem key={index} className="feature-item-animated">
                  <div className="icon">
                    <i className="ri-check-line"></i>
                  </div>
                  <span>{feature}</span>
                </FeatureItem>
              ))}
            </FeatureList>

            <CTAButton href="#">
              Explore Solutions <i className="ri-arrow-right-up-line"></i>
            </CTAButton>
          </ContentWrapper>
        </ContentGrid>
      </Container>
    </DataSolutionsSection>
  )
}



// "use client"

// import { useEffect, useRef } from "react"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// export default function DataSolutions() {
//   const sectionRef = useRef(null)
//   const imageRef = useRef(null)
//   const contentRef = useRef(null)

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 70%",
//         end: "bottom 20%",
//         toggleActions: "play none none none",
//       },
//     })

//     tl.fromTo(imageRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 })

//     tl.fromTo(contentRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 }, "-=0.8")

//     gsap.fromTo(
//       ".feature-item",
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: ".feature-list",
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const features = ["Real-time data analytics", "Free Low-level API, hundreds of endpoints", "See past analytics"]

//   return (
//     <section ref={sectionRef} className="tekup-service-section tekup-section-padding bg-light1">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6" ref={imageRef}>
//             <div className="tekup-service-thumb">
//               {/* <img src="/images/about/data-solutions.png" alt="Data analytics dashboard" className="img-fluid" /> */}
//               <img src="/images/blog/male_guest_2.jpg" alt="Data analytics dashboard" className="img-fluid" />
//               <div className="tekup-service-thumb-shape">
//                 {/* <img src="/images/about/person-analytics.png" alt="Person with analytics" className="img-fluid" /> */}
//                 <img src="/images/blog/male_guest_1.jpg" alt="Person with analytics" className="img-fluid" />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6" ref={contentRef}>
//             <div className="tekup-service-content">
//               <div className="tekup-section-title">
//                 <span className="sub-title">DATA SOLUTIONS</span>
//                 <h2 className="title">
//                   We Offer Real Time
//                   <br />
//                   Data Solutions
//                 </h2>
//               </div>
//               <p>
//                 Powerful and easy to use UI coupled with our proprietary data processing engine makes Spacinfotech the best
//                 choice for your business.
//               </p>
//               <div className="tekup-service-list feature-list">
//                 <ul>
//                   {features.map((feature, index) => (
//                     <li key={index} className="feature-item">
//                       <i className="ri-check-line"></i>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="tekup-service-btn">
//                 <Link href="#" className="tekup-default-btn">
//                   Learn More <i className="ri-arrow-right-up-line"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }