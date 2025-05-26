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
    background: linear-gradient(90deg, #dc2626, #ef4444);
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
  background: #fef2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 28px;
    color: #dc2626;
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
  background: #dc2626;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;
  
  &:hover {
    background: #b91c1c;
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
    color: #dc2626;
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

const SecurityServicesPage = () => {
  const HeaderImages = [
    "/images/service/cyber_hero_img_1.jpg",
    "/images/service/cyber_hero_img_2.jpg", 
    "/images/service/cyber_hero_img_3.jpg"
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
      <PageHeader title="Cyber Security" images={HeaderImages}/>

      <ServiceContainer>
        <div className="container">
          <ServiceSection ref={servicesRef}>
            <SectionTitle>Our Cyber Security Services</SectionTitle>
            <p>
              We provide comprehensive cyber security solutions to protect your business from evolving threats and
              ensure the integrity of your digital assets.
            </p>

            <ServiceGrid>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-shield-keyhole-line"></i>
                </ServiceIcon>
                <ServiceTitle>Security Assessment</ServiceTitle>
                <ServiceDescription>
                  Comprehensive evaluation of your security posture to identify vulnerabilities and recommend
                  improvements.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-spy-line"></i>
                </ServiceIcon>
                <ServiceTitle>Penetration Testing</ServiceTitle>
                <ServiceDescription>
                  Simulated cyber attacks to identify and address security weaknesses before they can be exploited by
                  malicious actors.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-lock-password-line"></i>
                </ServiceIcon>
                <ServiceTitle>Identity & Access Management</ServiceTitle>
                <ServiceDescription>
                  Implement robust identity verification and access control systems to protect sensitive resources.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-eye-line"></i>
                </ServiceIcon>
                <ServiceTitle>Security Monitoring</ServiceTitle>
                <ServiceDescription>
                  24/7 monitoring of your systems and networks to detect and respond to security incidents in real-time.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-file-shield-2-line"></i>
                </ServiceIcon>
                <ServiceTitle>Data Protection</ServiceTitle>
                <ServiceDescription>
                  Implement encryption, data loss prevention, and other measures to safeguard sensitive information.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-computer-line"></i>
                </ServiceIcon>
                <ServiceTitle>Endpoint Security</ServiceTitle>
                <ServiceDescription>
                  Protect devices accessing your network with advanced endpoint security solutions and policies.
                </ServiceDescription>
              </ServiceCard>
            </ServiceGrid>
          </ServiceSection>

          <SolutionsSection ref={solutionsRef}>
            <SectionTitle>Security Solutions We Provide</SectionTitle>
            <p>
              Our security solutions are designed to address the complex challenges of today's threat landscape,
              providing comprehensive protection for your business.
            </p>

            <SolutionsList>
              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Security Operations Center (SOC)</SolutionTitle>
                  <SolutionDescription>
                    Establish a dedicated security operations center to monitor, detect, analyze, and respond to
                    security incidents.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Incident Response Planning</SolutionTitle>
                  <SolutionDescription>
                    Develop comprehensive incident response plans to minimize damage and recovery time in the event of a
                    security breach.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Cloud Security</SolutionTitle>
                  <SolutionDescription>
                    Implement security controls specifically designed for cloud environments to protect data and
                    applications.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Compliance Management</SolutionTitle>
                  <SolutionDescription>
                    Ensure your security practices meet industry regulations and standards such as GDPR, HIPAA, PCI DSS,
                    and more.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Security Awareness Training</SolutionTitle>
                  <SolutionDescription>
                    Educate your employees about security best practices and how to recognize and respond to potential
                    threats.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>
            </SolutionsList>
          </SolutionsSection>
        </div>

        <TrainingSection ref={trainingsRef}>
          <div className="container">
            <SectionTitle>Cyber Security Training Programs</SectionTitle>
            <p>
              Enhance your team's security skills with our specialized training programs designed for security
              professionals at all levels.
            </p>

            <TrainingGrid>
              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/cert_eth_hack_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Certified Ethical Hacker (CEH)</TrainingTitle>
                  <TrainingDescription>
                    Learn the tools and techniques used by hackers to penetrate networks and how to defend against them.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/cissp_cert_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>CISSP Certification</TrainingTitle>
                  <TrainingDescription>
                    Comprehensive training for the Certified Information Systems Security Professional certification.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/security+_cert_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Security+ Certification</TrainingTitle>
                  <TrainingDescription>
                    Foundational training covering the essential principles for network and operational security.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/cyber_sec_awareness_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Cyber Security Awareness</TrainingTitle>
                  <TrainingDescription>
                    Training programs designed to educate all employees about security best practices and threat
                    recognition.
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

export default SecurityServicesPage