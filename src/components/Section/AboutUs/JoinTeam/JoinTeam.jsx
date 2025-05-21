"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function JoinTeam() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const jobsRef = useRef(null)

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
      ".job-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: jobsRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const jobs = [
    {
      title: "Product Designer",
      location: "New York",
      type: "Full-time",
      salary: "$80k-$100k",
    },
    {
      title: "Software Engineer",
      location: "London, UK",
      type: "Full-time",
      salary: "$90k-$110k",
    },
    {
      title: "Senior Frontend Developer",
      location: "Remote, US",
      type: "Full-time",
      salary: "$100k-$130k",
    },
    {
      title: "Finance Executive",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$70k-$90k",
    },
    {
      title: "Junior Copywriter",
      location: "London, UK",
      type: "Full-time",
      salary: "$50k-$65k",
    },
  ]

  return (
    <section ref={sectionRef} className="tekup-job-section tekup-section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center" ref={titleRef}>
            <div className="tekup-section-title">
              <h2 className="title">
                Join our Growing Team
                <br />
                of Doers.
              </h2>
              <p>We're always looking for talented individuals to join our team</p>
            </div>
          </div>
        </div>
        <div className="row" ref={jobsRef}>
          <div className="col-lg-12">
            <div className="tekup-job-wrap">
              {jobs.map((job, index) => (
                <div key={index} className="job-item tekup-job-item">
                  <div className="tekup-job-content">
                    <h3 className="title">{job.title}</h3>
                    <div className="tekup-job-meta">
                      <span>
                        <i className="ri-map-pin-line"></i> {job.location}
                      </span>
                      <span>
                        <i className="ri-time-line"></i> {job.type}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line"></i> {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="tekup-job-btn">
                    <Link href="#" className="tekup-default-btn">
                      Apply <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              ))}
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

// const JoinTeam = () => {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const jobsRef = useRef(null)

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
//       ".job-item",
//       { opacity: 0, y: 30 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: jobsRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const jobs = [
//     {
//       title: "Product Designer",
//       location: "New York",
//       type: "Full-time",
//       salary: "$80k-$100k",
//     },
//     {
//       title: "Software Engineer",
//       location: "London, UK",
//       type: "Full-time",
//       salary: "$90k-$110k",
//     },
//     {
//       title: "Senior Frontend Developer",
//       location: "Remote, US",
//       type: "Full-time",
//       salary: "$100k-$130k",
//     },
//     {
//       title: "Finance Executive",
//       location: "Boston, MA",
//       type: "Full-time",
//       salary: "$70k-$90k",
//     },
//     {
//       title: "Junior Copywriter",
//       location: "London, UK",
//       type: "Full-time",
//       salary: "$50k-$65k",
//     },
//   ]

//   return (
//     <section ref={sectionRef} className="tekup-job-section tekup-section-padding">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8 text-center" ref={titleRef}>
//             <div className="tekup-section-title">
//               <h2 className="title">
//                 Join our Growing Team
//                 <br />
//                 of Doers.
//               </h2>
//               <p>We're always looking for talented individuals to join our team</p>
//             </div>
//           </div>
//         </div>
//         <div className="row" ref={jobsRef}>
//           <div className="col-lg-12">
//             <div className="tekup-job-wrap">
//               {jobs.map((job, index) => (
//                 <div key={index} className="job-item tekup-job-item">
//                   <div className="tekup-job-content">
//                     <h3 className="title">{job.title}</h3>
//                     <div className="tekup-job-meta">
//                       <span>
//                         <i className="ri-map-pin-line"></i> {job.location}
//                       </span>
//                       <span>
//                         <i className="ri-time-line"></i> {job.type}
//                       </span>
//                       <span>
//                         <i className="ri-money-dollar-circle-line"></i> {job.salary}
//                       </span>
//                     </div>
//                   </div>
//                   <div className="tekup-job-btn">
//                     <Link href="#" className="tekup-default-btn">
//                       Apply <i className="ri-arrow-right-up-line"></i>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default JoinTeam;