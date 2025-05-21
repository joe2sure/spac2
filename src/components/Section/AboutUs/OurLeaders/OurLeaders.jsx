"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import styled from "styled-components"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Styled Components
const TeamSection = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;
  margin: 3rem 0;
`;

const SectionTitle = styled.div`
  margin-bottom: 1rem;
`;

const SubTitle = styled.span`
  display: block;
  color: #6425FE;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #222;
  margin: 0;
`;

const ViewAllButton = styled(Link)`
  display: inline-block;
  background-color: #6425FE;
  color: #fff;
  font-weight: 500;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: none;
  padding: 0.625rem 1.875rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 50px;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: #5218d1;
    color: #fff;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(100, 37, 254, 0.3);
  }
`;

const TeamGrid = styled.div`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const TeamMemberCol = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 25%;
  max-width: 25%;
  
  @media (max-width: 991.98px) {
    flex: 0 0 50%;
    max-width: 50%;
  }
  
  @media (max-width: 575.98px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const MemberCard = styled.div`
  position: relative;
  transition: all 0.3s ease;
  padding: 20px 15px;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #E6DEFF;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

const MemberImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${MemberCard}:hover & {
    transform: scale(1.05);
  }
`;

const MemberContent = styled.div`
  margin-top: 1.25rem;
  transition: all 0.3s ease;
`;

const MemberName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #222;
`;

const MemberRole = styled.span`
  font-size: 0.875rem;
  color: #777;
`;

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  ${MemberCard}:hover & {
    opacity: 1;
  }
`;

const SocialItem = styled.li`
  display: inline-block;
`;

const SocialLink = styled(Link)`
  display: inline-block;
  color: #6c757d;
  font-size: 1.125rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #6425FE;
    transform: translateY(-3px);
  }
`;

const Separator = styled.div`
  position: absolute;
  height: 50%;
  width: 1px;
  background-color: rgba(108, 117, 125, 0.2);
  top: 25%;
  left: ${props => `${props.position}%`};
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 3rem;
`;

const ColLeft = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  
  @media (max-width: 767.98px) {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
    margin-bottom: 1.5rem;
  }
`;

const ColRight = styled.div`
  flex: 0 0 50%;
  max-width: 50%;
  text-align: right;
  
  @media (max-width: 767.98px) {
    flex: 0 0 100%;
    max-width: 100%;
    text-align: center;
  }
`;

export default function OurLeaders() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const teamRef = useRef(null)
  const separatorsRef = useRef([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Animation timeline for section title and subtitle
    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    })

    titleTl
      .fromTo(
        ".sub-title", 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo(
        ".title", 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8 }, 
        "-=0.4"
      )
      .fromTo(
        ".view-all-btn", 
        { opacity: 0, x: 20 }, 
        { opacity: 1, x: 0, duration: 0.6 }, 
        "-=0.4"
      )

    // Animate team members with staggered reveal and hover effects
    gsap.fromTo(
      ".team-member",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      },
    )

    // Animate separators with a delay
    gsap.fromTo(
      ".member-separator",
      { opacity: 0, scaleY: 0 },
      {
        opacity: 1,
        scaleY: 1,
        duration: 0.5,
        stagger: 0.2,
        delay: 0.8,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      }
    )

    // Add hover animations for team members
    const teamItems = document.querySelectorAll('.team-member-card')
    
    teamItems.forEach(item => {
      const image = item.querySelector('.member-image')
      const content = item.querySelector('.member-content')
      const socials = item.querySelector('.social-list')
      
      item.addEventListener('mouseenter', () => {
        gsap.to(image, { scale: 1.05, duration: 0.3 })
        gsap.to(content, { y: -5, duration: 0.3 })
        gsap.to(socials, { opacity: 1, y: 0, duration: 0.3 })
      })
      
      item.addEventListener('mouseleave', () => {
        gsap.to(image, { scale: 1, duration: 0.3 })
        gsap.to(content, { y: 0, duration: 0.3 })
        gsap.to(socials, { opacity: 0.7, y: 5, duration: 0.3 })
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  // Updated team data to match design image
  const team = [
    { name: "Dr O.U Emmanuel ", role: "CEO", image: "/images/trainer/author.jpg" },
    { name: "Sunday Awa", role: "CTO", image: "/images/team/sunday.png" },
    { name: "Mrs Agnes", role: "HR", image: "/images/trainer/product-manager.png" },
    { name: "Victor Nwankwue", role: "Lead Engineer", image: "/images/team/victor-nwankwe.png" },
  ]

  return (
    <TeamSection ref={sectionRef}>
      <div className="container">
        {/* Title section */}
        <FlexRow>
          <ColLeft>
            <SectionTitle ref={titleRef}>
              <SubTitle className="sub-title">THE TEAM</SubTitle>
              <Title className="title">Our Leaders</Title>
            </SectionTitle>
          </ColLeft>
          <ColRight>
            <div className="view-all-btn">
              <ViewAllButton href="#">View All</ViewAllButton>
            </div>
          </ColRight>
        </FlexRow>

        {/* Team members section */}
        <TeamGrid ref={teamRef}>
          {team.map((member, index) => (
            <>
              <TeamMemberCol key={index} className="team-member">
                <MemberCard className="team-member-card">
                  <ImageWrapper>
                    <MemberImage 
                      className="member-image" 
                      src={member.image} 
                      alt={member.name} 
                    />
                  </ImageWrapper>
                  <MemberContent className="member-content">
                    <MemberName>{member.name}</MemberName>
                    <MemberRole>{member.role}</MemberRole>
                    <SocialList className="social-list">
                      <SocialItem>
                        <SocialLink href="#" aria-label="Facebook">
                          <i className="ri-facebook-fill"></i>
                        </SocialLink>
                      </SocialItem>
                      <SocialItem>
                        <SocialLink href="#" aria-label="Instagram">
                          <i className="ri-instagram-fill"></i>
                        </SocialLink>
                      </SocialItem>
                      <SocialItem>
                        <SocialLink href="#" aria-label="Twitter">
                          <i className="ri-twitter-fill"></i>
                        </SocialLink>
                      </SocialItem>
                      <SocialItem>
                        <SocialLink href="#" aria-label="LinkedIn">
                          <i className="ri-linkedin-fill"></i>
                        </SocialLink>
                      </SocialItem>
                    </SocialList>
                  </MemberContent>
                </MemberCard>
              </TeamMemberCol>
              
              {index < team.length - 1 && (
                <Separator 
                  className="member-separator" 
                  position={25 * (index + 1)}
                  ref={el => { if (el) separatorsRef.current[index] = el }}
                />
              )}
            </>
          ))}
        </TeamGrid>
      </div>
    </TeamSection>
  )
}





// "use client"

// import { useEffect, useRef } from "react"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// export default function OurLeaders() {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const teamRef = useRef(null)

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
//       ".team-member",
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: teamRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const team = [
//     { name: "Dr O.U Emmanuel ", role: "CEO", image: "/images/trainer/author.jpg" },
//     { name: "Sunday Awa", role: "CTO", image: "/images/team/sunday.png" },
//     { name: "Mrs", role: "HR", image: "/images/trainer/product-manager.png" },
//     { name: "Victor Nwankwue", role: "Lead Engineer", image: "/images/team/victor-nwankwe.png" },
//   ]

//   return (
//     <section ref={sectionRef} className="tekup-team-section tekup-section-padding">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="tekup-section-title" ref={titleRef}>
//               <span className="sub-title">OUR TEAM</span>
//               <h2 className="title">Our Leaders</h2>
//             </div>
//           </div>
//           <div className="col-lg-6 text-end">
//             <div className="tekup-team-btn">
//               <Link href="#" className="tekup-default-btn">
//                 View All <i className="ri-arrow-right-up-line"></i>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="row" ref={teamRef}>
//           {team.map((member, index) => (
//             <div key={index} className="col-lg-3 col-md-6 team-member">
//               <div className="tekup-team-item">
//                 <div className="tekup-team-thumb">
//                   <img src={member.image || "/images/blog/recent-post1.png"} alt={member.name} />
//                 </div>
//                 <div className="tekup-team-content">
//                   <h3 className="title">{member.name}</h3>
//                   <span>{member.role}</span>
//                   <div className="tekup-team-social">
//                     <ul>
//                       <li>
//                         <Link href="#">
//                           <i className="ri-facebook-fill"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="#">
//                           <i className="ri-twitter-fill"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="#">
//                           <i className="ri-linkedin-fill"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="#">
//                           <i className="ri-instagram-fill"></i>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }