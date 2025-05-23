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

const AppContainer = styled.div`
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

const AppStoreButtons = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const AppStoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 12px 20px;
  background-color: #333;
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
  
  i {
    font-size: 24px;
    margin-right: 10px;
  }
  
  .button-text {
    display: flex;
    flex-direction: column;
    
    .small-text {
      font-size: 12px;
      margin-bottom: 2px;
    }
    
    .large-text {
      font-size: 16px;
      font-weight: 500;
    }
  }
`

const QRCode = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  .qr-image {
    width: 100px;
    height: 100px;
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    
    img {
      width: 80px;
      height: 80px;
    }
  }
  
  .qr-text {
    font-size: 14px;
    color: #666;
  }
`

const HeroImage = styled.div`
  position: relative;
  height: 600px;
  background-image: url('/placeholder.svg?height=600&width=300');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  
  @media (max-width: 992px) {
    height: 500px;
  }
  
  @media (max-width: 768px) {
    height: 400px;
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

const AppScreensSection = styled.div`
  margin-bottom: 80px;
`

const ScreenshotsTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  opacity: 0;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`

const ScreenshotTab = styled.button`
  padding: 12px 20px;
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
    flex: 1 1 calc(33.333% - 10px);
  }
`

const ScreenshotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  opacity: 0;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const ScreenshotCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`

const ScreenshotImage = styled.div`
  height: 500px;
  background-image: url('/placeholder.svg?height=500&width=250');
  background-size: cover;
  background-position: center;
  
  @media (max-width: 992px) {
    height: 400px;
  }
  
  @media (max-width: 768px) {
    height: 350px;
  }
`

const HowItWorksSection = styled.div`
  margin-bottom: 80px;
`

const StepsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Step = styled.div`
  display: flex;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(30px);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`

const StepNumber = styled.div`
  flex: 0 0 80px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  margin-right: 30px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`

const StepContent = styled.div`
  flex: 1;
`

const StepTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 15px;
`

const StepDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
`

const FAQSection = styled.div`
  margin-bottom: 80px;
`

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FAQItem = styled.div`
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  opacity: 0;
  transform: translateY(20px);
`

const FAQQuestion = styled.div`
  padding: 20px;
  background-color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  i {
    transition: transform 0.3s ease;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`

const FAQAnswer = styled.div`
  padding: ${(props) => (props.isOpen ? "20px" : "0 20px")};
  background-color: #f9f9f9;
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  max-height: ${(props) => (props.isOpen ? "500px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease;
`

const CashwyreAppPage = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [openFAQ, setOpenFAQ] = useState(null)

  const heroContentRef = useRef(null)
  const heroImageRef = useRef(null)
  const featureCardsRef = useRef([])
  const screenshotsTabsRef = useRef(null)
  const screenshotsGridRef = useRef(null)
  const stepsRef = useRef([])
  const faqItemsRef = useRef([])

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

    // Animation for screenshots tabs
    gsap.to(screenshotsTabsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: screenshotsTabsRef.current,
        start: "top 85%",
      },
    })

    // Animation for screenshots grid
    gsap.to(screenshotsGridRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.2,
      scrollTrigger: {
        trigger: screenshotsGridRef.current,
        start: "top 85%",
      },
    })

    // Animation for steps
    stepsRef.current.forEach((step, index) => {
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

    // Animation for FAQ items
    faqItemsRef.current.forEach((item, index) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: 0.1 * index,
        scrollTrigger: {
          trigger: item,
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

  const addToStepsRef = (el) => {
    if (el && !stepsRef.current.includes(el)) {
      stepsRef.current.push(el)
    }
  }

  const addToFaqItemsRef = (el) => {
    if (el && !faqItemsRef.current.includes(el)) {
      faqItemsRef.current.push(el)
    }
  }

  // Handle FAQ toggle
  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <div>
      <Header />
      <PageHeader title="Get the Cashwyre App" />

      <AppContainer className="container">
        <HeroSection>
          <HeroContent ref={heroContentRef}>
            <HeroTitle>Global Payments in Your Pocket</HeroTitle>
            <HeroDescription>
              Download the Cashwyre app to send money internationally, manage multiple currencies, and make payments
              anywhere in the world—all from your smartphone.
            </HeroDescription>
            <AppStoreButtons>
              <AppStoreButton href="#" aria-label="Download on the App Store">
                <i className="ri-app-store-fill"></i>
                <div className="button-text">
                  <span className="small-text">Download on the</span>
                  <span className="large-text">App Store</span>
                </div>
              </AppStoreButton>
              <AppStoreButton href="#" aria-label="Get it on Google Play">
                <i className="ri-google-play-fill"></i>
                <div className="button-text">
                  <span className="small-text">Get it on</span>
                  <span className="large-text">Google Play</span>
                </div>
              </AppStoreButton>
            </AppStoreButtons>
            <QRCode>
              <div className="qr-image">
                <img src="/placeholder.svg?height=80&width=80" alt="QR Code to download app" />
              </div>
              <div className="qr-text">
                Scan this QR code with your phone camera to download the Cashwyre app directly.
              </div>
            </QRCode>
          </HeroContent>
          <HeroImage ref={heroImageRef} />
        </HeroSection>

        <FeaturesSection>
          <SectionTitle style={{ opacity: 1 }}>App Features</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Discover what makes the Cashwyre app the preferred choice for international payments and transfers.
          </SectionDescription>

          <FeaturesGrid>
            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-exchange-dollar-line"></i>
              </FeatureIcon>
              <FeatureTitle>Send Money Globally</FeatureTitle>
              <FeatureDescription>
                Transfer money to over 150 countries with competitive exchange rates and low fees.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-wallet-3-line"></i>
              </FeatureIcon>
              <FeatureTitle>Multi-Currency Wallet</FeatureTitle>
              <FeatureDescription>
                Hold, manage, and exchange multiple currencies in your digital wallet.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-bank-card-line"></i>
              </FeatureIcon>
              <FeatureTitle>Virtual Debit Card</FeatureTitle>
              <FeatureDescription>
                Make online purchases and payments with your Cashwyre virtual debit card.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-notification-4-line"></i>
              </FeatureIcon>
              <FeatureTitle>Real-Time Notifications</FeatureTitle>
              <FeatureDescription>
                Stay informed with instant alerts for all account activities and transfers.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-lock-password-line"></i>
              </FeatureIcon>
              <FeatureTitle>Secure Authentication</FeatureTitle>
              <FeatureDescription>
                Protect your account with biometric authentication and two-factor verification.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard ref={addToFeatureCardsRef}>
              <FeatureIcon>
                <i className="ri-repeat-line"></i>
              </FeatureIcon>
              <FeatureTitle>Recurring Transfers</FeatureTitle>
              <FeatureDescription>
                Set up automatic recurring transfers for regular payments to family or bills.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        <AppScreensSection>
          <SectionTitle style={{ opacity: 1 }}>App Screenshots</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Take a look at the intuitive and user-friendly interface of the Cashwyre app.
          </SectionDescription>

          <ScreenshotsTabs ref={screenshotsTabsRef}>
            <ScreenshotTab active={activeTab === 0} first onClick={() => setActiveTab(0)}>
              Send Money
            </ScreenshotTab>
            <ScreenshotTab active={activeTab === 1} onClick={() => setActiveTab(1)}>
              Wallet
            </ScreenshotTab>
            <ScreenshotTab active={activeTab === 2} last onClick={() => setActiveTab(2)}>
              Account
            </ScreenshotTab>
          </ScreenshotsTabs>

          <ScreenshotsGrid ref={screenshotsGridRef}>
            {activeTab === 0 && (
              <>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
              </>
            )}

            {activeTab === 1 && (
              <>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
              </>
            )}

            {activeTab === 2 && (
              <>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
                <ScreenshotCard>
                  <ScreenshotImage />
                </ScreenshotCard>
              </>
            )}
          </ScreenshotsGrid>
        </AppScreensSection>

        <HowItWorksSection>
          <SectionTitle style={{ opacity: 1 }}>How It Works</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Getting started with Cashwyre is quick and easy. Follow these simple steps to begin sending money globally.
          </SectionDescription>

          <StepsContainer>
            <Step ref={addToStepsRef}>
              <StepNumber>1</StepNumber>
              <StepContent>
                <StepTitle>Download & Register</StepTitle>
                <StepDescription>
                  Download the Cashwyre app from the App Store or Google Play. Create an account with your email and
                  phone number, then complete the verification process.
                </StepDescription>
              </StepContent>
            </Step>

            <Step ref={addToStepsRef}>
              <StepNumber>2</StepNumber>
              <StepContent>
                <StepTitle>Add Payment Method</StepTitle>
                <StepDescription>
                  Link your bank account, debit card, or credit card to fund your transfers. All payment information is
                  securely encrypted and protected.
                </StepDescription>
              </StepContent>
            </Step>

            <Step ref={addToStepsRef}>
              <StepNumber>3</StepNumber>
              <StepContent>
                <StepTitle>Set Up Your Transfer</StepTitle>
                <StepDescription>
                  Enter the recipient's details, select the amount and currency, and review the exchange rate and fees.
                  You can save recipients for future transfers.
                </StepDescription>
              </StepContent>
            </Step>

            <Step ref={addToStepsRef}>
              <StepNumber>4</StepNumber>
              <StepContent>
                <StepTitle>Send & Track</StepTitle>
                <StepDescription>
                  Confirm your transfer and track its progress in real-time. You'll receive notifications when the money
                  is sent and when it's received by the recipient.
                </StepDescription>
              </StepContent>
            </Step>
          </StepsContainer>
        </HowItWorksSection>

        <FAQSection>
          <SectionTitle style={{ opacity: 1 }}>Frequently Asked Questions</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Find answers to common questions about the Cashwyre app and our services.
          </SectionDescription>

          <FAQContainer>
            <FAQItem ref={addToFaqItemsRef}>
              <FAQQuestion isOpen={openFAQ === 1} onClick={() => toggleFAQ(1)}>
                Is the Cashwyre app available worldwide?
                <i className="ri-arrow-down-s-line"></i>
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === 1}>
                The Cashwyre app is available for download worldwide, but our services are currently available in 150+
                countries. We're continuously expanding our coverage to reach more regions.
              </FAQAnswer>
            </FAQItem>

            <FAQItem ref={addToFaqItemsRef}>
              <FAQQuestion isOpen={openFAQ === 2} onClick={() => toggleFAQ(2)}>
                How secure is the Cashwyre app?
                <i className="ri-arrow-down-s-line"></i>
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === 2}>
                The Cashwyre app uses bank-level encryption, biometric authentication, and two-factor verification to
                ensure the highest level of security. All data is encrypted, and we comply with international security
                standards and regulations.
              </FAQAnswer>
            </FAQItem>

            <FAQItem ref={addToFaqItemsRef}>
              <FAQQuestion isOpen={openFAQ === 3} onClick={() => toggleFAQ(3)}>
                What are the fees for using Cashwyre?
                <i className="ri-arrow-down-s-line"></i>
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === 3}>
                Cashwyre charges a small fee ranging from 0.5% to 1% of the transfer amount, depending on the
                destination country and payment method. We're transparent about our fees, and you'll always see the
                exact amount before confirming your transfer.
              </FAQAnswer>
            </FAQItem>

            <FAQItem ref={addToFaqItemsRef}>
              <FAQQuestion isOpen={openFAQ === 4} onClick={() => toggleFAQ(4)}>
                How long do transfers take?
                <i className="ri-arrow-down-s-line"></i>
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === 4}>
                Most transfers are completed within minutes, especially when sending to another Cashwyre user. Bank
                transfers typically take 1-2 business days, depending on the recipient's bank. All transfers are
                guaranteed to be completed within 24 hours.
              </FAQAnswer>
            </FAQItem>

            <FAQItem ref={addToFaqItemsRef}>
              <FAQQuestion isOpen={openFAQ === 5} onClick={() => toggleFAQ(5)}>
                Can I use Cashwyre for business payments?
                <i className="ri-arrow-down-s-line"></i>
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === 5}>
                Yes, Cashwyre offers business accounts with additional features tailored for companies, including bulk
                payments, multi-user access, and integration with accounting software. Download the app and select
                "Business Account" during registration.
              </FAQAnswer>
            </FAQItem>
          </FAQContainer>
        </FAQSection>
      </AppContainer>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default CashwyreAppPage