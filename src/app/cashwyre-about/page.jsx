"use client"

import { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "~/components/Section/Header/Header"
import Footer from "~/components/Section/Footer/Footer"
import PageHeader from "~/components/Section/PageHeader/PageHeader"
import CallToAction from "~/components/Section/AboutUs/CallToAction"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const AboutContainer = styled.div`
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  opacity: 0;
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
`

const SectionDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  opacity: 0;
  max-width: 800px;
`

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 80px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const HeroContent = styled.div`
  opacity: 0;
`

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`

const HeroDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: #666;
`

const HeroImage = styled.div`
  position: relative;
  height: 500px;
  // background-image: url('/placeholder.svg?height=500&width=600');
  background-image: url('/images/team/author.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  
  @media (max-width: 992px) {
    height: 400px;
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
`

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin-bottom: 80px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const StatCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 30px;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
`

const StatNumber = styled.div`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
`

const StatLabel = styled.div`
  font-size: 18px;
  color: #666;
`

const MissionSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 80px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const MissionImage = styled.div`
  position: relative;
  height: 400px;
  background-image: url('/images/team/banner_img1.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  opacity: 0;
  
  @media (max-width: 992px) {
    height: 300px;
  }
`

const MissionContent = styled.div`
  opacity: 0;
`

const ValuesSection = styled.div`
  margin-bottom: 80px;
`

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const ValueCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 30px;
  opacity: 0;
  transform: translateY(30px);
`

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 24px;
    color: #333;
  }
`

const ValueTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`

const ValueDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`

const TeamSection = styled.div`
  margin-bottom: 80px;
`

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const TeamCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
`

const TeamImage = styled.div`
  height: 250px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`

const TeamInfo = styled.div`
  padding: 20px;
  text-align: center;
`

const TeamName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`

const TeamRole = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`

const TeamSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  
  a {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #333;
      color: #fff;
    }
    
    i {
      font-size: 14px;
    }
  }
`

const CashwyreAboutPage = () => {
  const cashwyreHeaderImages = [
    "/images/cashwyre/cashwyre_hero_1.jpg",
    "/images/cashwyre/cashwyre_hero_2.jpg", 
    "/images/cashwyre/cashwyre_hero_3.jpg"
  ];

  const heroContentRef = useRef(null)
  const heroImageRef = useRef(null)
  const statCardsRef = useRef([])
  const missionImageRef = useRef(null)
  const missionContentRef = useRef(null)
  const valueCardsRef = useRef([])
  const teamCardsRef = useRef([])

  useEffect(() => {
    // Animation for hero section
    gsap.to(heroContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: heroContentRef.current,
        start: "top 80%",
      },
    })

    gsap.to(heroImageRef.current, {
      opacity: 1,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: heroImageRef.current,
        start: "top 80%",
      },
    })

    // Animation for stat cards
    statCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      })
    })

    // Animation for mission section
    gsap.to(missionImageRef.current, {
      opacity: 1,
      duration: 0.8,
      scrollTrigger: {
        trigger: missionImageRef.current,
        start: "top 80%",
      },
    })

    gsap.to(missionContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: missionContentRef.current,
        start: "top 80%",
      },
    })

    // Animation for value cards
    valueCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      })
    })

    // Animation for team cards
    teamCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      })
    })

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Function to add elements to refs
  const addToStatCardsRef = (el) => {
    if (el && !statCardsRef.current.includes(el)) {
      statCardsRef.current.push(el)
    }
  }

  const addToValueCardsRef = (el) => {
    if (el && !valueCardsRef.current.includes(el)) {
      valueCardsRef.current.push(el)
    }
  }

  const addToTeamCardsRef = (el) => {
    if (el && !teamCardsRef.current.includes(el)) {
      teamCardsRef.current.push(el)
    }
  }

  return (
    <div>
      <Header />
      <PageHeader title="About Cashwyre" images={cashwyreHeaderImages}/>

      <AboutContainer className="container">
        <HeroSection>
          <HeroContent ref={heroContentRef}>
            <HeroTitle>Revolutionizing Global Payments</HeroTitle>
            <HeroDescription>
              Cashwyre is a cutting-edge financial technology platform designed to make international payments and
              transfers seamless, secure, and affordable for individuals and businesses worldwide.
            </HeroDescription>
            <HeroDescription>
              Founded in 2018, we've been on a mission to break down the barriers of traditional banking and create a
              more inclusive global financial ecosystem that works for everyone.
            </HeroDescription>
          </HeroContent>
          <HeroImage ref={heroImageRef} />
        </HeroSection>

        <StatsSection>
          <StatCard ref={addToStatCardsRef}>
            <StatNumber>50+</StatNumber>
            <StatLabel>Countries Served</StatLabel>
          </StatCard>
          <StatCard ref={addToStatCardsRef}>
            <StatNumber>50k+</StatNumber>
            <StatLabel>Active Users</StatLabel>
          </StatCard>
          <StatCard ref={addToStatCardsRef}>
            <StatNumber>£1M+</StatNumber>
            <StatLabel>Transactions Processed</StatLabel>
          </StatCard>
          <StatCard ref={addToStatCardsRef}>
            <StatNumber>99.9%</StatNumber>
            <StatLabel>Uptime Reliability</StatLabel>
          </StatCard>
        </StatsSection>

        <MissionSection>
          <MissionImage ref={missionImageRef} />
          <MissionContent ref={missionContentRef}>
            <SectionTitle style={{ opacity: 1 }}>Our Mission & Vision</SectionTitle>
            <SectionDescription style={{ opacity: 1 }}>
              At Cashwyre, our mission is to create a world where moving money across borders is as simple, fast, and
              cost-effective as sending a text message. We believe that financial services should be accessible to
              everyone, regardless of their location or economic status.
            </SectionDescription>
            <SectionDescription style={{ opacity: 1 }}>
              Our vision is to build the most trusted and innovative global payment platform that empowers individuals
              and businesses to thrive in the global economy by removing the complexity and high costs associated with
              international financial transactions.
            </SectionDescription>
          </MissionContent>
        </MissionSection>

        <ValuesSection>
          <SectionTitle style={{ opacity: 1 }}>Our Core Values</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            These principles guide everything we do at Cashwyre, from product development to customer service.
          </SectionDescription>

          <ValuesGrid>
            <ValueCard ref={addToValueCardsRef}>
              <ValueIcon>
                <i className="ri-lock-line"></i>
              </ValueIcon>
              <ValueTitle>Security First</ValueTitle>
              <ValueDescription>
                We prioritize the security of our users' data and funds above all else, implementing the highest
                standards of encryption and protection.
              </ValueDescription>
            </ValueCard>

            <ValueCard ref={addToValueCardsRef}>
              <ValueIcon>
                <i className="ri-global-line"></i>
              </ValueIcon>
              <ValueTitle>Global Inclusion</ValueTitle>
              <ValueDescription>
                We believe financial services should be accessible to everyone, regardless of geography, income, or
                background.
              </ValueDescription>
            </ValueCard>

            <ValueCard ref={addToValueCardsRef}>
              <ValueIcon>
                <i className="ri-lightbulb-line"></i>
              </ValueIcon>
              <ValueTitle>Continuous Innovation</ValueTitle>
              <ValueDescription>
                We constantly push the boundaries of what's possible in financial technology to deliver better
                experiences for our users.
              </ValueDescription>
            </ValueCard>

            <ValueCard ref={addToValueCardsRef}>
              <ValueIcon>
                <i className="ri-user-heart-line"></i>
              </ValueIcon>
              <ValueTitle>Customer Obsession</ValueTitle>
              <ValueDescription>
                We put our customers at the center of everything we do, listening to their needs and exceeding their
                expectations.
              </ValueDescription>
            </ValueCard>

            <ValueCard ref={addToValueCardsRef}>
              <ValueIcon>
                <i className="ri-shield-check-line"></i>
              </ValueIcon>
              <ValueTitle>Regulatory Compliance</ValueTitle>
              <ValueDescription>
                We adhere to all applicable financial regulations and work proactively with regulators to ensure the
                highest standards of compliance.
              </ValueDescription>
            </ValueCard>

            <ValueCard ref={addToValueCardsRef}>
              <ValueIcon>
                <i className="ri-team-line"></i>
              </ValueIcon>
              <ValueTitle>Collaborative Spirit</ValueTitle>
              <ValueDescription>
                We believe in the power of teamwork and partnership to create solutions that benefit the entire
                financial ecosystem.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        <TeamSection>
          <SectionTitle style={{ opacity: 1 }}>Leadership Team</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Meet the visionaries behind Cashwyre who are driving our mission to transform global payments.
          </SectionDescription>

          <TeamGrid>
            <TeamCard ref={addToTeamCardsRef}>
              <TeamImage image="/images/team/author.jpg"/>
              <TeamInfo>
                <TeamName>Dr O.U Emmanuel</TeamName>
                <TeamRole>Chief Executive Officer</TeamRole>
                <TeamSocial>
                  <a href="#" aria-label="LinkedIn">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </TeamSocial>
              </TeamInfo>
            </TeamCard>

            <TeamCard ref={addToTeamCardsRef}>
              <TeamImage image="/images/team/sunday.png" />
              <TeamInfo>
                <TeamName>Sunday Awa</TeamName>
                <TeamRole>Chief Technology Officer</TeamRole>
                <TeamSocial>
                  <a href="#" aria-label="LinkedIn">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </TeamSocial>
              </TeamInfo>
            </TeamCard>

            <TeamCard ref={addToTeamCardsRef}>
              <TeamImage image="/images/team/victor-nwankwe.png" />
              <TeamInfo>
                <TeamName>Victor Nwankwue</TeamName>
                <TeamRole>Lead Engineer</TeamRole>
                <TeamSocial>
                  <a href="#" aria-label="LinkedIn">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </TeamSocial>
              </TeamInfo>
            </TeamCard>

            <TeamCard ref={addToTeamCardsRef}>
              <TeamImage image="/images/team/victorOlusanya.png" />
              <TeamInfo>
                <TeamName>Victor Olusanya</TeamName>
                <TeamRole>Chief Product Officer</TeamRole>
                <TeamSocial>
                  <a href="#" aria-label="LinkedIn">
                    <i className="ri-linkedin-fill"></i>
                  </a>
                  <a href="#" aria-label="Twitter">
                    <i className="ri-twitter-fill"></i>
                  </a>
                </TeamSocial>
              </TeamInfo>
            </TeamCard>
          </TeamGrid>
        </TeamSection>
      </AboutContainer>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default CashwyreAboutPage