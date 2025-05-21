"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styled from "styled-components"

// Styled Components
const OuterSection = styled.section`
  padding: 80px 20px 160px; /* Increased bottom padding to create space for overlap */
  background: transparent;
  position: relative;
  z-index: 8; /* Higher z-index to appear above footer */
  margin-bottom: -250px; /* Negative margin to create overlap effect */
`

const CTASection = styled.div`
  position: relative;
  padding: 80px 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #2e1366 0%, #4a1d8c 50%, #5a1eb0 100%);
  border-radius: 24px;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-size: cover;
    opacity: 0.4;
    z-index: 1;
    border-radius: 24px;
  }
  
  &:before {
    background: radial-gradient(circle at 30% 70%, rgba(211, 87, 251, 0.4) 0%, transparent 70%);
  }
  
  &:after {
    background: radial-gradient(circle at 70% 30%, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
  }
`

const CTAContainer = styled.div`
  position: relative;
  z-index: 2;
`

const CTAContent = styled.div`
  text-align: center;
  color: #fff;
`

const CTATitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const CTADescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  font-weight: 600;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  i {
    margin-left: 0.5rem;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
  }
  
  &:hover i {
    transform: translateX(3px) translateY(-3px);
  }
`

// Background Shape Component
const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
  z-index: 1;
  
  &.shape1 {
    width: 500px;
    height: 500px;
    bottom: -250px;
    left: -100px;
  }
  
  &.shape2 {
    width: 600px;
    height: 600px;
    top: -200px;
    right: -100px;
  }
  
  &.shape3 {
    width: 300px;
    height: 300px;
    bottom: 10%;
    right: 10%;
  }
`

export default function CallToAction() {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const btnRef = useRef(null)
  const shapesRef = useRef([])
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    // Create a timeline for smoother animation sequence
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    })
    
    // Animate title first
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
    )
    
    // Then animate description
    tl.fromTo(
      descRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.4" // Start slightly before the previous animation finishes
    )
    
    // Finally animate button with a small bounce
    tl.fromTo(
      btnRef.current,
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.7,
        ease: "back.out(1.5)" 
      },
      "-=0.3"
    )
    
    // Animate background shapes
    shapesRef.current.forEach((shape, index) => {
      gsap.fromTo(
        shape,
        { 
          opacity: 0,
          scale: 0.8 
        },
        { 
          opacity: 1,
          scale: 1,
          duration: 1.5,
          delay: 0.2 * index,
          ease: "power1.inOut"
        }
      )
      
      // Add subtle floating animation
      gsap.to(shape, {
        y: `${(index % 2 === 0) ? '+=20' : '-=20'}`,
        x: `${(index % 2 === 0) ? '-=10' : '+=10'}`,
        duration: 3 + index,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      })
    })
    
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])
  
  // Function to add shapes to the ref array
  const addToShapesRef = (el) => {
    if (el && !shapesRef.current.includes(el)) {
      shapesRef.current.push(el)
    }
  }

  return (
    <OuterSection>
      <CTASection ref={sectionRef}>
        {/* Background Shapes */}
        <BackgroundShape className="shape1" ref={addToShapesRef} />
        <BackgroundShape className="shape2" ref={addToShapesRef} />
        <BackgroundShape className="shape3" ref={addToShapesRef} />
        
        <CTAContainer className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <CTAContent ref={contentRef}>
                <CTATitle ref={titleRef}>Try our service now!</CTATitle>
                <CTADescription ref={descRef}>
                  Everything you need to accept card payments and grow your business anywhere on the planet.
                </CTADescription>
                <div ref={btnRef}>
                  <CTAButton href="#">
                    Get Started Now
                  </CTAButton>
                </div>
              </CTAContent>
            </div>
          </div>
        </CTAContainer>
      </CTASection>
    </OuterSection>
  )
}


// "use client"
// import { useEffect, useRef } from "react"
// import Link from "next/link"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import styled from "styled-components"

// // Styled Components
// const CTASection = styled.section`
//   position: relative;
//   padding: 100px 0;
//   overflow: hidden;
//   background: linear-gradient(135deg, #2e1366 0%, #4a1d8c 50%, #5a1eb0 100%);
  
//   &:before, &:after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     background-size: cover;
//     opacity: 0.4;
//     z-index: 1;
//   }
  
//   &:before {
//     background: radial-gradient(circle at 30% 70%, rgba(211, 87, 251, 0.4) 0%, transparent 70%);
//   }
  
//   &:after {
//     background: radial-gradient(circle at 70% 30%, rgba(138, 43, 226, 0.4) 0%, transparent 70%);
//   }
// `

// const CTAContainer = styled.div`
//   position: relative;
//   z-index: 2;
// `

// const CTAContent = styled.div`
//   text-align: center;
//   color: #fff;
// `

// const CTATitle = styled.h2`
//   font-size: 3.5rem;
//   font-weight: 700;
//   margin-bottom: 1.5rem;
//   color: #fff;
  
//   @media (max-width: 768px) {
//     font-size: 2.5rem;
//   }
// `

// const CTADescription = styled.p`
//   font-size: 1.25rem;
//   line-height: 1.6;
//   margin-bottom: 2.5rem;
//   max-width: 800px;
//   margin-left: auto;
//   margin-right: auto;
  
//   @media (max-width: 768px) {
//     font-size: 1.1rem;
//   }
// `

// const CTAButton = styled(Link)`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #fff;
//   color: #333;
//   font-weight: 600;
//   padding: 0.75rem 2rem;
//   font-size: 1.1rem;
//   border-radius: 50px;
//   text-decoration: none;
//   transition: all 0.3s ease;
//   box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
//   }
  
//   i {
//     margin-left: 0.5rem;
//     font-size: 1.2rem;
//     transition: transform 0.3s ease;
//   }
  
//   &:hover i {
//     transform: translateX(3px) translateY(-3px);
//   }
// `

// // Background Shape Component
// const BackgroundShape = styled.div`
//   position: absolute;
//   border-radius: 50%;
//   background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%);
//   z-index: 1;
  
//   &.shape1 {
//     width: 500px;
//     height: 500px;
//     bottom: -250px;
//     left: -100px;
//   }
  
//   &.shape2 {
//     width: 600px;
//     height: 600px;
//     top: -200px;
//     right: -100px;
//   }
  
//   &.shape3 {
//     width: 300px;
//     height: 300px;
//     bottom: 10%;
//     right: 10%;
//   }
// `

// export default function CallToAction() {
//   const sectionRef = useRef(null)
//   const contentRef = useRef(null)
//   const titleRef = useRef(null)
//   const descRef = useRef(null)
//   const btnRef = useRef(null)
//   const shapesRef = useRef([])
  
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger)
    
//     // Create a timeline for smoother animation sequence
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%",
//       }
//     })
    
//     // Animate title first
//     tl.fromTo(
//       titleRef.current,
//       { opacity: 0, y: 30 },
//       { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }
//     )
    
//     // Then animate description
//     tl.fromTo(
//       descRef.current,
//       { opacity: 0, y: 20 },
//       { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
//       "-=0.4" // Start slightly before the previous animation finishes
//     )
    
//     // Finally animate button with a small bounce
//     tl.fromTo(
//       btnRef.current,
//       { opacity: 0, y: 20 },
//       { 
//         opacity: 1, 
//         y: 0, 
//         duration: 0.7,
//         ease: "back.out(1.5)" 
//       },
//       "-=0.3"
//     )
    
//     // Animate background shapes
//     shapesRef.current.forEach((shape, index) => {
//       gsap.fromTo(
//         shape,
//         { 
//           opacity: 0,
//           scale: 0.8 
//         },
//         { 
//           opacity: 1,
//           scale: 1,
//           duration: 1.5,
//           delay: 0.2 * index,
//           ease: "power1.inOut"
//         }
//       )
      
//       // Add subtle floating animation
//       gsap.to(shape, {
//         y: `${(index % 2 === 0) ? '+=20' : '-=20'}`,
//         x: `${(index % 2 === 0) ? '-=10' : '+=10'}`,
//         duration: 3 + index,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut"
//       })
//     })
    
//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill())
//     }
//   }, [])
  
//   // Function to add shapes to the ref array
//   const addToShapesRef = (el) => {
//     if (el && !shapesRef.current.includes(el)) {
//       shapesRef.current.push(el)
//     }
//   }

//   return (
//     <CTASection ref={sectionRef}>
//       {/* Background Shapes */}
//       <BackgroundShape className="shape1" ref={addToShapesRef} />
//       <BackgroundShape className="shape2" ref={addToShapesRef} />
//       <BackgroundShape className="shape3" ref={addToShapesRef} />
      
//       <CTAContainer className="container">
//         <div className="row justify-content-center">
//           <div className="col-lg-10 text-center">
//             <CTAContent ref={contentRef}>
//               <CTATitle ref={titleRef}>Try our service now!</CTATitle>
//               <CTADescription ref={descRef}>
//                 Everything you need to accept card payments and grow your business anywhere on the planet.
//               </CTADescription>
//               <div ref={btnRef}>
//                 <CTAButton href="#">
//                   Get Started Now
//                 </CTAButton>
//               </div>
//             </CTAContent>
//           </div>
//         </div>
//       </CTAContainer>
//     </CTASection>
//   )
// }