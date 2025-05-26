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

const BlogContainer = styled.div`
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

const BlogGrid = styled.div`
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

const BlogCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(30px);
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
`

const BlogImage = styled.div`
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`

const BlogContent = styled.div`
  padding: 25px;
`

const BlogCategory = styled.div`
  display: inline-block;
  padding: 5px 10px;
  background-color: #f5f5f5;
  border-radius: 5px;
  font-size: 12px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
`

const BlogTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  line-height: 1.4;
`

const BlogExcerpt = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #666;
  margin-bottom: 20px;
`

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #666;
`

const BlogAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  
  .author-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-image: url(${(props) => props.avatar});
    background-size: cover;
    background-position: center;
  }
`

const BlogDate = styled.div``

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  opacity: 0;
`

const PaginationButton = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => (props.active ? "#333" : "#f5f5f5")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  margin: 0 5px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => (props.active ? "#333" : "#e0e0e0")};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

// Sample blog data
const blogData = [
  {
    id: 1,
    title: "The Future of Cloud Computing: Trends to Watch in 2023",
    excerpt: "Explore the emerging trends in cloud computing that are set to transform businesses in the coming year.",
    category: "cloud",
    image: "/images/blog/cloud_comp_img_1.jpg",
    author: "John Smith",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "May 15, 2023",
  },
  {
    id: 2,
    title: "Securing Your Business Against Ransomware Attacks",
    excerpt: "Learn effective strategies to protect your organization from the growing threat of ransomware attacks.",
    category: "security",
    image: "/images/blog/cloud_comp_img_2.jpg",
    author: "Sarah Johnson",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "May 10, 2023",
  },
  {
    id: 3,
    title: "Leveraging Big Data for Business Intelligence",
    excerpt:
      "Discover how to harness the power of big data to drive informed business decisions and gain competitive advantage.",
    category: "data",
    image: "/images/blog/leverage_big_data_1.jpg",
    author: "Michael Chen",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "May 5, 2023",
  },
  {
    id: 4,
    title: "Multi-Cloud Strategies: Benefits and Challenges",
    excerpt: "An in-depth look at the advantages and potential pitfalls of implementing a multi-cloud approach.",
    category: "cloud",
    image: "/images/blog/multi_cloud_img_2.jpg",
    author: "Emily Wilson",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "April 28, 2023",
  },
  {
    id: 5,
    title: "Zero Trust Security: Beyond the Perimeter",
    excerpt:
      "Why traditional perimeter-based security is no longer sufficient and how to implement a zero trust model.",
    category: "security",
    image: "/images/blog/cyber_training_img_2.jpg",
    author: "David Lee",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "April 22, 2023",
  },
  {
    id: 6,
    title: "Practical Applications of AI in Data Analytics",
    excerpt: "Real-world examples of how artificial intelligence is revolutionizing data analysis across industries.",
    category: "data",
    image: "/images/blog/pract_app_ai_1.jpg",
    author: "Lisa Rodriguez",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "April 15, 2023",
  },
  {
    id: 7,
    title: "Serverless Architecture: When and Why to Use It",
    excerpt: "A comprehensive guide to understanding serverless computing and its ideal use cases.",
    category: "cloud",
    image: "/images/blog/serverless_arch_img_1.jpg",
    author: "Robert Kim",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "April 10, 2023",
  },
  {
    id: 8,
    title: "Cybersecurity Training: Building a Human Firewall",
    excerpt:
      "Why employee education is your best defense against cyber threats and how to implement effective training.",
    category: "security",
    image: "/images/blog/cyber_training_img_1.jpg",
    author: "Jennifer Taylor",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "April 5, 2023",
  },
  {
    id: 9,
    title: "Data Visualization Techniques for Better Insights",
    excerpt:
      "How to transform complex data into clear, actionable visualizations that drive better business decisions.",
    category: "data",
    image: "/images/blog/data_vis_tech_img_1.jpg",
    author: "Thomas Brown",
    authorAvatar: "/placeholder.svg?height=100&width=100",
    date: "March 30, 2023",
  },
]

const BlogPage = () => {
  const HeaderImages = [
    "/images/blog/male_guest_1.jpg",
    "/images/blog/male_guest_3.jpg", 
    "/images/blog/PME_2.jpg"
  ];

  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredBlogs, setFilteredBlogs] = useState(blogData)
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 6

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const filterRef = useRef(null)
  const blogCardsRef = useRef([])
  const paginationRef = useRef(null)

  useEffect(() => {
    // Filter blogs based on active filter
    if (activeFilter === "all") {
      setFilteredBlogs(blogData)
    } else {
      setFilteredBlogs(blogData.filter((blog) => blog.category === activeFilter))
    }

    // Reset to first page when filter changes
    setCurrentPage(1)

    // Reset blog cards ref when filtered blogs change
    blogCardsRef.current = []
  }, [activeFilter])

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)

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

    // Animation for blog cards
    blogCardsRef.current.forEach((card, index) => {
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

    // Animation for pagination
    gsap.to(paginationRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.4,
      scrollTrigger: {
        trigger: paginationRef.current,
        start: "top 90%",
      },
    })

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [currentBlogs])

  // Function to add elements to refs
  const addToBlogCardsRef = (el) => {
    if (el && !blogCardsRef.current.includes(el)) {
      blogCardsRef.current.push(el)
    }
  }

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <Header />
      <PageHeader title="Blog" images={HeaderImages} />

      <BlogContainer className="container">
        <SectionTitle ref={titleRef}>Latest Insights & Articles</SectionTitle>
        <SectionDescription ref={descriptionRef}>
          Stay up-to-date with the latest trends, best practices, and insights in technology, cybersecurity, cloud
          computing, and data analytics.
        </SectionDescription>

        <FilterContainer ref={filterRef}>
          <FilterButton active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All Topics
          </FilterButton>
          <FilterButton active={activeFilter === "cloud"} onClick={() => setActiveFilter("cloud")}>
            Cloud Computing
          </FilterButton>
          <FilterButton active={activeFilter === "security"} onClick={() => setActiveFilter("security")}>
            Cybersecurity
          </FilterButton>
          <FilterButton active={activeFilter === "data"} onClick={() => setActiveFilter("data")}>
            Data & Analytics
          </FilterButton>
        </FilterContainer>

        <BlogGrid>
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.id} ref={addToBlogCardsRef}>
              <BlogImage image={blog.image} />
              <BlogContent>
                <BlogCategory>
                  {blog.category === "cloud" && "Cloud Computing"}
                  {blog.category === "security" && "Cybersecurity"}
                  {blog.category === "data" && "Data & Analytics"}
                </BlogCategory>
                <BlogTitle>{blog.title}</BlogTitle>
                <BlogExcerpt>{blog.excerpt}</BlogExcerpt>
                <BlogMeta>
                  <BlogAuthor avatar={blog.authorAvatar}>
                    <div className="author-avatar"></div>
                    <span>{blog.author}</span>
                  </BlogAuthor>
                  <BlogDate>{blog.date}</BlogDate>
                </BlogMeta>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>

        {totalPages > 1 && (
          <PaginationContainer ref={paginationRef}>
            <PaginationButton onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </PaginationButton>

            {[...Array(totalPages)].map((_, index) => (
              <PaginationButton key={index} active={currentPage === index + 1} onClick={() => paginate(index + 1)}>
                {index + 1}
              </PaginationButton>
            ))}

            <PaginationButton onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </PaginationButton>
          </PaginationContainer>
        )}
      </BlogContainer>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default BlogPage