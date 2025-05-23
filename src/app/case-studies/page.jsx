"use client"

import { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "~/components/Section/Header/Header"
import Footer from "~/components/Section/Footer/Footer"
import PageHeader from "~/components/Section/PageHeader/PageHeader"
import CallToAction from "~/components/Section/AboutUs/CallToAction"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

const CaseStudiesContainer = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
  opacity: 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const FilterButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.active ? "#333" : "#f5f5f5")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.active ? "#333" : "#e0e0e0")};
  }
`

const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const CaseStudyCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(30px);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CaseStudyImage = styled.div`
  flex: 0 0 40%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  min-height: 250px;
`

const CaseStudyContent = styled.div`
  flex: 1;
  padding: 30px;
`

const CaseStudyCategory = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`

const CaseStudyTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.4;
`

const CaseStudyExcerpt = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`

const CaseStudyResults = styled.div`
  margin-bottom: 20px;
`

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  
  .result-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: #4CAF50;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    
    i {
      font-size: 14px;
    }
  }
  
  .result-text {
    font-size: 16px;
    color: #333;
  }
`

const CaseStudyButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
`

// Sample case study data
const caseStudiesData = [
  {
    id: 1,
    title: "Cloud Migration for Financial Services Firm",
    excerpt:
      "How we helped a leading financial services company migrate their legacy systems to a secure cloud infrastructure.",
    category: "cloud",
    image: "/images/breadcrumb/breadcrumb.png",
    results: [
      "Reduced operational costs by 40%",
      "Improved system reliability by 99.9%",
      "Enhanced data security and compliance",
    ],
  },
  {
    id: 2,
    title: "Cybersecurity Overhaul for Healthcare Provider",
    excerpt:
      "Implementing a comprehensive security solution to protect sensitive patient data and ensure HIPAA compliance.",
    category: "security",
    image: "/images/breadcrumb/breadcrumb.png",
    results: [
      "Zero security breaches since implementation",
      "100% HIPAA compliance achieved",
      "Staff security awareness increased by 85%",
    ],
  },
  {
    id: 3,
    title: "Data Analytics Platform for Retail Chain",
    excerpt:
      "Developing a custom analytics solution to drive data-informed decision making across 200+ retail locations.",
    category: "data",
    image: "/images/breadcrumb/breadcrumb.png",
    results: [
      "Increased sales by 25% through targeted promotions",
      "Reduced inventory costs by 30%",
      "Improved customer satisfaction scores by 40%",
    ],
  },
  {
    id: 4,
    title: "Multi-Cloud Strategy for Manufacturing Company",
    excerpt:
      "Designing and implementing a robust multi-cloud architecture to support global operations and enhance scalability.",
    category: "cloud",
    image: "/images/breadcrumb/breadcrumb.png",
    results: [
      "Achieved 99.99% uptime for critical systems",
      "Reduced time-to-market for new products by 60%",
      "Seamless integration of 15+ global facilities",
    ],
  },
  {
    id: 5,
    title: "Ransomware Recovery for Government Agency",
    excerpt:
      "Rapid response and recovery after a sophisticated ransomware attack, with implementation of preventive measures.",
    category: "security",
    image: "/images/breadcrumb/breadcrumb.png",
    results: [
      "Complete system recovery within 48 hours",
      "No data loss or ransom payment",
      "New security protocols prevented subsequent attempts",
    ],
  },
  {
    id: 6,
    title: "Predictive Analytics for Supply Chain Optimization",
    excerpt:
      "Leveraging AI and machine learning to optimize supply chain operations and forecast demand with high accuracy.",
    category: "data",
    image: "/images/breadcrumb/breadcrumb.png",
    results: [
      "Inventory reduction of 35% while maintaining service levels",
      "Shipping costs reduced by 28%",
      "Forecast accuracy improved from 65% to 92%",
    ],
  },
]

const CaseStudiesPage = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudiesData)

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const filterRef = useRef(null)
  const caseStudyCardsRef = useRef([])

  useEffect(() => {
    // Filter case studies based on active filter
    if (activeFilter === "all") {
      setFilteredCaseStudies(caseStudiesData)
    } else {
      setFilteredCaseStudies(caseStudiesData.filter((study) => study.category === activeFilter))
    }

    // Reset case study cards ref when filtered case studies change
    caseStudyCardsRef.current = []
  }, [activeFilter])

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

    // Animation for filter buttons
    gsap.to(filterRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.3,
      scrollTrigger: {
        trigger: filterRef.current,
        start: "top 80%",
      },
    })

    // Animation for case study cards
    caseStudyCardsRef.current.forEach((card, index) => {
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

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [filteredCaseStudies])

  // Function to add elements to refs
  const addToCaseStudyCardsRef = (el) => {
    if (el && !caseStudyCardsRef.current.includes(el)) {
      caseStudyCardsRef.current.push(el)
    }
  }

  return (
    <div>
      <Header />
      <PageHeader title="Case Studies" />

      <CaseStudiesContainer className="container">
        <SectionTitle ref={titleRef}>Client Success Stories</SectionTitle>
        <SectionDescription ref={descriptionRef}>
          Explore how we've helped organizations across various industries overcome challenges, optimize operations, and
          achieve their business objectives through innovative technology solutions.
        </SectionDescription>

        <FilterContainer ref={filterRef}>
          <FilterButton active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All Case Studies
          </FilterButton>
          <FilterButton active={activeFilter === "cloud"} onClick={() => setActiveFilter("cloud")}>
            Cloud Solutions
          </FilterButton>
          <FilterButton active={activeFilter === "security"} onClick={() => setActiveFilter("security")}>
            Cybersecurity
          </FilterButton>
          <FilterButton active={activeFilter === "data"} onClick={() => setActiveFilter("data")}>
            Data & Analytics
          </FilterButton>
        </FilterContainer>

        <CaseStudyGrid>
          {filteredCaseStudies.map((study) => (
            <CaseStudyCard key={study.id} ref={addToCaseStudyCardsRef}>
              <CaseStudyImage image={study.image} />
              <CaseStudyContent>
                <CaseStudyCategory>
                  {study.category === "cloud" && "Cloud Solutions"}
                  {study.category === "security" && "Cybersecurity"}
                  {study.category === "data" && "Data & Analytics"}
                </CaseStudyCategory>
                <CaseStudyTitle>{study.title}</CaseStudyTitle>
                <CaseStudyExcerpt>{study.excerpt}</CaseStudyExcerpt>
                <CaseStudyResults>
                  <h4 style={{ marginBottom: "15px", fontSize: "18px", fontWeight: "600" }}>Key Results:</h4>
                  {study.results.map((result, index) => (
                    <ResultItem key={index}>
                      <div className="result-icon">
                        <i className="ri-check-line"></i>
                      </div>
                      <div className="result-text">{result}</div>
                    </ResultItem>
                  ))}
                </CaseStudyResults>
                <CaseStudyButton href={`/case-studies/${study.id}`}>Read Full Case Study</CaseStudyButton>
              </CaseStudyContent>
            </CaseStudyCard>
          ))}
        </CaseStudyGrid>
      </CaseStudiesContainer>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default CaseStudiesPage