"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import ChoseUs from "./ChooseUs";

const ChooseSection = () => {
  const controls = useAnimation()
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, {
    once: false,
    amount: 0.2,
    margin: "0px 0px -200px 0px", // Negative margin to trigger earlier
  })

  const [hasAnimated, setHasAnimated] = useState(false)

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      setHasAnimated(true)
    } else if (!hasAnimated) {
      controls.start("hidden")
    }
  }, [isInView, controls, hasAnimated])

  // Animation variants for the title
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth animation
        when: "beforeChildren",
      },
    },
  }

  // Animation for the background
  const backgroundVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div
      className="section tekup-section-padding2"
      ref={sectionRef}
      initial="hidden"
      animate={controls}
      variants={backgroundVariants}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background animation elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #0119FF, #0066FF)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.05 } : { opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "linear-gradient(45deg, #0119FF, #0066FF)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div className="tekup-section-title center" variants={titleVariants}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2,
            }}
          >
            Why you should choose us?
          </motion.h2>

          <motion.div
            className="title-separator"
            initial={{ width: 0, opacity: 0 }}
            animate={isInView ? { width: "80px", opacity: 1 } : { width: 0, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              height: "4px",
              background: "linear-gradient(90deg, transparent, #0119FF, transparent)",
              margin: "20px auto",
              borderRadius: "2px",
            }}
          />
        </motion.div>

        <ChoseUs isInView={isInView} />
      </div>
    </motion.div>
  )
}

export default ChooseSection



// "use client"

// import ChoseUs from "./ChooseUs";

// const ChooseSection = () => {
//     return (
//         <div className="section tekup-section-padding2">
//             <div className="container">
//                 <div className="tekup-section-title center">
//                     <h2>Why you should choose us?</h2>
//                 </div>
//                 <ChoseUs/>
//             </div>
//         </div>
//     );
// };

// export default ChooseSection;