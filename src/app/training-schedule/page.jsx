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

const ScheduleContainer = styled.div`
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

const ScheduleGrid = styled.div`
  display: grid;
  gap: 30px;
`

const CourseCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  opacity: 0;
  transform: translateY(20px);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

const CourseDate = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  
  .month {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
  }
  
  .day {
    font-size: 32px;
    font-weight: 700;
    color: #333;
    margin-bottom: 5px;
  }
  
  .year {
    font-size: 16px;
    color: #666;
  }
`

const CourseInfo = styled.div`
  .course-type {
    font-size: 14px;
    font-weight: 600;
    color: #4CAF50;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  
  .course-title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  
  .course-description {
    font-size: 16px;
    line-height: 1.6;
    color: #666;
    margin-bottom: 15px;
  }
  
  .course-details {
    display: flex;
    gap: 20px;
    
    .detail {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      color: #666;
      
      i {
        font-size: 16px;
      }
    }
  }
`

const CourseAction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  
  .course-price {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin-bottom: 15px;
  }
  
  .register-btn {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #555;
    }
  }
  
  @media (max-width: 992px) {
    align-items: flex-start;
  }
`

const NoCoursesMessage = styled.div`
  text-align: center;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 10px;
  font-size: 18px;
  color: #666;
`

// Sample course data
const coursesData = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    description: "Learn to design distributed systems on AWS. Prepare for the AWS Certified Solutions Architect exam.",
    type: "cloud",
    date: "2023-06-15",
    duration: "5 days",
    format: "Online",
    price: "$1,299",
  },
  {
    id: 2,
    title: "Certified Ethical Hacker (CEH)",
    description: "Master the tools and techniques used by hackers and information security professionals.",
    type: "security",
    date: "2023-06-22",
    duration: "5 days",
    format: "In-person",
    price: "$1,899",
  },
  {
    id: 3,
    title: "Data Science with Python",
    description: "Learn data analysis, visualization, machine learning, and more with Python.",
    type: "data",
    date: "2023-07-05",
    duration: "4 days",
    format: "Hybrid",
    price: "$1,499",
  },
  {
    id: 4,
    title: "Microsoft Azure Administrator",
    description: "Prepare for the Azure Administrator Associate certification with hands-on labs.",
    type: "cloud",
    date: "2023-07-12",
    duration: "4 days",
    format: "Online",
    price: "$1,199",
  },
  {
    id: 5,
    title: "CompTIA Security+",
    description: "Build foundational IT security knowledge and prepare for the Security+ certification.",
    type: "security",
    date: "2023-07-19",
    duration: "5 days",
    format: "In-person",
    price: "$1,599",
  },
  {
    id: 6,
    title: "Power BI Data Analysis",
    description: "Learn to create interactive dashboards and reports with Microsoft Power BI.",
    type: "data",
    date: "2023-07-26",
    duration: "3 days",
    format: "Online",
    price: "$999",
  },
  {
    id: 7,
    title: "Google Cloud Architect",
    description: "Design and manage solutions on Google Cloud Platform. Prepare for the certification exam.",
    type: "cloud",
    date: "2023-08-02",
    duration: "5 days",
    format: "Online",
    price: "$1,399",
  },
  {
    id: 8,
    title: "Certified Information Systems Security Professional (CISSP)",
    description: "Advanced security certification covering eight domains of cybersecurity knowledge.",
    type: "security",
    date: "2023-08-09",
    duration: "6 days",
    format: "In-person",
    price: "$2,199",
  },
  {
    id: 9,
    title: "Machine Learning with TensorFlow",
    description: "Build and deploy machine learning models using TensorFlow and Keras.",
    type: "data",
    date: "2023-08-16",
    duration: "4 days",
    format: "Hybrid",
    price: "$1,699",
  },
]

const TrainingSchedulePage = () => {
  const HeaderImages = [
    "/images/training/training_calender_img_1.jpg",
    "/images/training/training_calender_img_2.jpg", 
    "/images/training/training_calender_img_3.jpg"
  ];

  const [activeFilter, setActiveFilter] = useState("all")
  const [filteredCourses, setFilteredCourses] = useState(coursesData)

  const titleRef = useRef(null)
  const descriptionRef = useRef(null)
  const filterRef = useRef(null)
  const courseCardsRef = useRef([])

  useEffect(() => {
    // Filter courses based on active filter
    if (activeFilter === "all") {
      setFilteredCourses(coursesData)
    } else {
      setFilteredCourses(coursesData.filter((course) => course.type === activeFilter))
    }

    // Reset course cards ref when filtered courses change
    courseCardsRef.current = []
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

    // Animation for course cards
    courseCardsRef.current.forEach((card, index) => {
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
  }, [filteredCourses])

  // Function to add elements to refs
  const addToCourseCardsRef = (el) => {
    if (el && !courseCardsRef.current.includes(el)) {
      courseCardsRef.current.push(el)
    }
  }

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const month = date.toLocaleString("default", { month: "short" })
    const day = date.getDate()
    const year = date.getFullYear()

    return { month, day, year }
  }

  return (
    <div>
      <Header />
      <PageHeader title="Training Calendar" images={HeaderImages}  />

      <ScheduleContainer className="container">
        <SectionTitle ref={titleRef}>Upcoming Training Sessions</SectionTitle>
        <SectionDescription ref={descriptionRef}>
          Browse our upcoming training sessions and certification courses. Register early to secure your spot and take
          advantage of early bird discounts.
        </SectionDescription>

        <FilterContainer ref={filterRef}>
          <FilterButton active={activeFilter === "all"} onClick={() => setActiveFilter("all")}>
            All Courses
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

        <ScheduleGrid>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => {
              const { month, day, year } = formatDate(course.date)
              return (
                <CourseCard key={course.id} ref={addToCourseCardsRef}>
                  <CourseDate>
                    <div className="month">{month}</div>
                    <div className="day">{day}</div>
                    <div className="year">{year}</div>
                  </CourseDate>

                  <CourseInfo>
                    <div className="course-type">
                      {course.type === "cloud" && "Cloud Computing"}
                      {course.type === "security" && "Cybersecurity"}
                      {course.type === "data" && "Data & Analytics"}
                    </div>
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    <div className="course-details">
                      <div className="detail">
                        <i className="ri-time-line"></i>
                        <span>{course.duration}</span>
                      </div>
                      <div className="detail">
                        <i className="ri-computer-line"></i>
                        <span>{course.format}</span>
                      </div>
                    </div>
                  </CourseInfo>

                  <CourseAction>
                    <div className="course-price">{course.price}</div>
                    <button className="register-btn">Register Now</button>
                  </CourseAction>
                </CourseCard>
              )
            })
          ) : (
            <NoCoursesMessage>
              No courses available for the selected category. Please check back later or select a different category.
            </NoCoursesMessage>
          )}
        </ScheduleGrid>
      </ScheduleContainer>

      <CallToAction />
      <Footer />
    </div>
  )
}

export default TrainingSchedulePage