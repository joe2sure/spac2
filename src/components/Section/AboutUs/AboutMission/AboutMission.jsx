"use client"

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

// Styled Components
const VideoPreviewContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
`;

const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
`;

const VideoPlaceholderIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.8;
`;

const VideoPlaceholderText = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
`;

const PlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

const PlayIcon = styled.div`
  font-size: 24px;
  color: #667eea;
  margin-left: 3px;
`;

const VideoLabel = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 0.9rem;
  backdrop-filter: blur(10px);
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  padding: 2rem;
  color: white;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
  
  &:nth-child(2n) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  
  &:nth-child(3n) {
    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  }
  
  &:nth-child(4n) {
    background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 24px;
  backdrop-filter: blur(10px);
`;

const ServiceTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: white;
`;

const ServiceDescription = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
  margin: 0;
`;

const VideoModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const VideoContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  aspect-ratio: 16/9;
  background: black;
  border-radius: 12px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10000;
  
  &:hover {
    opacity: 0.7;
  }
`;

export default function AboutMission() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const servicesRef = useRef(null);
  const videoRef = useRef(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 });
    tl.fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6");

    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      },
    );

    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const services = [
    {
      icon: "🗄️",
      title: "Database Administration",
      description: "Expert database management, optimization, and maintenance for maximum performance and reliability."
    },
    {
      icon: "☁️",
      title: "Azure System Administration",
      description: "Comprehensive Azure cloud solutions, deployment, and infrastructure management services."
    },
    {
      icon: "🤖",
      title: "Machine Learning Engineering",
      description: "Custom ML models, data pipelines, and AI solutions tailored to your business needs."
    },
    {
      icon: "📊",
      title: "Data Analysis",
      description: "Transform raw data into actionable insights with advanced analytics and visualization."
    },
    {
      icon: "📋",
      title: "Project Management",
      description: "Agile project delivery with proven methodologies ensuring on-time, on-budget results."
    },
    {
      icon: "🔒",
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure."
    }
  ];

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <section ref={sectionRef} className="tekup-about-section tekup-section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tekup-about-content">
                <div className="tekup-section-title" ref={titleRef}>
                  <span className="sub-title">ABOUT OUR COMPANY</span>
                  <h2 className="title">
                    Empowering Businesses
                    <br />
                    Through Technology Excellence
                  </h2>
                </div>
                <div ref={textRef}>
                  <p>
                    We are a leading technology solutions provider specializing in database administration, 
                    cloud infrastructure, machine learning, and AI integration. Our comprehensive approach 
                    combines cutting-edge technology with industry expertise to deliver transformative results.
                  </p>
                  <p>
                    From Azure system administration to advanced data analysis, our team of certified 
                    professionals ensures your business stays ahead in the digital landscape. We provide 
                    both hands-on services and comprehensive training programs to empower your organization.
                  </p>
                  <p>
                    Our commitment to excellence, security, and innovation drives us to deliver solutions 
                    that not only meet today's challenges but prepare you for tomorrow's opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tekup-about-thumb" ref={videoRef}>
                <VideoPreviewContainer>
                  <VideoThumbnail>
                    <img 
                      src="/images/p1/female_guest_1.jpg" 
                      alt="Company Video Thumbnail"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <VideoPlaceholder>
                      <VideoPlaceholderIcon>🎥</VideoPlaceholderIcon>
                      <VideoPlaceholderText>Company Overview Video</VideoPlaceholderText>
                    </VideoPlaceholder>
                  </VideoThumbnail>
                  <PlayButton onClick={(e) => {
                    e.preventDefault();
                    handleVideoClick();
                  }}>
                    <PlayIcon>▶</PlayIcon>
                  </PlayButton>
                  <VideoLabel>
                    <span>Watch Our Story</span>
                  </VideoLabel>
                </VideoPreviewContainer>
              </div>
            </div>
          </div>
          
          <ServicesGrid ref={servicesRef}>
            {services.map((service, index) => (
              <ServiceCard key={index} className="service-card">
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </div>
      </section>

      <VideoModal isOpen={isVideoOpen} onClick={handleCloseVideo}>
        <VideoContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleCloseVideo}>&times;</CloseButton>
          {isVideoOpen && (
            <iframe
              width="100%"
              height="100%"
              // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Company Introduction Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </VideoContainer>
      </VideoModal>
    </>
  );
}




// "use client"

// import { useEffect, useRef } from "react";
// import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// export default function AboutMission() {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const textRef = useRef(null)
//   const statsRef = useRef(null)
//   const videoRef = useRef(null)

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

//     tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })

//     tl.fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")

//     gsap.fromTo(
//       ".stat-item",
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: statsRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     gsap.fromTo(
//       videoRef.current,
//       { opacity: 0, scale: 0.9 },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: videoRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const stats = [
//     { number: "200+", label: "Projects" },
//     { number: "30", label: "Team Members" },
//     { number: "190+", label: "Happy Clients" },
//   ]

//   return (
//     <section ref={sectionRef} className="tekup-about-section tekup-section-padding">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="tekup-about-content">
//               <div className="tekup-section-title" ref={titleRef}>
//                 <span className="sub-title">ABOUT OUR COMPANY</span>
//                 <h2 className="title">
//                   Softuch is Made
//                   <br />
//                   For the Creator.
//                 </h2>
//               </div>
//               <div ref={textRef}>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam hendrerit ac. Sed vulputate
//                   mi sit amet odio scelerisque, ac vehicula ipsum finibus. Etiam euismod est quis tincidunt maximus.
//                   Donec pharetra magna ut mauris pellentesque, a pharetra ex tincidunt.
//                 </p>
//                 <p>
//                   Praesent porta magna vitae neque tincidunt cursus. Sed nulla quam, tincidunt ac maximus et,
//                   consectetur quis ante. Donec pharetra magna ut mauris pellentesque, a pharetra ex tincidunt.
//                 </p>
//                 <p>Our clean and simple UI/UX and transparent SaaS model will give you complete peace of mind.</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="tekup-about-thumb" ref={videoRef}>
//               <div className="tekup-about-thumb-wrap">
//                 <img src="/images/p1/p_1.png" alt="About Thumb" />
//                 <div className="tekup-popup-video">
//                   <Link href="#" className="popup-video">
//                     <i className="ri-play-fill"></i>
//                   </Link>
//                   <div className="video-text">
//                     <span>Watch Demo</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row tekup-section-padding-top-70" ref={statsRef}>
//           {stats.map((stat, index) => (
//             <div key={index} className="col-lg-4 col-md-6 stat-item">
//               <div className="tekup-funfact-item">
//                 <h2 className="counter">{stat.number}</h2>
//                 <p>{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }