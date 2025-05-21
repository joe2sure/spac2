"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export default function Journey() {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const timelineRef = useRef(null)

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
      ".timeline-item",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
        },
      },
    )

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  const timelineItems = [
    {
      year: "2018",
      title: "Vision",
      subtitle: "Idea Inception Way",
      description: "We started with a vision for making the best software tools for businesses.",
    },
    {
      year: "2019",
      title: "Official Beta Launch",
      subtitle: "First Launch",
      description: "We launched our beta product and started getting our first customers.",
    },
    {
      year: "2020",
      title: "Rolling Up Sleeves",
      subtitle: "Growth",
      description: "We expanded our team and product offerings to serve more customers.",
    },
    {
      year: "2021",
      title: "Design in NYC",
      subtitle: "Expansion",
      description: "We opened our first office in New York City and expanded our design team.",
    },
    {
      year: "2022",
      title: "Funding Round",
      subtitle: "Investment",
      description: "We secured our Series A funding to accelerate our growth and development.",
    },
  ]

  return (
    <section ref={sectionRef} className="tekup-timeline-section tekup-section-padding bg-light1">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="tekup-section-title" ref={titleRef}>
              <span className="sub-title">OUR STORY</span>
              <h2 className="title">Journey Was Started</h2>
            </div>
          </div>
        </div>
        <div className="row" ref={timelineRef}>
          <div className="col-lg-12">
            <div className="tekup-timeline-wrap">
              {timelineItems.map((item, index) => (
                <div key={index} className="timeline-item tekup-timeline-item">
                  <div className="tekup-timeline-dot">
                    <span>{item.year.substring(2)}</span>
                  </div>
                  <div className="tekup-timeline-content">
                    <span className="year">{item.year}</span>
                    <h3 className="title">{item.title}</h3>
                    <span className="sub-title">{item.subtitle}</span>
                    <p>{item.description}</p>
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
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// const Journey = () => {
//   const sectionRef = useRef(null)
//   const titleRef = useRef(null)
//   const timelineRef = useRef(null)

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
//       ".timeline-item",
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.8,
//         stagger: 0.3,
//         scrollTrigger: {
//           trigger: timelineRef.current,
//           start: "top 80%",
//         },
//       },
//     )

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])

//   const timelineItems = [
//     {
//       year: "2018",
//       title: "Vision",
//       subtitle: "Idea Inception Way",
//       description: "We started with a vision for making the best software tools for businesses.",
//     },
//     {
//       year: "2019",
//       title: "Official Beta Launch",
//       subtitle: "First Launch",
//       description: "We launched our beta product and started getting our first customers.",
//     },
//     {
//       year: "2020",
//       title: "Rolling Up Sleeves",
//       subtitle: "Growth",
//       description: "We expanded our team and product offerings to serve more customers.",
//     },
//     {
//       year: "2021",
//       title: "Design in NYC",
//       subtitle: "Expansion",
//       description: "We opened our first office in New York City and expanded our design team.",
//     },
//     {
//       year: "2022",
//       title: "Funding Round",
//       subtitle: "Investment",
//       description: "We secured our Series A funding to accelerate our growth and development.",
//     },
//   ]

//   return (
//     <section ref={sectionRef} className="tekup-timeline-section tekup-section-padding bg-light1">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-8 text-center">
//             <div className="tekup-section-title" ref={titleRef}>
//               <span className="sub-title">OUR STORY</span>
//               <h2 className="title">Journey Was Started</h2>
//             </div>
//           </div>
//         </div>
//         <div className="row" ref={timelineRef}>
//           <div className="col-lg-12">
//             <div className="tekup-timeline-wrap">
//               {timelineItems.map((item, index) => (
//                 <div key={index} className="timeline-item tekup-timeline-item">
//                   <div className="tekup-timeline-dot">
//                     <span>{item.year.substring(2)}</span>
//                   </div>
//                   <div className="tekup-timeline-content">
//                     <span className="year">{item.year}</span>
//                     <h3 className="title">{item.title}</h3>
//                     <span className="sub-title">{item.subtitle}</span>
//                     <p>{item.description}</p>
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

// export default Journey;