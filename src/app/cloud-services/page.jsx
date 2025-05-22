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
    background: linear-gradient(90deg, #2563eb, #3b82f6);
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
  background: #f0f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 28px;
    color: #2563eb;
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
  background: #2563eb;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;
  
  &:hover {
    background: #1d4ed8;
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
    color: #2563eb;
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

const CloudServicesPage = () => {
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
      <PageHeader title="Cloud Solutions" />

      <ServiceContainer>
        <div className="container">
          <ServiceSection ref={servicesRef}>
            <SectionTitle>Our Cloud Services</SectionTitle>
            <p>
              We provide comprehensive cloud solutions to help businesses transform their IT infrastructure, improve
              scalability, and reduce costs.
            </p>

            <ServiceGrid>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-cloud-line"></i>
                </ServiceIcon>
                <ServiceTitle>Cloud Migration</ServiceTitle>
                <ServiceDescription>
                  Seamlessly migrate your existing infrastructure to the cloud with minimal disruption to your business
                  operations.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-server-line"></i>
                </ServiceIcon>
                <ServiceTitle>Cloud Infrastructure</ServiceTitle>
                <ServiceDescription>
                  Design and implement scalable cloud infrastructure tailored to your specific business requirements.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-database-2-line"></i>
                </ServiceIcon>
                <ServiceTitle>Cloud Storage Solutions</ServiceTitle>
                <ServiceDescription>
                  Secure and scalable storage solutions that grow with your business needs while ensuring data
                  protection.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-shield-check-line"></i>
                </ServiceIcon>
                <ServiceTitle>Cloud Security</ServiceTitle>
                <ServiceDescription>
                  Comprehensive security measures to protect your cloud environment from threats and ensure compliance.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-dashboard-line"></i>
                </ServiceIcon>
                <ServiceTitle>Cloud Management</ServiceTitle>
                <ServiceDescription>
                  Ongoing management and optimization of your cloud resources to maximize performance and minimize
                  costs.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-code-box-line"></i>
                </ServiceIcon>
                <ServiceTitle>Serverless Applications</ServiceTitle>
                <ServiceDescription>
                  Develop and deploy serverless applications that scale automatically and reduce operational overhead.
                </ServiceDescription>
              </ServiceCard>
            </ServiceGrid>
          </ServiceSection>

          <SolutionsSection ref={solutionsRef}>
            <SectionTitle>Cloud Solutions We Provide</SectionTitle>
            <p>
              Our cloud solutions are designed to address the unique challenges faced by modern businesses, enabling
              digital transformation and innovation.
            </p>

            <SolutionsList>
              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Multi-Cloud Strategy</SolutionTitle>
                  <SolutionDescription>
                    We help businesses implement multi-cloud strategies that leverage the strengths of different cloud
                    providers, avoiding vendor lock-in and optimizing costs.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Hybrid Cloud Solutions</SolutionTitle>
                  <SolutionDescription>
                    Integrate your on-premises infrastructure with cloud services to create a flexible, scalable hybrid
                    environment that meets your business needs.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Cloud Cost Optimization</SolutionTitle>
                  <SolutionDescription>
                    Identify and implement cost-saving measures for your cloud infrastructure without compromising
                    performance or security.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Disaster Recovery as a Service</SolutionTitle>
                  <SolutionDescription>
                    Implement robust disaster recovery solutions in the cloud to ensure business continuity in the event
                    of system failures or disasters.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Cloud-Native Development</SolutionTitle>
                  <SolutionDescription>
                    Develop applications specifically designed for cloud environments, taking full advantage of cloud
                    capabilities for maximum efficiency and scalability.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>
            </SolutionsList>
          </SolutionsSection>
        </div>

        <TrainingSection ref={trainingsRef}>
          <div className="container">
            <SectionTitle>Cloud Training Programs</SectionTitle>
            <p>
              Enhance your team's cloud skills with our specialized training programs designed for IT professionals at
              all levels.
            </p>

            <TrainingGrid>
              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/p1/p_1.png')" }} />
                <TrainingContent>
                  <TrainingTitle>AWS Certification Training</TrainingTitle>
                  <TrainingDescription>
                    Comprehensive training programs for various AWS certifications, including Solutions Architect,
                    Developer, and SysOps Administrator.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/p1/p_1.png')" }} />
                <TrainingContent>
                  <TrainingTitle>Microsoft Azure Training</TrainingTitle>
                  <TrainingDescription>
                    Master Microsoft Azure with our specialized training courses covering Azure fundamentals,
                    administration, and architecture.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/p1/p_1.png')" }} />
                <TrainingContent>
                  <TrainingTitle>Google Cloud Platform Training</TrainingTitle>
                  <TrainingDescription>
                    Learn to leverage Google Cloud Platform services with our hands-on training programs for cloud
                    engineers and architects.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/p1/p_1.png')" }} />
                <TrainingContent>
                  <TrainingTitle>Cloud Security Training</TrainingTitle>
                  <TrainingDescription>
                    Specialized training focused on securing cloud environments, managing identities, and implementing
                    compliance controls.
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

export default CloudServicesPage