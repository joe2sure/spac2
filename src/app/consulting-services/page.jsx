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
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Styled Components
const ServiceContainer = styled.div`
  padding: 80px 0;
  
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`

const ServiceSection = styled.section`
  margin-bottom: 70px;
`

const SectionTitle = styled.h2`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 25px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #0891b2, #06b6d4);
  }
`

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ServiceCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
`

const ServiceIcon = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #ecfeff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 28px;
    color: #0891b2;
  }
`

const ServiceTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
`

const ServiceDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
`

const TrainingSection = styled.section`
  background: #f8fafc;
  padding: 80px 0;
  margin-bottom: 70px;
`

const TrainingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const TrainingCard = styled.div`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`

const TrainingImage = styled.div`
  height: 200px;
  background-color: #e2e8f0;
  background-size: cover;
  background-position: center;
`

const TrainingContent = styled.div`
  padding: 30px;
`

const TrainingTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`

const TrainingDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
  margin-bottom: 20px;
`

const TrainingButton = styled.a`
  display: inline-block;
  padding: 10px 25px;
  background: #0891b2;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;
  
  &:hover {
    background: #0e7490;
  }
`

const SolutionsSection = styled.section`
  margin-bottom: 70px;
`

const SolutionsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 40px 0;
`

const SolutionItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  
  i {
    color: #0891b2;
    font-size: 24px;
    margin-right: 15px;
    margin-top: 5px;
  }
`

const SolutionContent = styled.div`
  flex: 1;
`

const SolutionTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`

const SolutionDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
`

const ConsultingServicesPage = () => {
  const HeaderImages = [
    "/images/service/IT_consult_img_1.jpg",
    "/images/service/IT_consult_img_2.jpg", 
    "/images/service/IT_consult_img_3.jpg"
  ];

  const servicesRef = useRef(null)
  const trainingsRef = useRef(null)
  const solutionsRef = useRef(null)

  useEffect(() => {
    // GSAP animations
    const serviceCards = document.querySelectorAll(".service-card")
    const trainingCards = document.querySelectorAll(".training-card")
    const solutionItems = document.querySelectorAll(".solution-item")

    // Service cards animation
    gsap.fromTo(
      serviceCards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
        },
      },
    )

    // Training cards animation
    gsap.fromTo(
      trainingCards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trainingsRef.current,
          start: "top 80%",
        },
      },
    )

    // Solution items animation
    gsap.fromTo(
      solutionItems,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: solutionsRef.current,
          start: "top 80%",
        },
      },
    )

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div>
      <Header />
      <PageHeader title="IT Consulting" images={HeaderImages} />

      <ServiceContainer>
        <div className="container">
          <ServiceSection ref={servicesRef}>
            <SectionTitle>Our IT Consulting Services</SectionTitle>
            <p>
              We provide strategic IT consulting services to help businesses align their technology with their business
              objectives and drive digital transformation.
            </p>

            <ServiceGrid>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-roadmap-line"></i>
                </ServiceIcon>
                <ServiceTitle>IT Strategy</ServiceTitle>
                <ServiceDescription>
                  Develop a comprehensive IT strategy aligned with your business goals to drive growth and innovation.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-git-merge-line"></i>
                </ServiceIcon>
                <ServiceTitle>Digital Transformation</ServiceTitle>
                <ServiceDescription>
                  Guide your organization through digital transformation initiatives to improve efficiency and
                  competitiveness.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-building-4-line"></i>
                </ServiceIcon>
                <ServiceTitle>IT Architecture</ServiceTitle>
                <ServiceDescription>
                  Design scalable and resilient IT architectures that support your business requirements and future
                  growth.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-team-line"></i>
                </ServiceIcon>
                <ServiceTitle>IT Governance</ServiceTitle>
                <ServiceDescription>
                  Establish effective IT governance frameworks to ensure alignment between IT and business objectives.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-line-chart-line"></i>
                </ServiceIcon>
                <ServiceTitle>Technology Assessment</ServiceTitle>
                <ServiceDescription>
                  Evaluate your current technology stack and recommend improvements to enhance performance and reduce
                  costs.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-customer-service-2-line"></i>
                </ServiceIcon>
                <ServiceTitle>IT Service Management</ServiceTitle>
                <ServiceDescription>
                  Optimize your IT service delivery with best practices and frameworks like ITIL to improve service
                  quality.
                </ServiceDescription>
              </ServiceCard>
            </ServiceGrid>
          </ServiceSection>

          <SolutionsSection ref={solutionsRef}>
            <SectionTitle>Consulting Solutions We Provide</SectionTitle>
            <p>
              Our consulting solutions are designed to address the complex challenges faced by modern businesses,
              enabling them to leverage technology for competitive advantage.
            </p>

            <SolutionsList>
              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Technology Roadmapping</SolutionTitle>
                  <SolutionDescription>
                    Create a detailed technology roadmap that outlines the steps needed to achieve your business
                    objectives through strategic IT investments.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>IT Cost Optimization</SolutionTitle>
                  <SolutionDescription>
                    Identify opportunities to reduce IT costs while maintaining or improving service levels and
                    supporting business growth.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Vendor Selection & Management</SolutionTitle>
                  <SolutionDescription>
                    Guide you through the process of selecting the right technology vendors and managing those
                    relationships effectively.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Project Management Office (PMO)</SolutionTitle>
                  <SolutionDescription>
                    Establish or enhance your PMO to ensure consistent delivery of IT projects on time, within budget,
                    and meeting requirements.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Business Process Optimization</SolutionTitle>
                  <SolutionDescription>
                    Analyze and redesign business processes to improve efficiency, reduce costs, and enhance customer
                    experience through technology.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>
            </SolutionsList>
          </SolutionsSection>
        </div>

        <TrainingSection ref={trainingsRef}>
          <div className="container">
            <SectionTitle>IT Consulting Training Programs</SectionTitle>
            <p>
              Enhance your team's consulting skills with our specialized training programs designed for IT professionals
              at all levels.
            </p>

            <TrainingGrid>
              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/ITIL_cert_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>ITIL Certification</TrainingTitle>
                  <TrainingDescription>
                    Comprehensive training in IT service management best practices using the ITIL framework.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/PMP_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Project Management Professional (PMP)</TrainingTitle>
                  <TrainingDescription>
                    Prepare for the PMP certification with training covering project management methodologies and best
                    practices.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/TOGAF_cert_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>TOGAF Certification</TrainingTitle>
                  <TrainingDescription>
                    Learn enterprise architecture principles and practices with The Open Group Architecture Framework
                    (TOGAF).
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/agile_scrum_img_2.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Agile & Scrum Training</TrainingTitle>
                  <TrainingDescription>
                    Master agile methodologies and Scrum practices to improve project delivery and team collaboration.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>
            </TrainingGrid>
          </div>
        </TrainingSection>
      </ServiceContainer>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default ConsultingServicesPage