"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import ServiceCard from "~/components/Ui/Cards/ServiceCard";

// Updated service data to match tech company offerings
const services = [
  {
    id: 1,    
    // icon: "/images/icon/database.svg",
    icon: "/images/v2/icon3.png",
    title: "Database Administration",
    description:
      "Expert management of SQL, NoSQL, and cloud databases with optimization, migration, and 24/7 monitoring services for seamless data operations.",
  },
  {
    id: 2,
    // icon: "/images/icon/azure.svg",
    icon: "/images/v2/icon5.png",
    title: "Azure System Administration",
    description:
      "Comprehensive Azure cloud management including infrastructure setup, security implementation, and optimization for maximum performance and cost efficiency.",
  },
  {
    id: 3,
    // icon: "/images/icon/ml.svg",
    icon: "/images/v2/icon7.png",
    title: "Machine Learning Engineering",
    description:
      "End-to-end ML solutions from model development to deployment, creating custom algorithms that transform your data into actionable business intelligence.",
  },
  {
    id: 4,
    // icon: "/images/icon/data-analysis.svg",
    icon: "/images/v2/icon4.png",
    title: "Data Analysis",
    description:
      "Transform raw data into strategic insights with our advanced analytics services, helping you make data-driven decisions with confidence.",
  },
  {
    id: 5,
    // icon: "/images/icon/project.svg",
    icon: "/images/v2/icon6.png",
    title: "Project Management",
    description:
      "Agile and traditional project management methodologies to deliver your tech initiatives on time and within budget with transparent communication.",
  },
  {
    id: 6,
    // icon: "/images/icon/ai.svg",
    icon: "/images/v2/icon3.png",
    title: "AI Integrated Solutions",
    description:
      "Custom AI solutions that integrate seamlessly with your existing systems, automating processes and enhancing decision-making capabilities.",
  },
  {
    id: 7,
    // icon: "/images/icon/security.svg",
    icon: "/images/v2/icon8.png",
    title: "Cybersecurity",
    description:
      "Comprehensive security services including threat detection, vulnerability assessment, and implementation of robust security protocols to protect your digital assets.",
  },
  {
    id: 8,
    // icon: "/images/icon/cloud.svg",
    icon: "/images/v2/icon5.png",
    title: "Cloud Infrastructure",
    description:
      "Scalable, reliable cloud infrastructure design and implementation that grows with your business while maintaining optimal performance.",
  },
  {
    id: 9,
    // icon: "/images/icon/devops.svg",
    icon: "/images/v2/icon4.png",
    title: "DevOps Solutions",
    description:
      "Streamline your development pipeline with our DevOps services, enabling faster deployment, better collaboration, and continuous improvement.",
  },
]

const ServiceSection = () => {
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

  // Animation variants for the grid container
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
            We deal with the aspects of professional IT services
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

        <motion.div className="row" variants={gridVariants}>
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              className="col-md-6 col-xl-4"
              index={index}
              isInView={isInView}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ServiceSection




// "use client"

// import ServiceCard from "~/components/Ui/Cards/ServiceCard";
// import services from '~/db/serviceData.json'
// const ServiceSection = () => {
//     return (
//         <div className="section tekup-section-padding2">
//             <div className="container">
//                 <div className="tekup-section-title center">
//                     <h2>We deal with the aspects of professional IT services</h2>
//                 </div>
//                 <div className="row">
//                     {services.map(service => (
//                         <ServiceCard key={service.id} service={service} className="col-md-6 col-xl-4" />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServiceSection;