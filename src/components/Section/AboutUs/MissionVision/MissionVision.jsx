"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function MissionVision() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const cardsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    })

    tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })

    gsap.fromTo(
      ".mission-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const cards = [
    {
      title: "Our Mission",
      description:
        "To empower businesses with innovative software solutions that drive growth, efficiency, and digital transformation. We strive to create technology that makes a meaningful impact on our clients' success.",
      icon: "ri-focus-3-line",
    },
    {
      title: "Our Vision",
      description:
        "To be the global leader in creating intuitive, powerful software that solves complex business challenges. We envision a world where technology enhances human potential and creates sustainable value for all stakeholders.",
      icon: "ri-eye-line",
    },
    {
      title: "Our Values",
      description:
        "Innovation, integrity, excellence, collaboration, and customer-centricity. These core values guide our decisions, shape our culture, and define how we deliver value to our clients and partners.",
      icon: "ri-heart-line",
    },
  ]

  return (
    <section ref={sectionRef} className="tekup-section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="tekup-section-title" ref={titleRef}>
              <span className="sub-title">WHO WE ARE</span>
              <h2 className="title">Our Mission & Vision</h2>
              <p>
                At Spacinfo tech, we're driven by a clear mission and vision that guide everything we do. Our values form the
                foundation of our company culture and shape how we serve our clients.
              </p>
            </div>
          </div>
        </div>
        <div className="row" ref={cardsRef}>
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 mission-card">
              <div className="tekup-iconbox-wrap3 h-100">
                <div className="tekup-iconbox-icon3">
                  <i className={card.icon} style={{ fontSize: "48px", color: "#0119FF" }}></i>
                </div>
                <div className="tekup-iconbox-data3">
                  <h5>{card.title}</h5>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}