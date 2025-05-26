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

const CertificationsContainer = styled.div`
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

const CertificationGrid = styled.div`
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

const CertificationCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
`

const CertificationIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 28px;
    color: #333;
  }
`

const CertificationTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
`

const CertificationDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`

const ProcessSection = styled.div`
  padding: 80px 0;
  background-color: #f8f9fa;
`

const ProcessSteps = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const ProcessStep = styled.div`
  flex: 0 0 calc(25% - 30px);
  text-align: center;
  opacity: 0;
  
  @media (max-width: 992px) {
    flex: 0 0 calc(50% - 30px);
    margin-bottom: 40px;
  }
  
  @media (max-width: 768px) {
    flex: 0 0 100%;
  }
`

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  margin: 0 auto 20px;
`

const StepTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`

const StepDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`

const TechCertificationsPage = () => {
  const HeaderImages = [
    "/images/training/tech_cert_img_1.jpg",
    "/images/training/tech_cert_img_2.jpg", 
    "/images/training/tech_cert_img_3.jpg"
  ];

  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const cardsRef = useRef([])
  const processStepsRef = useRef([])

  useEffect(() => {
    // Animation for title and description
    gsap.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      },
    })

    gsap.to(descriptionRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.2,
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: "top 80%",
      },
    })

    // Animation for certification cards
    cardsRef.current.forEach((card, index) => {
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

    // Animation for process steps
    processStepsRef.current.forEach((step, index) => {
      gsap.to(step, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.15 * index,
        scrollTrigger: {
          trigger: step,
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
  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el)
    }
  }

  const addToProcessStepsRef = (el) => {
    if (el && !processStepsRef.current.includes(el)) {
      processStepsRef.current.push(el)
    }
  }

  return (
    <div>
      <Header />
      <PageHeader title="Tech Certifications" images={HeaderImages} />

      <CertificationsContainer ref={sectionRef} className="container">
        <SectionTitle ref={titleRef}>Industry-Leading Technology Certifications</SectionTitle>
        <SectionDescription ref={descriptionRef}>
          Enhance your career with our comprehensive range of technology certifications. Our expert-led training
          programs are designed to equip you with the skills and knowledge needed to excel in today's competitive tech
          landscape.
        </SectionDescription>

        <CertificationGrid>
          <CertificationCard ref={addToCardsRef}>
            <CertificationIcon>
              <i className="ri-cloud-line"></i>
            </CertificationIcon>
            <CertificationTitle>Cloud Computing Certifications</CertificationTitle>
            <CertificationDescription>
              Become certified in AWS, Azure, Google Cloud, and other leading cloud platforms. Learn cloud architecture,
              deployment, security, and management.
            </CertificationDescription>
          </CertificationCard>

          <CertificationCard ref={addToCardsRef}>
            <CertificationIcon>
              <i className="ri-shield-check-line"></i>
            </CertificationIcon>
            <CertificationTitle>Cybersecurity Certifications</CertificationTitle>
            <CertificationDescription>
              Get certified in cybersecurity with courses covering security fundamentals, ethical hacking, security
              analysis, and advanced threat protection.
            </CertificationDescription>
          </CertificationCard>

          <CertificationCard ref={addToCardsRef}>
            <CertificationIcon>
              <i className="ri-database-2-line"></i>
            </CertificationIcon>
            <CertificationTitle>Data Science & Analytics</CertificationTitle>
            <CertificationDescription>
              Master data science with certifications in data analysis, machine learning, big data technologies, and
              business intelligence tools.
            </CertificationDescription>
          </CertificationCard>

          <CertificationCard ref={addToCardsRef}>
            <CertificationIcon>
              <i className="ri-code-s-slash-line"></i>
            </CertificationIcon>
            <CertificationTitle>Software Development</CertificationTitle>
            <CertificationDescription>
              Advance your development skills with certifications in web development, mobile app development, DevOps,
              and programming languages.
            </CertificationDescription>
          </CertificationCard>

          <CertificationCard ref={addToCardsRef}>
            <CertificationIcon>
              <i className="ri-server-line"></i>
            </CertificationIcon>
            <CertificationTitle>IT Infrastructure</CertificationTitle>
            <CertificationDescription>
              Build expertise in IT infrastructure with certifications in networking, system administration,
              virtualization, and IT service management.
            </CertificationDescription>
          </CertificationCard>

          <CertificationCard ref={addToCardsRef}>
            <CertificationIcon>
              <i className="ri-projector-line"></i>
            </CertificationIcon>
            <CertificationTitle>Project Management</CertificationTitle>
            <CertificationDescription>
              Enhance your project management skills with certifications in Agile, Scrum, PMP, PRINCE2, and other
              methodologies.
            </CertificationDescription>
          </CertificationCard>
        </CertificationGrid>
      </CertificationsContainer>

      <ProcessSection>
        <div className="container">
          <SectionTitle ref={titleRef} style={{ opacity: 1 }}>
            Our Certification Process
          </SectionTitle>
          <SectionDescription ref={descriptionRef} style={{ opacity: 1 }}>
            Our streamlined certification process ensures you get the most out of your learning experience, from initial
            assessment to final certification.
          </SectionDescription>

          <ProcessSteps>
            <ProcessStep ref={addToProcessStepsRef}>
              <StepNumber>1</StepNumber>
              <StepTitle>Assessment</StepTitle>
              <StepDescription>
                We assess your current skills and knowledge to recommend the most suitable certification path.
              </StepDescription>
            </ProcessStep>

            <ProcessStep ref={addToProcessStepsRef}>
              <StepNumber>2</StepNumber>
              <StepTitle>Training</StepTitle>
              <StepDescription>
                Participate in expert-led training sessions with hands-on labs and practical exercises.
              </StepDescription>
            </ProcessStep>

            <ProcessStep ref={addToProcessStepsRef}>
              <StepNumber>3</StepNumber>
              <StepTitle>Practice</StepTitle>
              <StepDescription>
                Access practice exams and additional resources to reinforce your learning.
              </StepDescription>
            </ProcessStep>

            <ProcessStep ref={addToProcessStepsRef}>
              <StepNumber>4</StepNumber>
              <StepTitle>Certification</StepTitle>
              <StepDescription>
                Take the certification exam and receive your industry-recognized credential.
              </StepDescription>
            </ProcessStep>
          </ProcessSteps>
        </div>
      </ProcessSection>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default TechCertificationsPage