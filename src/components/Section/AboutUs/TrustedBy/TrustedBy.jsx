"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const TrustedBy = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const logosRef = useRef(null)

  const logos = [
    { name: "Netflix", src: "/images/brand/brand-1.png" },
    { name: "Airbnb", src: "/images/brand/brand-2.png" },
    { name: "Amazon", src: "/images/brand/brand-3.png" },
    { name: "Buffer", src: "/images/brand/brand-4.png" },
    { name: "Spotify", src: "/images/brand/brand-5.png" },
    { name: "Alphao", src: "/images/brand/brand-6.png" },
    { name: "Grammarly", src: "/images/brand/brand-7.png" },
    { name: "Grill", src: "/images/brand/brand-8.png" },
    { name: "USA Today", src: "/images/brand/brand-9.png" },
  ]

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
      },
    })

    tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })

    gsap.fromTo(
      ".logo-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: logosRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className="tekup-brand-section tekup-brand-section-2 tekup-section-padding">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <div className="tekup-section-title" ref={titleRef}>
              <h2 className="title">Trusted by Thousands Business</h2>
              <p>Many top companies trust Softec</p>
            </div>
          </div>
        </div>
        <div className="row" ref={logosRef}>
          <div className="col-lg-12">
            <div className="tekup-brand-wrap">
              {logos.map((logo, index) => (
                <div key={index} className="logo-item tekup-brand-item">
                  <img src={logo.src || "/placeholder.svg"} alt={logo.name} className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustedBy