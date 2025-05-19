"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const ChoseUs = ({ isInView = false }) => {
  // Grid container animation variants with staggered effect
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
        when: "beforeChildren",
      },
    },
  }

  const chooseItems = [
    {
      id: 1,
      icon: "/images/iconbox/icon11.png",
      title: "Expert Team Members",
      description: "We are architects technological advancement, and partners",
    },
    {
      id: 2,
      icon: "/images/iconbox/icon12.png",
      title: "Fastest Customer Service",
      description: "We are architects technological advancement, and partners",
    },
    {
      id: 3,
      icon: "/images/iconbox/icon13.png",
      title: "Competitive Pricing Plan",
      description: "We are architects technological advancement, and partners",
    },
  ]

  return (
    <motion.div
      className="row"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={gridVariants}
    >
      {chooseItems.map((item, index) => (
        <ChooseCard 
          key={item.id} 
          item={item} 
          className="col-xl-4 col-md-6" 
          index={index} 
          isInView={isInView} 
        />
      ))}
    </motion.div>
  )
}

const ChooseCard = ({ item, className, index, isInView }) => {
  const [hovered, setHovered] = useState(false)

  // Calculate row and column for grid-based animations
  const row = Math.floor(index / 3)
  const col = index % 3

  // Create a wave-like staggered animation based on position
  const delay = row * 0.1 + col * 0.1

  // Card animation variants with 3D effects
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: 10,
      rotateY: -10,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 80,
        mass: 1,
        delay: delay,
        duration: 0.8,
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.4,
      },
    },
  }

  // Icon animation variants
  const iconVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -45,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        delay: delay + 0.3,
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  }

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: delay + 0.4,
        duration: 0.5,
      },
    },
  }

  // Description animation variants
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + 0.5,
        duration: 0.5,
      },
    },
  }

  // Enhanced hover animation for the card
  const hoverVariants = {
    rest: {
      scale: 1,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.05)",
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      y: -10,
      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.12)",
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  return (
    <motion.div className={className} variants={cardVariants} style={{ marginBottom: "30px", perspective: "1000px" }}>
      <motion.div
        className="tekup-iconbox-wrap border-all3 border-all"
        initial="rest"
        animate={hovered ? "hover" : "rest"}
        variants={hoverVariants}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          minHeight: "250px", 
          transformStyle: "preserve-3d",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Animated background gradient on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.05 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, #0119FF 0%, #0066FF 100%)",
            zIndex: 0,
          }}
        />

        <motion.div
          className="tekup-iconbox-icon3"
          variants={iconVariants}
          animate={hovered ? "hover" : "visible"}
          style={{ position: "relative", zIndex: 1 }}
        >
          <img src={item.icon || "/placeholder.svg"} alt={item.title} />
        </motion.div>

        <div
          className="tekup-iconbox-data3"
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "space-between",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div>
            <motion.div variants={textVariants}>
              <Link href="/single-service">
                <h5>{item.title}</h5>
              </Link>
            </motion.div>

            <motion.p variants={descriptionVariants}>
              {item.description}
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ 
              delay: delay + 0.6, 
              duration: 0.5, 
              type: "spring",
              stiffness: 200 
            }}
            whileHover={{ 
              scale: 1.05, 
              x: 5,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              }
            }}
          >
            <Link
              href="/single-service"
              className="tekup-iconbox-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginTop: "10px",
                fontWeight: "500",
              }}
            >
              Learn More
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginLeft: "8px" }}
                animate={{ x: hovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </motion.svg>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ChoseUs



// const ChoseUs = () => {
//     return (

//     <div className="container">
     
//       <div className="row">
//         <div className="col-xl-4 col-md-6">
//           <div className="tekup-iconbox-wrap border-all3 border-all">
//             <div className="tekup-iconbox-icon3">
//               <img src="/images/iconbox/icon11.png" alt=""/>
//             </div>
//             <div className="tekup-iconbox-data3">
//               <a href="single-service">
//                 <h5>Expert Team Members</h5>
//               </a>
//               <p>We are architects technological advancement, and partners</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-4 col-md-6">
//           <div className="tekup-iconbox-wrap border-all3 border-all">
//             <div className="tekup-iconbox-icon3">
//               <img src="/images/iconbox/icon12.png" alt=""/>
//             </div>
//             <div className="tekup-iconbox-data3">
//               <a href="single-service">
//                 <h5>Fastest Customer Service</h5>
//               </a>
//               <p>We are architects technological advancement, and partners</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-4 col-md-6">
//           <div className="tekup-iconbox-wrap border-all3 border-all">
//             <div className="tekup-iconbox-icon3">
//               <img src="/images/iconbox/icon13.png" alt=""/>
//             </div>
//             <div className="tekup-iconbox-data3">
//               <a href="single-service">
//                 <h5>Competitive Pricing Plan</h5>
//               </a>
//               <p>We are architects technological advancement, and partners</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>

//     );
// };

// export default ChoseUs;