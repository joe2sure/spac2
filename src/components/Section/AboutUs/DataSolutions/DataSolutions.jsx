"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function DataSolutions() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

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

    tl.fromTo(imageRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 })

    tl.fromTo(contentRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 }, "-=0.8")

    gsap.fromTo(
      ".feature-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".feature-list",
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const features = ["Real-time data analytics", "Free Low-level API, hundreds of endpoints", "See past analytics"]

  return (
    <section ref={sectionRef} className="tekup-service-section tekup-section-padding bg-light1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" ref={imageRef}>
            <div className="tekup-service-thumb">
              {/* <img src="/images/about/data-solutions.png" alt="Data analytics dashboard" className="img-fluid" /> */}
              <img src="/images/blog/blog1.png" alt="Data analytics dashboard" className="img-fluid" />
              <div className="tekup-service-thumb-shape">
                {/* <img src="/images/about/person-analytics.png" alt="Person with analytics" className="img-fluid" /> */}
                <img src="/images/blog/recent-post1.png" alt="Person with analytics" className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="col-lg-6" ref={contentRef}>
            <div className="tekup-service-content">
              <div className="tekup-section-title">
                <span className="sub-title">DATA SOLUTIONS</span>
                <h2 className="title">
                  We Offer Real Time
                  <br />
                  Data Solutions
                </h2>
              </div>
              <p>
                Powerful and easy to use UI coupled with our proprietary data processing engine makes Softec the best
                choice for your business.
              </p>
              <div className="tekup-service-list feature-list">
                <ul>
                  {features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <i className="ri-check-line"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="tekup-service-btn">
                <Link href="#" className="tekup-default-btn">
                  Learn More <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



// "use client"

// import { useEffect, useRef } from "react"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// const DataSolutions = () => {
//   const sectionRef = useRef(null)
//   const imageRef = useRef(null)
//   const contentRef = useRef(null)

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 70%",
//         end: "bottom 20%",
//         toggleActions: "play none none none",
//       },
//     })

//     tl.fromTo(imageRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1 })

//     tl.fromTo(contentRef.current, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 1 }, "-=0.8")

//     gsap.fromTo(
//       ".feature-item",
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: ".feature-list",
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const features = ["Real-time data analytics", "Free Low-level API, hundreds of endpoints", "See past analytics"]

//   return (
//     <section ref={sectionRef} className="tekup-service-section tekup-section-padding bg-light1">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6" ref={imageRef}>
//             <div className="tekup-service-thumb">
//               {/* <img src="/images/about/data-solutions.jpg" alt="Data analytics dashboard" className="img-fluid" /> */}
//                <img src="/images/blog/blog2.png" alt="Data analytics dashboard" className="img-fluid" />
//               <div className="tekup-service-thumb-shape">
//                 {/* <img src="/images/about/person-analytics.jpg" alt="Person with analytics" className="img-fluid" /> */}
//                 <img src="/images/blog/blog2.png" alt="Person with analytics" className="img-fluid" />
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6" ref={contentRef}>
//             <div className="tekup-service-content">
//               <div className="tekup-section-title">
//                 <span className="sub-title">DATA SOLUTIONS</span>
//                 <h2 className="title">
//                   We Offer Real Time
//                   <br />
//                   Data Solutions
//                 </h2>
//               </div>
//               <p>
//                 Powerful and easy to use UI coupled with our proprietary data processing engine makes Softec the best
//                 choice for your business.
//               </p>
//               <div className="tekup-service-list feature-list">
//                 <ul>
//                   {features.map((feature, index) => (
//                     <li key={index} className="feature-item">
//                       <i className="ri-check-line"></i>
//                       <span>{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="tekup-service-btn">
//                 <Link href="#" className="tekup-default-btn">
//                   Learn More <i className="ri-arrow-right-up-line"></i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default DataSolutions;