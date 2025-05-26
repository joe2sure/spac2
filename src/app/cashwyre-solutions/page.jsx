"use client"

import { useState } from "react"

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

const SolutionsContainer = styled.div`
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
  background-image: url('/images/cashwyre/transfer_img_1.jpg');
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

const FeaturesSection = styled.div`
  margin-bottom: 80px;
`

const FeaturesGrid = styled.div`
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

const FeatureCard = styled.div`
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

const FeatureIcon = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`

const SolutionsSection = styled.div`
  margin-bottom: 80px;
`

const SolutionTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  opacity: 0;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`

const SolutionTab = styled.button`
  padding: 15px 25px;
  background-color: ${(props) => (props.active ? "#333" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: 2px solid ${(props) => (props.active ? "#333" : "#ddd")};
  border-radius: ${(props) => (props.first ? "5px 0 0 5px" : props.last ? "0 5px 5px 0" : "0")};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.active ? "#333" : "#f5f5f5")};
  }
  
  @media (max-width: 768px) {
    border-radius: 5px;
    flex: 1 1 calc(50% - 10px);
  }
`

const SolutionContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  opacity: 0;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const SolutionImage = styled.div`
  position: relative;
  height: 400px;
  background-image: url('/images/cashwyre/cashwyre_hero_2.jpg');
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  
  @media (max-width: 992px) {
    height: 300px;
  }
`

const SolutionInfo = styled.div``

const SolutionTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
`

const SolutionDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`

const SolutionFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;
`

const SolutionFeature = styled.li`
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

const SolutionButton = styled.a`
  display: inline-block;
  padding: 12px 25px;
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

const ComparisonSection = styled.div`
  margin-bottom: 80px;
`

const ComparisonTable = styled.div`
  overflow-x: auto;
  opacity: 0;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  th {
    background-color: #f5f5f5;
    font-weight: 600;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  .highlight {
    background-color: #f9f9f9;
  }
  
  .check {
    color: #4CAF50;
    font-size: 18px;
  }
  
  .cross {
    color: #F44336;
    font-size: 18px;
  }
`

const TestimonialsSection = styled.div`
  margin-bottom: 80px;
`

const TestimonialsGrid = styled.div`
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

const TestimonialCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 30px;
  opacity: 0;
  transform: translateY(30px);
`

const TestimonialQuote = styled.div`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
  position: relative;
  padding-top: 30px;
  
  &:before {
    content: '"';
    position: absolute;
    top: 0;
    left: 0;
    font-size: 60px;
    line-height: 1;
    color: #ddd;
    font-family: serif;
  }
`

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  margin-right: 15px;
`

const AuthorInfo = styled.div``

const AuthorName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 5px;
`

const AuthorRole = styled.div`
  font-size: 14px;
  color: #666;
`

const CashwyreSolutionsPage = () => {
  const aboutHeaderImages = [
    "/images/about/abt_hero_1.jpg",
    "/images/about/abt_hero_2.jpg", 
    "/images/about/abt_hero_3.jpg"
  ];

  const heroContentRef = useRef(null)
  const heroImageRef = useRef(null)
  const featureCardsRef = useRef([])
  const solutionTabsRef = useRef(null)
  const solutionContentRef = useRef(null)
  const comparisonTableRef = useRef(null)
  const testimonialCardsRef = useRef([])
  const [activeTab, setActiveTab] = useState(0)

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

    // Animation for feature cards
    featureCardsRef.current.forEach((card, index) => {
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

    // Animation for solution tabs
    gsap.to(solutionTabsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: solutionTabsRef.current,
        start: "top 85%",
      },
    })

    // Animation for solution content
    gsap.to(solutionContentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.2,
      scrollTrigger: {
        trigger: solutionContentRef.current,
        start: "top 85%",
      },
    })

    // Animation for comparison table
    gsap.to(comparisonTableRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: comparisonTableRef.current,
        start: "top 85%",
      },
    })

    // Animation for testimonial cards
    testimonialCardsRef.current.forEach((card, index) => {
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
  const addToFeatureCardsRef = (el) => {
    if (el && !featureCardsRef.current.includes(el)) {
      featureCardsRef.current.push(el)
    }
  }

  const addToTestimonialCardsRef = (el) => {
    if (el && !testimonialCardsRef.current.includes(el)) {
      testimonialCardsRef.current.push(el)
    }
  }

  return (
    <div>
      <Header />
      <PageHeader title="Payment Solutions" images={aboutHeaderImages} />

      <SolutionsContainer className="container">
        <HeroSection>
          <HeroContent ref={heroContentRef}>
            <HeroTitle>Global Payment Solutions for Everyone</HeroTitle>
            <HeroDescription>
              Cashwyre offers a comprehensive suite of payment solutions designed to make international transfers and
              payments simple, fast, and affordable for individuals and businesses of all sizes.
            </HeroDescription>
            <HeroDescription>
              Whether you're sending money to family overseas, paying international suppliers, or managing a global
              workforce, our platform provides the tools you need to move money across borders with ease.
            </HeroDescription>
          </HeroContent>
          <HeroImage ref={heroImageRef} />
        </HeroSection>

        <FeaturesSection>
          <SectionTitle style={{ opacity: 1 }}>Key Features</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Our platform is built with powerful features to make global payments seamless and secure.
          </SectionDescription>

          <FeaturesGrid>
            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-exchange-dollar-line"></i>
              </FeatureIcon>
              <FeatureTitle>Competitive Exchange Rates</FeatureTitle>
              <FeatureDescription>
                Get real-time, transparent exchange rates with markups up to 8x lower than traditional banks.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-secure-payment-line"></i>
              </FeatureIcon>
              <FeatureTitle>Secure Transactions</FeatureTitle>
              <FeatureDescription>
                Bank-level encryption and advanced security protocols protect your data and funds at all times.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-time-line"></i>
              </FeatureIcon>
              <FeatureTitle>Fast Transfers</FeatureTitle>
              <FeatureDescription>
                Most transfers are completed within minutes, with all transfers guaranteed within 24 hours.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-global-line"></i>
              </FeatureIcon>
              <FeatureTitle>Global Coverage</FeatureTitle>
              <FeatureDescription>
                Send money to over 50 countries in 50+ currencies with local payment options in each region.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-bank-card-line"></i>
              </FeatureIcon>
              <FeatureTitle>Multiple Payment Methods</FeatureTitle>
              <FeatureDescription>
                Fund transfers using bank accounts, credit/debit cards, digital wallets, and local payment systems.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-customer-service-2-line"></i>
              </FeatureIcon>
              <FeatureTitle>24/7 Support</FeatureTitle>
              <FeatureDescription>
                Access our dedicated support team anytime via chat, email, or phone in multiple languages.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        <SolutionsSection>
          <SectionTitle style={{ opacity: 1 }}>Our Solutions</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Tailored payment solutions to meet the needs of different users and use cases.
          </SectionDescription>

          <SolutionTabs ref={solutionTabsRef}>
            <SolutionTab active={activeTab === 0} first onClick={() => setActiveTab(0)}>
              Personal Transfers
            </SolutionTab>
            <SolutionTab active={activeTab === 1} onClick={() => setActiveTab(1)}>
              Business Payments
            </SolutionTab>
            <SolutionTab active={activeTab === 2} last onClick={() => setActiveTab(2)}>
              Platform API
            </SolutionTab>
          </SolutionTabs>

          <SolutionContent ref={solutionContentRef}>
            {activeTab === 0 && (
              <>
                <SolutionImage />
                <SolutionInfo>
                  <SolutionTitle>Personal International Transfers</SolutionTitle>
                  <SolutionDescription>
                    Send money to friends and family around the world quickly, securely, and at a fraction of the cost
                    of traditional banks and money transfer services.
                  </SolutionDescription>
                  <SolutionFeatures>
                    <SolutionFeature>Send money to 150+ countries in local currency</SolutionFeature>
                    <SolutionFeature>Transparent fees and competitive exchange rates</SolutionFeature>
                    <SolutionFeature>Track your transfer in real-time</SolutionFeature>
                    <SolutionFeature>Set up recurring transfers for regular payments</SolutionFeature>
                    <SolutionFeature>
                      Multiple payout options including bank deposit, cash pickup, and mobile money
                    </SolutionFeature>
                  </SolutionFeatures>
                  <SolutionButton href="/cashwyre-app">Get Started</SolutionButton>
                </SolutionInfo>
              </>
            )}

            {activeTab === 1 && (
              <>
                <SolutionImage />
                <SolutionInfo>
                  <SolutionTitle>Business Payment Solutions</SolutionTitle>
                  <SolutionDescription>
                    Streamline your international business payments with our comprehensive suite of tools designed for
                    companies of all sizes, from startups to enterprises.
                  </SolutionDescription>
                  <SolutionFeatures>
                    <SolutionFeature>Pay suppliers and vendors in 50+ currencies</SolutionFeature>
                    <SolutionFeature>Bulk payment processing for payroll and mass payouts</SolutionFeature>
                    <SolutionFeature>Multi-user access with custom permissions</SolutionFeature>
                    <SolutionFeature>Integration with popular accounting software</SolutionFeature>
                    <SolutionFeature>Detailed reporting and analytics for financial oversight</SolutionFeature>
                  </SolutionFeatures>
                  <SolutionButton href="/contact-us">Contact Sales</SolutionButton>
                </SolutionInfo>
              </>
            )}

            {activeTab === 2 && (
              <>
                <SolutionImage />
                <SolutionInfo>
                  <SolutionTitle>Payment Platform API</SolutionTitle>
                  <SolutionDescription>
                    Integrate Cashwyre's powerful payment infrastructure directly into your website, app, or platform
                    with our developer-friendly API.
                  </SolutionDescription>
                  <SolutionFeatures>
                    <SolutionFeature>RESTful API with comprehensive documentation</SolutionFeature>
                    <SolutionFeature>Webhooks for real-time event notifications</SolutionFeature>
                    <SolutionFeature>SDKs for popular programming languages</SolutionFeature>
                    <SolutionFeature>Sandbox environment for testing</SolutionFeature>
                    <SolutionFeature>Dedicated technical support for developers</SolutionFeature>
                  </SolutionFeatures>
                  <SolutionButton href="/developers">Explore API</SolutionButton>
                </SolutionInfo>
              </>
            )}
          </SolutionContent>
        </SolutionsSection>

        <ComparisonSection>
          <SectionTitle style={{ opacity: 1 }}>How We Compare</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            See how Cashwyre stacks up against traditional banks and other money transfer services.
          </SectionDescription>

          <ComparisonTable ref={comparisonTableRef}>
            <Table>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Cashwyre</th>
                  <th>Traditional Banks</th>
                  <th>Other Transfer Services</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Transfer Fee</td>
                  <td>0.5% - 1%</td>
                  <td>3% - 5%</td>
                  <td>1% - 3%</td>
                </tr>
                <tr className="highlight">
                  <td>Exchange Rate Markup</td>
                  <td>0.5% - 1%</td>
                  <td>3% - 7%</td>
                  <td>1% - 3%</td>
                </tr>
                <tr>
                  <td>Transfer Speed</td>
                  <td>Minutes - 24 hours</td>
                  <td>2-5 business days</td>
                  <td>1-3 business days</td>
                </tr>
                <tr className="highlight">
                  <td>Global Coverage</td>
                  <td>150+ countries</td>
                  <td>Varies (typically limited)</td>
                  <td>50-100 countries</td>
                </tr>
                <tr>
                  <td>Mobile App</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                  <td className="check">✓</td>
                </tr>
                <tr className="highlight">
                  <td>24/7 Customer Support</td>
                  <td className="check">✓</td>
                  <td className="cross">✗</td>
                  <td className="cross">✗</td>
                </tr>
                <tr>
                  <td>Multi-Currency Accounts</td>
                  <td className="check">✓</td>
                  <td className="cross">✗</td>
                  <td className="check">✓</td>
                </tr>
                <tr className="highlight">
                  <td>Business API</td>
                  <td className="check">✓</td>
                  <td className="cross">✗</td>
                  <td className="check">✓</td>
                </tr>
              </tbody>
            </Table>
          </ComparisonTable>
        </ComparisonSection>

        <TestimonialsSection>
          <SectionTitle style={{ opacity: 1 }}>What Our Customers Say</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Hear from individuals and businesses who have transformed their international payment experience with
            Cashwyre.
          </SectionDescription>

          <TestimonialsGrid>
            <TestimonialCard ref={addToTestimonialCardsRef}>
              <TestimonialQuote>
                Cashwyre has completely changed how I send money to my family back home. The process is so simple, and
                the fees are a fraction of what I used to pay. Plus, the money arrives within minutes!
              </TestimonialQuote>
              <TestimonialAuthor>
                <AuthorAvatar image="/placeholder.svg?height=50&width=50" />
                <AuthorInfo>
                  <AuthorName>Maria G.</AuthorName>
                  <AuthorRole>Personal User</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>

            <TestimonialCard ref={addToTestimonialCardsRef}>
              <TestimonialQuote>
                As a small business with international suppliers, Cashwyre has saved us thousands in transfer fees and
                currency conversion costs. The platform is intuitive and the customer service is exceptional.
              </TestimonialQuote>
              <TestimonialAuthor>
                <AuthorAvatar image="/placeholder.svg?height=50&width=50" />
                <AuthorInfo>
                  <AuthorName>James T.</AuthorName>
                  <AuthorRole>Business Owner</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>

            <TestimonialCard ref={addToTestimonialCardsRef}>
              <TestimonialQuote>
                Integrating Cashwyre's API into our platform was seamless. The documentation is clear, and the
                development team was incredibly responsive. Our users love the fast, affordable international payments.
              </TestimonialQuote>
              <TestimonialAuthor>
                <AuthorAvatar image="/placeholder.svg?height=50&width=50" />
                <AuthorInfo>
                  <AuthorName>Sophia L.</AuthorName>
                  <AuthorRole>CTO, Tech Startup</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </TestimonialsGrid>
        </TestimonialsSection>
      </SolutionsContainer>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default CashwyreSolutionsPage