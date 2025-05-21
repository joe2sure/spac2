"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function CallToAction() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="tekup-cta-section tekup-section-padding"
      style={{ backgroundImage: "url('/images/cta/cta-bg.png')" }}
    >
      <div className="container">
        <div className="tekup-cta-wrap">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center" ref={contentRef}>
              <div className="tekup-cta-content">
                <h2 className="title">Try our service now!</h2>
                <p>
                  Everything you need to build modern UI and grow your business in one simple and affordable solution.
                </p>
                <div className="tekup-cta-btn">
                  <Link href="#" className="tekup-default-btn">
                    Get Started Now <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
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

// const CallToAction = () => {
//   const sectionRef = useRef(null)
//   const contentRef = useRef(null)

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)

//     gsap.fromTo(
//       contentRef.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   return (
//     <section ref={sectionRef} className="tekup-cta-section tekup-section-padding">
//       <div className="container">
//         <div className="tekup-cta-wrap">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 text-center" ref={contentRef}>
//               <div className="tekup-cta-content">
//                 <h2 className="title">Try our service now!</h2>
//                 <p>
//                   Everything you need to build modern UI and grow your business in one simple and affordable solution.
//                 </p>
//                 <div className="tekup-cta-btn">
//                   <Link href="#" className="tekup-default-btn">
//                     Get Started Now <i className="ri-arrow-right-up-line"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CallToAction;