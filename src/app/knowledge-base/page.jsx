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

const KnowledgeBaseContainer = styled.div`
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

const SearchContainer = styled.div`
  margin-bottom: 50px;
  opacity: 0;
`

const SearchForm = styled.form`
  display: flex;
  max-width: 700px;
  margin: 0 auto;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`

const SearchInput = styled.input`
  flex: 1;
  padding: 15px 20px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #333;
  }
  
  @media (max-width: 576px) {
    border-radius: 5px;
    margin-bottom: 10px;
  }
`

const SearchButton = styled.button`
  padding: 15px 30px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 0 5px 5px 0;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
  
  @media (max-width: 576px) {
    border-radius: 5px;
  }
`

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 60px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const CategoryCard = styled.div`
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

const CategoryIcon = styled.div`
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

const CategoryTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`

const CategoryDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`

const CategoryLink = styled.a`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  i {
    margin-left: 5px;
    font-size: 14px;
  }
`

const PopularArticlesSection = styled.div`
  margin-bottom: 60px;
`

const ArticlesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ArticleCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 25px;
  opacity: 0;
  transform: translateY(20px);
`

const ArticleTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 15px;
`

const ArticleMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
`

const ArticleExcerpt = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
`

const ArticleLink = styled.a`
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
  
  i {
    margin-left: 5px;
    font-size: 14px;
  }
`

const FAQSection = styled.div``

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

// Sample knowledge base data
const categoriesData = [
  {
    id: 1,
    title: "Cloud Solutions",
    description: "Resources and guides for cloud migration, management, and optimization.",
    icon: "ri-cloud-line",
    link: "/knowledge-base/cloud",
  },
  {
    id: 2,
    title: "Cybersecurity",
    description: "Best practices, tips, and resources for securing your digital assets.",
    icon: "ri-shield-check-line",
    link: "/knowledge-base/security",
  },
  {
    id: 3,
    title: "Data & Analytics",
    description: "Guides on data management, analysis, and business intelligence.",
    icon: "ri-database-2-line",
    link: "/knowledge-base/data",
  },
  {
    id: 4,
    title: "IT Infrastructure",
    description: "Resources for managing and optimizing your IT infrastructure.",
    icon: "ri-server-line",
    link: "/knowledge-base/infrastructure",
  },
  {
    id: 5,
    title: "Software Development",
    description: "Guides and best practices for software development and DevOps.",
    icon: "ri-code-s-slash-line",
    link: "/knowledge-base/development",
  },
  {
    id: 6,
    title: "Digital Transformation",
    description: "Resources to help your organization navigate digital transformation.",
    icon: "ri-rocket-line",
    link: "/knowledge-base/transformation",
  },
]

const articlesData = [
  {
    id: 1,
    title: "How to Secure Your Cloud Environment: A Comprehensive Guide",
    category: "Cloud Security",
    date: "May 15, 2023",
    excerpt: "Learn the essential steps to secure your cloud infrastructure and protect your data from threats.",
  },
  {
    id: 2,
    title: "Understanding Data Compliance Regulations: GDPR, CCPA, and More",
    category: "Compliance",
    date: "May 10, 2023",
    excerpt:
      "A detailed overview of key data protection regulations and how to ensure your organization stays compliant.",
  },
  {
    id: 3,
    title: "Implementing Zero Trust Security: Best Practices and Pitfalls",
    category: "Cybersecurity",
    date: "May 5, 2023",
    excerpt:
      "A guide to implementing a zero trust security model in your organization, with practical tips and common mistakes to avoid.",
  },
  {
    id: 4,
    title: "Cloud Cost Optimization: Strategies to Reduce Your Cloud Spend",
    category: "Cloud Management",
    date: "April 28, 2023",
    excerpt: "Effective strategies to optimize your cloud costs without compromising performance or security.",
  },
]

const faqData = [
  {
    id: 1,
    question: "What is the difference between public, private, and hybrid cloud?",
    answer:
      "A public cloud is a multi-tenant environment where computing resources are shared among multiple customers. A private cloud is dedicated to a single organization, offering greater control and customization. A hybrid cloud combines both public and private clouds, allowing data and applications to be shared between them for greater flexibility and deployment options.",
  },
  {
    id: 2,
    question: "How can I protect my organization from ransomware attacks?",
    answer:
      "Protecting against ransomware requires a multi-layered approach: regularly back up your data and store backups offline, keep all software and systems updated with the latest security patches, implement email filtering and web filtering, use anti-malware solutions, train employees on security awareness, implement access controls and least privilege principles, and develop an incident response plan.",
  },
  {
    id: 3,
    question: "What are the benefits of implementing a data analytics solution?",
    answer:
      "Implementing data analytics can provide numerous benefits: better decision-making based on data insights, improved operational efficiency by identifying bottlenecks, enhanced customer experiences through personalization, increased revenue through targeted marketing and sales strategies, competitive advantage through market trend analysis, and risk reduction through predictive analytics and early warning systems.",
  },
  {
    id: 4,
    question: "How do I choose the right cloud provider for my business?",
    answer:
      "When selecting a cloud provider, consider these factors: your specific business requirements and workloads, the provider's service offerings and how they align with your needs, pricing structure and total cost of ownership, security and compliance capabilities, performance and reliability metrics, geographic availability of data centers, level of support provided, and ease of integration with your existing systems.",
  },
  {
    id: 5,
    question: "What is DevOps and how can it benefit my organization?",
    answer:
      "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and deliver high-quality software continuously. Benefits include faster delivery of features, improved collaboration between teams, more stable operating environments, better resource utilization, and automated processes that reduce human error and improve efficiency.",
  },
]

const KnowledgeBasePage = () => {
  const [openFAQ, setOpenFAQ] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const searchRef = useRef(null)
  const categoryCardsRef = useRef([])
  const articleCardsRef = useRef([])
  const faqItemsRef = useRef([])

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

    // Animation for search bar
    gsap.to(searchRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.3,
      scrollTrigger: {
        trigger: searchRef.current,
        start: "top 80%",
      },
    })

    // Animation for category cards
    categoryCardsRef.current.forEach((card, index) => {
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

    // Animation for article cards
    articleCardsRef.current.forEach((card, index) => {
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
  const addToCategoryCardsRef = (el) => {
    if (el && !categoryCardsRef.current.includes(el)) {
      categoryCardsRef.current.push(el)
    }
  }

  const addToArticleCardsRef = (el) => {
    if (el && !articleCardsRef.current.includes(el)) {
      articleCardsRef.current.push(el)
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

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would trigger a search
    console.log("Searching for:", searchQuery)
  }

  return (
    <div>
      <Header />
      <PageHeader title="Knowledge Base" />

      <KnowledgeBaseContainer className="container">
        <SectionTitle ref={titleRef}>Find Answers to Your Questions</SectionTitle>
        <SectionDescription ref={descriptionRef}>
          Browse our comprehensive knowledge base for guides, tutorials, and answers to frequently asked questions about
          our services and technology solutions.
        </SectionDescription>

        <SearchContainer ref={searchRef}>
          <SearchForm onSubmit={handleSearchSubmit}>
            <SearchInput
              type="text"
              placeholder="Search the knowledge base..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
          </SearchForm>
        </SearchContainer>

        <CategoriesGrid>
          {categoriesData.map((category) => (
            <CategoryCard key={category.id} ref={addToCategoryCardsRef}>
              <CategoryIcon>
                <i className={category.icon}></i>
              </CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
              <CategoryDescription>{category.description}</CategoryDescription>
              <CategoryLink href={category.link}>
                Browse Articles <i className="ri-arrow-right-line"></i>
              </CategoryLink>
            </CategoryCard>
          ))}
        </CategoriesGrid>

        <PopularArticlesSection>
          <SectionTitle style={{ opacity: 1 }}>Popular Articles</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Our most frequently read articles and resources to help you get started.
          </SectionDescription>

          <ArticlesGrid>
            {articlesData.map((article) => (
              <ArticleCard key={article.id} ref={addToArticleCardsRef}>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleMeta>
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </ArticleMeta>
                <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
                <ArticleLink href={`/knowledge-base/articles/${article.id}`}>
                  Read More <i className="ri-arrow-right-line"></i>
                </ArticleLink>
              </ArticleCard>
            ))}
          </ArticlesGrid>
        </PopularArticlesSection>

        <FAQSection>
          <SectionTitle style={{ opacity: 1 }}>Frequently Asked Questions</SectionTitle>
          <SectionDescription style={{ opacity: 1 }}>
            Quick answers to common questions about our services and solutions.
          </SectionDescription>

          <FAQContainer>
            {faqData.map((faq) => (
              <FAQItem key={faq.id} ref={addToFaqItemsRef}>
                <FAQQuestion isOpen={openFAQ === faq.id} onClick={() => toggleFAQ(faq.id)}>
                  {faq.question}
                  <i className="ri-arrow-down-s-line"></i>
                </FAQQuestion>
                <FAQAnswer isOpen={openFAQ === faq.id}>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQContainer>
        </FAQSection>
      </KnowledgeBaseContainer>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default KnowledgeBasePage