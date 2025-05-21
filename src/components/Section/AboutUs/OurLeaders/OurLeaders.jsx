"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function OurLeaders() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const teamRef = useRef(null)

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
      ".team-member",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const team = [
    { name: "Alexa Montero", role: "CEO", image: "/images/team/team-1.png" },
    { name: "Ryan Cabrera", role: "CTO", image: "/images/team/team-2.png" },
    { name: "Emilia Carrett", role: "Designer", image: "/images/team/team-3.png" },
    { name: "Carrol Arnold", role: "Developer", image: "/images/team/team-4.png" },
  ]

  return (
    <section ref={sectionRef} className="tekup-team-section tekup-section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="tekup-section-title" ref={titleRef}>
              <span className="sub-title">OUR TEAM</span>
              <h2 className="title">Our Leaders</h2>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="tekup-team-btn">
              <Link href="#" className="tekup-default-btn">
                View All <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="row" ref={teamRef}>
          {team.map((member, index) => (
            <div key={index} className="col-lg-3 col-md-6 team-member">
              <div className="tekup-team-item">
                <div className="tekup-team-thumb">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="tekup-team-content">
                  <h3 className="title">{member.name}</h3>
                  <span>{member.role}</span>
                  <div className="tekup-team-social">
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="ri-facebook-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="ri-twitter-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="ri-linkedin-fill"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="ri-instagram-fill"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
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

// const OurLeaders = () => {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const teamRef = useRef(null)

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

//     gsap.fromTo(
//       ".team-member",
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: teamRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const team = [
//     { name: "Alexa Montero", role: "CEO", image: "/images/team/team1.png" },
//     { name: "Ryan Cabrera", role: "CTO", image: "/images/team/team2.png" },
//     { name: "Emilia Carrett", role: "Designer", image: "/images/team/team3.png" },
//     { name: "Carrol Arnold", role: "Developer", image: "/images/team/team4.png" },
//   ]

//   return (
//     <section ref={sectionRef} className="tekup-team-section tekup-section-padding">
//       <div className="container">
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <div className="tekup-section-title" ref={titleRef}>
//               <span className="sub-title">OUR TEAM</span>
//               <h2 className="title">Our Leaders</h2>
//             </div>
//           </div>
//           <div className="col-lg-6 text-end">
//             <div className="tekup-team-btn">
//               <Link href="#" className="tekup-default-btn">
//                 View All <i className="ri-arrow-right-up-line"></i>
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="row" ref={teamRef}>
//           {team.map((member, index) => (
//             <div key={index} className="col-lg-3 col-md-6 team-member">
//               <div className="tekup-team-item">
//                 <div className="tekup-team-thumb">
//                   <img src={member.image || "/placeholder.svg"} alt={member.name} />
//                 </div>
//                 <div className="tekup-team-content">
//                   <h3 className="title">{member.name}</h3>
//                   <span>{member.role}</span>
//                   <div className="tekup-team-social">
//                     <ul>
//                       <li>
//                         <Link href="#">
//                           <i className="ri-facebook-fill"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="#">
//                           <i className="ri-twitter-fill"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="#">
//                           <i className="ri-linkedin-fill"></i>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link href="#">
//                           <i className="ri-instagram-fill"></i>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default OurLeaders