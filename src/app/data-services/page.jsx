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
    background: linear-gradient(90deg, #7c3aed, #8b5cf6);
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
  background: #f5f3ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 28px;
    color: #7c3aed;
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
  background: #7c3aed;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.3s ease;
  
  &:hover {
    background: #6d28d9;
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
    color: #7c3aed;
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

const DataServicesPage = () => {
  const HeaderImages = [
    "/images/service/data_img_hero_1.jpg",
    "/images/service/data_img_hero_2.jpg", 
    "/images/service/data_img_hero_3.jpg"
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
      <PageHeader title="Data & Analytics" images={HeaderImages} />

      <ServiceContainer>
        <div className="container">
          <ServiceSection ref={servicesRef}>
            <SectionTitle>Our Data & Analytics Services</SectionTitle>
            <p>
              We help businesses harness the power of their data through advanced analytics solutions that drive
              insights and informed decision-making.
            </p>

            <ServiceGrid>
              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-database-line"></i>
                </ServiceIcon>
                <ServiceTitle>Data Management</ServiceTitle>
                <ServiceDescription>
                  Comprehensive data management solutions to organize, store, and maintain your business data
                  efficiently.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-bar-chart-box-line"></i>
                </ServiceIcon>
                <ServiceTitle>Business Intelligence</ServiceTitle>
                <ServiceDescription>
                  Transform raw data into actionable insights with our business intelligence solutions and interactive
                  dashboards.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-bubble-chart-line"></i>
                </ServiceIcon>
                <ServiceTitle>Big Data Analytics</ServiceTitle>
                <ServiceDescription>
                  Process and analyze large volumes of data to uncover patterns, correlations, and trends that drive
                  business value.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-ai-generate"></i>
                </ServiceIcon>
                <ServiceTitle>Predictive Analytics</ServiceTitle>
                <ServiceDescription>
                  Leverage machine learning and statistical algorithms to forecast trends and predict future outcomes.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-flow-chart"></i>
                </ServiceIcon>
                <ServiceTitle>Data Integration</ServiceTitle>
                <ServiceDescription>
                  Seamlessly integrate data from multiple sources to create a unified view of your business information.
                </ServiceDescription>
              </ServiceCard>

              <ServiceCard className="service-card">
                <ServiceIcon>
                  <i className="ri-dashboard-3-line"></i>
                </ServiceIcon>
                <ServiceTitle>Data Visualization</ServiceTitle>
                <ServiceDescription>
                  Create compelling visual representations of your data to communicate insights effectively across your
                  organization.
                </ServiceDescription>
              </ServiceCard>
            </ServiceGrid>
          </ServiceSection>

          <SolutionsSection ref={solutionsRef}>
            <SectionTitle>Data Solutions We Provide</SectionTitle>
            <p>
              Our data solutions are designed to help businesses extract maximum value from their data assets, enabling
              data-driven decision making at all levels.
            </p>

            <SolutionsList>
              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Data Warehousing</SolutionTitle>
                  <SolutionDescription>
                    Design and implement scalable data warehouse solutions that consolidate data from various sources
                    for analysis and reporting.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Real-time Analytics</SolutionTitle>
                  <SolutionDescription>
                    Implement solutions that process and analyze data in real-time, enabling immediate insights and
                    faster decision-making.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Data Governance</SolutionTitle>
                  <SolutionDescription>
                    Establish frameworks and processes to ensure data quality, security, and compliance with regulatory
                    requirements.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>Customer Analytics</SolutionTitle>
                  <SolutionDescription>
                    Analyze customer data to gain insights into behavior, preferences, and trends that drive customer
                    acquisition and retention strategies.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>

              <SolutionItem className="solution-item">
                <i className="ri-check-double-line"></i>
                <SolutionContent>
                  <SolutionTitle>IoT Analytics</SolutionTitle>
                  <SolutionDescription>
                    Process and analyze data from Internet of Things (IoT) devices to optimize operations and create new
                    business opportunities.
                  </SolutionDescription>
                </SolutionContent>
              </SolutionItem>
            </SolutionsList>
          </SolutionsSection>
        </div>

        <TrainingSection ref={trainingsRef}>
          <div className="container">
            <SectionTitle>Data & Analytics Training Programs</SectionTitle>
            <p>
              Enhance your team's data skills with our specialized training programs designed for data professionals at
              all levels.
            </p>

            <TrainingGrid>
              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/data_sci_fund_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Data Science Fundamentals</TrainingTitle>
                  <TrainingDescription>
                    Comprehensive training covering the fundamentals of data science, including statistics, programming,
                    and machine learning basics.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/ml_cert_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Machine Learning Certification</TrainingTitle>
                  <TrainingDescription>
                    Advanced training in machine learning algorithms, model development, and deployment for real-world
                    applications.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/big_data_tech_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Big Data Technologies</TrainingTitle>
                  <TrainingDescription>
                    Learn to work with big data technologies like Hadoop, Spark, and NoSQL databases for processing
                    large-scale datasets.
                  </TrainingDescription>
                  <TrainingButton href="/tech-certifications">Learn More</TrainingButton>
                </TrainingContent>
              </TrainingCard>

              <TrainingCard className="training-card">
                <TrainingImage style={{ backgroundImage: "url('/images/service/data_vis_img_1.jpg')" }} />
                <TrainingContent>
                  <TrainingTitle>Data Visualization Tools</TrainingTitle>
                  <TrainingDescription>
                    Master data visualization tools like Tableau, Power BI, and D3.js to create compelling visual
                    representations of data.
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

export default DataServicesPage