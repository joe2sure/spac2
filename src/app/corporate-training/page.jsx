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

const CorporateContainer = styled.div`
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

const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const ProgramCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
`

const ProgramTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`

const ProgramDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`

const ProgramFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
`

const ProgramFeature = styled.li`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 10px;
  padding-left: 30px;
  position: relative;
  
  &:before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #4CAF50;
    font-weight: bold;
  }
`

const BenefitsSection = styled.div`
  padding: 80px 0;
  background-color: #f8f9fa;
`

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const BenefitCard = styled.div`
  text-align: center;
  padding: 30px;
  opacity: 0;
  transform: translateY(30px);
`

const BenefitIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  
  i {
    font-size: 32px;
    color: #333;
  }
`

const BenefitTitle = styled.h4`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`

const BenefitDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`

const CorporateTrainingPage = () => {
  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const programCardsRef = useRef([])
  const benefitCardsRef = useRef([])

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

    // Animation for program cards
    programCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.2 * index,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
      })
    })

    // Animation for benefit cards
    benefitCardsRef.current.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.15 * index,
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
  const addToProgramCardsRef = (el) => {
    if (el && !programCardsRef.current.includes(el)) {
      programCardsRef.current.push(el)
    }
  }

  const addToBenefitCardsRef = (el) => {
    if (el && !benefitCardsRef.current.includes(el)) {
      benefitCardsRef.current.push(el)
    }
  }

  return (
    <div>
      <Header />
      <PageHeader title="Corporate Training Programs" />

      <CorporateContainer className="container">
        <SectionTitle ref={titleRef}>Customized Training Solutions for Your Organization</SectionTitle>
        <SectionDescription ref={descriptionRef}>
          Empower your workforce with our tailored corporate training programs. We design and deliver specialized
          training solutions that address your organization's unique challenges and objectives.
        </SectionDescription>

        <ProgramsGrid>
          <ProgramCard ref={addToProgramCardsRef}>
            <ProgramTitle>Enterprise Technology Training</ProgramTitle>
            <ProgramDescription>
              Comprehensive training programs on enterprise technologies to help your team stay ahead of the
              technological curve and drive innovation.
            </ProgramDescription>
            <ProgramFeatures>
              <ProgramFeature>Cloud migration and management</ProgramFeature>
              <ProgramFeature>Data analytics and business intelligence</ProgramFeature>
              <ProgramFeature>Cybersecurity and compliance</ProgramFeature>
              <ProgramFeature>DevOps and agile methodologies</ProgramFeature>
              <ProgramFeature>Enterprise software implementation</ProgramFeature>
            </ProgramFeatures>
          </ProgramCard>

          <ProgramCard ref={addToProgramCardsRef}>
            <ProgramTitle>Leadership & Digital Transformation</ProgramTitle>
            <ProgramDescription>
              Equip your leadership team with the knowledge and skills needed to drive digital transformation and lead
              in the digital age.
            </ProgramDescription>
            <ProgramFeatures>
              <ProgramFeature>Digital strategy development</ProgramFeature>
              <ProgramFeature>Change management in digital transformation</ProgramFeature>
              <ProgramFeature>Innovation leadership</ProgramFeature>
              <ProgramFeature>Data-driven decision making</ProgramFeature>
              <ProgramFeature>Technology roadmap planning</ProgramFeature>
            </ProgramFeatures>
          </ProgramCard>

          <ProgramCard ref={addToProgramCardsRef}>
            <ProgramTitle>Technical Skills Development</ProgramTitle>
            <ProgramDescription>
              Enhance your team's technical capabilities with hands-on training in the latest technologies and
              methodologies.
            </ProgramDescription>
            <ProgramFeatures>
              <ProgramFeature>Programming and software development</ProgramFeature>
              <ProgramFeature>Network administration and security</ProgramFeature>
              <ProgramFeature>Database management and optimization</ProgramFeature>
              <ProgramFeature>IT infrastructure and architecture</ProgramFeature>
              <ProgramFeature>Mobile and web application development</ProgramFeature>
            </ProgramFeatures>
          </ProgramCard>

          <ProgramCard ref={addToProgramCardsRef}>
            <ProgramTitle>Custom Certification Programs</ProgramTitle>
            <ProgramDescription>
              Tailored certification programs designed specifically for your organization's needs, with flexible
              delivery options.
            </ProgramDescription>
            <ProgramFeatures>
              <ProgramFeature>Customized learning paths</ProgramFeature>
              <ProgramFeature>Industry-recognized certifications</ProgramFeature>
              <ProgramFeature>Blended learning approaches</ProgramFeature>
              <ProgramFeature>Progress tracking and reporting</ProgramFeature>
              <ProgramFeature>Ongoing support and mentoring</ProgramFeature>
            </ProgramFeatures>
          </ProgramCard>
        </ProgramsGrid>
      </CorporateContainer>

      <BenefitsSection>
        <div className="container">
          <SectionTitle ref={titleRef} style={{ opacity: 1 }}>
            Benefits of Our Corporate Training
          </SectionTitle>
          <SectionDescription ref={descriptionRef} style={{ opacity: 1 }}>
            Our corporate training programs deliver measurable results and tangible benefits for your organization and
            employees.
          </SectionDescription>

          <BenefitsGrid>
            <BenefitCard ref={addToBenefitCardsRef}>
              <BenefitIcon>
                <i className="ri-line-chart-line"></i>
              </BenefitIcon>
              <BenefitTitle>Increased Productivity</BenefitTitle>
              <BenefitDescription>
                Equip your team with the skills and knowledge to work more efficiently and effectively.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard ref={addToBenefitCardsRef}>
              <BenefitIcon>
                <i className="ri-user-star-line"></i>
              </BenefitIcon>
              <BenefitTitle>Employee Retention</BenefitTitle>
              <BenefitDescription>
                Invest in your employees' growth to increase job satisfaction and reduce turnover.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard ref={addToBenefitCardsRef}>
              <BenefitIcon>
                <i className="ri-lightbulb-line"></i>
              </BenefitIcon>
              <BenefitTitle>Innovation Culture</BenefitTitle>
              <BenefitDescription>
                Foster a culture of innovation and continuous improvement within your organization.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard ref={addToBenefitCardsRef}>
              <BenefitIcon>
                <i className="ri-shield-check-line"></i>
              </BenefitIcon>
              <BenefitTitle>Risk Mitigation</BenefitTitle>
              <BenefitDescription>
                Reduce operational risks through improved technical knowledge and security awareness.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard ref={addToBenefitCardsRef}>
              <BenefitIcon>
                <i className="ri-customer-service-2-line"></i>
              </BenefitIcon>
              <BenefitTitle>Enhanced Customer Service</BenefitTitle>
              <BenefitDescription>
                Improve customer satisfaction through better service delivery and technical support.
              </BenefitDescription>
            </BenefitCard>

            <BenefitCard ref={addToBenefitCardsRef}>
              <BenefitIcon>
                <i className="ri-global-line"></i>
              </BenefitIcon>
              <BenefitTitle>Competitive Advantage</BenefitTitle>
              <BenefitDescription>
                Stay ahead of the competition with a skilled and knowledgeable workforce.
              </BenefitDescription>
            </BenefitCard>
          </BenefitsGrid>
        </div>
      </BenefitsSection>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default CorporateTrainingPage