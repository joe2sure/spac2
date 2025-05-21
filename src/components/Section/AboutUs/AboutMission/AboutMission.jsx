"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function AboutMission() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const textRef = useRef(null)
  const statsRef = useRef(null)
  const videoRef = useRef(null)

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

    tl.fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")

    gsap.fromTo(
      ".stat-item",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.2,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
        },
      },
    )

    gsap.fromTo(
      videoRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const stats = [
    { number: "200+", label: "Projects" },
    { number: "30", label: "Team Members" },
    { number: "190+", label: "Happy Clients" },
  ]

  return (
    <section ref={sectionRef} className="tekup-about-section tekup-section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="tekup-about-content">
              <div className="tekup-section-title" ref={titleRef}>
                <span className="sub-title">ABOUT OUR COMPANY</span>
                <h2 className="title">
                  Softuch is Made
                  <br />
                  For the Creator.
                </h2>
              </div>
              <div ref={textRef}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam hendrerit ac. Sed vulputate
                  mi sit amet odio scelerisque, ac vehicula ipsum finibus. Etiam euismod est quis tincidunt maximus.
                  Donec pharetra magna ut mauris pellentesque, a pharetra ex tincidunt.
                </p>
                <p>
                  Praesent porta magna vitae neque tincidunt cursus. Sed nulla quam, tincidunt ac maximus et,
                  consectetur quis ante. Donec pharetra magna ut mauris pellentesque, a pharetra ex tincidunt.
                </p>
                <p>Our clean and simple UI/UX and transparent SaaS model will give you complete peace of mind.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tekup-about-thumb" ref={videoRef}>
              <div className="tekup-about-thumb-wrap">
                <img src="/images/p1/p_1.png" alt="About Thumb" />
                <div className="tekup-popup-video">
                  <Link href="#" className="popup-video">
                    <i className="ri-play-fill"></i>
                  </Link>
                  <div className="video-text">
                    <span>Watch Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row tekup-section-padding-top-70" ref={statsRef}>
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-4 col-md-6 stat-item">
              <div className="tekup-funfact-item">
                <h2 className="counter">{stat.number}</h2>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
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

// const AboutMission = () => {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const textRef = useRef(null)
//   const statsRef = useRef(null)
//   const videoRef = useRef(null)

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

//     tl.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 })

//     tl.fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")

//     gsap.fromTo(
//       ".stat-item",
//       { opacity: 0, y: 20 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.5,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: statsRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     gsap.fromTo(
//       videoRef.current,
//       { opacity: 0, scale: 0.9 },
//       {
//         opacity: 1,
//         scale: 1,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: videoRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const stats = [
//     { number: "11,000+", label: "Projects" },
//     { number: "46", label: "Team Members" },
//     { number: "150+", label: "Happy Clients" },
//   ]

//   return (
//     <section ref={sectionRef} className="tekup-about-section tekup-section-padding">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="tekup-about-content">
//               <div className="tekup-section-title" ref={titleRef}>
//                 <span className="sub-title">ABOUT OUR COMPANY</span>
//                 <h2 className="title">
//                   Softuch is Made
//                   <br />
//                   For the Creator.
//                 </h2>
//               </div>
//               <div ref={textRef}>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam hendrerit ac. Sed vulputate
//                   mi sit amet odio scelerisque, ac vehicula ipsum finibus. Etiam euismod est quis tincidunt maximus.
//                   Donec pharetra magna ut mauris pellentesque, a pharetra ex tincidunt.
//                 </p>
//                 <p>
//                   Praesent porta magna vitae neque tincidunt cursus. Sed nulla quam, tincidunt ac maximus et,
//                   consectetur quis ante. Donec pharetra magna ut mauris pellentesque, a pharetra ex tincidunt.
//                 </p>
//                 <p>Our clean and simple UI/UX and transparent SaaS model will give you complete peace of mind.</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-6">
//             <div className="tekup-about-thumb" ref={videoRef}>
//               <div className="tekup-about-thumb-wrap">
//                 {/* <img src="/images/about/about-thumb.jpg" alt="About Thumb" /> */}
//                 <img src="/images/about/aboutus-img1.jpg" alt="About Thumb" />
//                 <div className="tekup-popup-video">
//                   <Link href="#" className="popup-video">
//                     <i className="ri-play-fill"></i>
//                   </Link>
//                   <div className="video-text">
//                     <span>Watch Demo</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row tekup-section-padding-top-70" ref={statsRef}>
//           {stats.map((stat, index) => (
//             <div key={index} className="col-lg-4 col-md-6 stat-item">
//               <div className="tekup-funfact-item">
//                 <h2 className="counter">{stat.number}</h2>
//                 <p>{stat.label}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default AboutMission;