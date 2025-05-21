"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const AboutHero = () => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl.fromTo(titleRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })

    tl.fromTo(imageRef.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="tekup-breadcrumb-section tekup-breadcrumb-section-2"
      style={{
        backgroundImage: "url('/images/breadcrumb/breadcrumb-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tekup-breadcrumb-content" ref={titleRef}>
              <h1>About Softec</h1>
              <div className="tekup-breadcrumb-menu">
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>About Us</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mt-5">
            <div
              ref={imageRef}
              className="tekup-about-hero-image position-relative rounded-4 overflow-hidden mx-auto"
              style={{ maxWidth: "1000px" }}
            >
              <img
                src="/images/about/about-hero.jpg"
                alt="Team working together"
                className="w-100 h-auto"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle text-center"
                style={{
                  backgroundColor: "rgba(108, 43, 255, 0.7)",
                  padding: "2rem",
                  borderRadius: "1rem",
                }}
              >
                <h2 className="display-4 fw-bold text-white">
                  About
                  <br />
                  Softec
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHero;