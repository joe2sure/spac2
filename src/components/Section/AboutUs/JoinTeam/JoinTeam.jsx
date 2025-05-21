"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

// Styled components
const SectionContainer = styled.section`
  padding: 100px 0;
  background-color: #fafafa;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const CurrentPositions = styled.div`
  font-size: 14px;
  color: #6610f2;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const MainTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #0a0a2d;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
`;

const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 1000px;
  margin: 0 auto;
`;

const JobCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 12px;
  padding: 24px 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 20px;
  }
`;

const JobContent = styled.div`
  flex: 1;
`;

const JobTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  color: #0a0a2d;
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const JobMeta = styled.div`
  display: flex;
  gap: 24px;
  color: #666;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  
  i {
    font-size: 18px;
    color: #6610f2;
    opacity: 0.8;
  }
`;

const ApplyButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #6610f2;
  color: white;
  font-weight: 600;
  padding: 12px 32px;
  border-radius: 100px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #5a0db8;
    transform: translateY(-2px);
  }
  
  i {
    margin-left: 8px;
    font-size: 16px;
    transition: transform 0.2s ease;
  }
  
  &:hover i {
    transform: translateX(3px) translateY(-3px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export default function JoinTeam() {
  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const jobsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Entrance animation for the header
    const headerTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        toggleActions: "play none none none",
      },
    })
    
    headerTl
      .fromTo(".current-positions", 
        { opacity: 0, y: -20 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(".main-title", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      )
      .fromTo(".subtitle", 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.6 },
        "-=0.4"
      )
    
    // Job cards animation with stagger
    gsap.fromTo(
      ".job-card",
      { 
        opacity: 0, 
        y: 40,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: jobsRef.current,
          start: "top 80%",
        },
      }
    )

    // Hover animations for job cards
    const jobCards = document.querySelectorAll('.job-card')
    jobCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.apply-button i'), {
          x: 3,
          y: -3,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.apply-button i'), {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Updated job data to match the design
  const jobs = [
    {
      title: "Product Designer",
      location: "Newark, NJ",
      type: "Full-time",
    },
    {
      title: "Software Engineer",
      location: "London, UK",
      type: "Full-time",
    },
    {
      title: "Junior Frontend Developer",
      location: "Brooklyn, NY",
      type: "Full-time",
    },
    {
      title: "Finance Executive",
      location: "Newark, NJ",
      type: "Full-time",
    },
    {
      title: "Junior Copywriter",
      location: "London, UK",
      type: "Full-time",
    },
  ]

  return (
    <SectionContainer ref={sectionRef} className="tekup-job-section">
      <div className="container">
        <SectionHeader ref={headerRef}>
          <CurrentPositions className="current-positions">CURRENT POSITIONS</CurrentPositions>
          <MainTitle className="main-title">
            Join our Growing Team
            <br />
            of Doers.
          </MainTitle>
          <Subtitle className="subtitle">
            We're always looking for talented individuals to join our team
          </Subtitle>
        </SectionHeader>
        
        <JobsContainer ref={jobsRef}>
          {jobs.map((job, index) => (
            <JobCard key={index} className="job-card">
              <JobContent>
                <JobTitle>{job.title}</JobTitle>
                <JobMeta>
                  <MetaItem>
                    <i className="ri-time-line"></i> {job.type}
                  </MetaItem>
                  <MetaItem>
                    <i className="ri-map-pin-line"></i> {job.location}
                  </MetaItem>
                </JobMeta>
              </JobContent>
              <ApplyButton href="#" className="apply-button">
                Apply
                <i className="ri-arrow-right-up-line"></i>
              </ApplyButton>
            </JobCard>
          ))}
        </JobsContainer>
      </div>
    </SectionContainer>
  )
}



// "use client"

// import { useEffect, useRef } from "react"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// export default function JoinTeam() {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const jobsRef = useRef(null)

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

//     gsap.fromTo(
//       ".job-item",
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: jobsRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const jobs = [
//     {
//       title: "Product Designer",
//       location: "New York",
//       type: "Full-time",
//       salary: "$80k-$100k",
//     },
//     {
//       title: "Software Engineer",
//       location: "London, UK",
//       type: "Full-time",
//       salary: "$90k-$110k",
//     },
//     {
//       title: "Senior Frontend Developer",
//       location: "Remote, US",
//       type: "Full-time",
//       salary: "$100k-$130k",
//     },
//     {
//       title: "Finance Executive",
//       location: "Boston, MA",
//       type: "Full-time",
//       salary: "$70k-$90k",
//     },
//     {
//       title: "Junior Copywriter",
//       location: "London, UK",
//       type: "Full-time",
//       salary: "$50k-$65k",
//     },
//   ]

//   return (
//     <section ref={sectionRef} className="tekup-job-section tekup-section-padding">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8 text-center" ref={titleRef}>
//             <div className="tekup-section-title">
//               <h2 className="title">
//                 Join our Growing Team
//                 <br />
//                 of Doers.
//               </h2>
//               <p>We're always looking for talented individuals to join our team</p>
//             </div>
//           </div>
//         </div>
//         <div className="row" ref={jobsRef}>
//           <div className="col-lg-12">
//             <div className="tekup-job-wrap">
//               {jobs.map((job, index) => (
//                 <div key={index} className="job-item tekup-job-item">
//                   <div className="tekup-job-content">
//                     <h3 className="title">{job.title}</h3>
//                     <div className="tekup-job-meta">
//                       <span>
//                         <i className="ri-map-pin-line"></i> {job.location}
//                       </span>
//                       <span>
//                         <i className="ri-time-line"></i> {job.type}
//                       </span>
//                       <span>
//                         <i className="ri-money-dollar-circle-line"></i> {job.salary}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="tekup-job-btn">
//                     <Link href="#" className="tekup-default-btn">
//                       Apply <i className="ri-arrow-right-up-line"></i>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }