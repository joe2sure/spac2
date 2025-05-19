"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const RecentProjectsCard = ({ item, index, isInView }) => {
  // Custom animations based on card index (0-6)
  const getUniqueAnimation = (idx) => {
    // Different animation styles for different card indices
    const animations = [
      // Animation 0: Bounce in from bottom
      {
        hidden: { opacity: 0, y: 80, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 15, 
            delay: 0.1 * idx 
          }
        }
      },
      // Animation 1: Rotate in
      {
        hidden: { opacity: 0, rotateY: 90, x: 50 },
        visible: { 
          opacity: 1, 
          rotateY: 0, 
          x: 0,
          transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 10, 
            delay: 0.1 * idx 
          }
        }
      },
      // Animation 2: Scale Up
      {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { 
            type: "spring", 
            stiffness: 200, 
            delay: 0.15 * idx 
          }
        }
      },
      // Animation 3: Slide from side
      {
        hidden: { opacity: 0, x: -100 },
        visible: { 
          opacity: 1, 
          x: 0,
          transition: { 
            type: "tween", 
            ease: "easeOut", 
            duration: 0.8, 
            delay: 0.1 * idx 
          }
        }
      },
      // Animation 4: Flip up
      {
        hidden: { opacity: 0, rotateX: 90, y: 50 },
        visible: { 
          opacity: 1, 
          rotateX: 0, 
          y: 0,
          transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 12, 
            delay: 0.12 * idx 
          }
        }
      },
      // Animation 5: Diagonal enter
      {
        hidden: { opacity: 0, x: -50, y: 50 },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          transition: { 
            type: "tween", 
            ease: "backOut", 
            duration: 0.9, 
            delay: 0.1 * idx 
          }
        }
      },
      // Animation 6: Pop in
      {
        hidden: { opacity: 0, scale: 0.2 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 15, 
            delay: 0.15 * idx 
          }
        }
      }
    ];
    
    // Get animation based on index (mod to handle if there are more than 7 cards)
    return animations[idx % 7];
  };

  // Get unique animation for this card
  const uniqueAnimation = getUniqueAnimation(index);
  
  // Standard animation variants
  const imageVariants = {
    hidden: { 
      scale: 0.8,
      opacity: 0.5 
    },
    visible: { 
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };
  
  const buttonVariants = {
    hidden: { 
      scale: 0,
      rotate: -45
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.4,
        delay: 0.2,
        ease: "backOut"
      }
    },
    hover: { 
      scale: 1.2,
      backgroundColor: "#0075ff",
      color: "#ffffff",
      transition: {
        duration: 0.2
      }
    }
  };
  
  // Progress bar animation with unique timing for each category
  const progressBarVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: {
        duration: 1.8 + (index * 0.1), // Slightly different duration per card
        delay: 0.5,
        ease: index % 2 === 0 ? "easeInOut" : "circOut" // Different easing per card
      }
    }
  };

  // Customize progress bar colors based on category
  const getProgressBarColor = (category) => {
    const categoryColors = {
      "Database Administration": "bg-blue-600",
      "Azure System Administration": "bg-purple-600",
      "Machine Learning Engineering": "bg-green-600",
      "Data Analysis": "bg-yellow-600",
      "Project Management": "bg-red-600",
      "AI Integrated Solutions": "bg-indigo-600",
      "Cybersecurity": "bg-pink-600"
    };
    
    return categoryColors[category] || "bg-blue-600";
  };

  return (
    <motion.div 
      className="tekup-portfolio-wrap3"
      variants={uniqueAnimation}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      style={{
        height: "480px", // Fixed height for all cards
        margin: "10px",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <motion.div 
        className="tekup-portfolio-thumb3 overflow-hidden"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        whileHover="hover"
        style={{
          height: "240px", // Fixed height for image container
          overflow: "hidden"
        }}
      >
        <motion.img 
          src={item?.image} 
          alt={item?.title}
          variants={imageVariants}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover" // Ensures images maintain aspect ratio
          }}
        />
        <motion.div 
          className="tekup-portfolio-btn3"
          variants={buttonVariants}
          whileHover="hover"
        >
          <Link href="single-portfolio">
            <i className="ri-arrow-right-up-line"></i>
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="tekup-portfolio-data3"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{
          padding: "20px",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
        >
          <Link href="single-portfolio">
            <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>{item?.title}</h3>
          </Link>
          <p style={{ fontSize: "14px", fontWeight: "500", marginBottom: "10px" }}>{item?.category}</p>
          
          {/* Description with fixed height */}
          <div className="mt-2 text-sm text-gray-600" style={{ height: "60px", overflow: "hidden" }}>
            {item?.description}
          </div>
        </motion.div>
        
        {/* Tech category progress bar with unique color */}
        <div className="mt-4 relative h-1 w-full bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className={`absolute top-0 left-0 h-full ${getProgressBarColor(item?.category)} rounded-full`}
            variants={progressBarVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />
        </div>
        
        {/* Tech expertise indicator with unique animation */}
        <div className="mt-2 flex justify-between text-xs font-medium">
          <span>Tech Expertise</span>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ 
              delay: 2.3 + (index * 0.1),
              type: "spring",
              stiffness: 200
            }}
          >
            Advanced
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RecentProjectsCard;



// import Link from "next/link";

// const RecentProjectsCard = ({ item }) => {
//     return (
//         <div className="tekup-portfolio-wrap3">
//             <div className="tekup-portfolio-thumb3">
//                 <img src={item?.image} alt="" />
//                 <Link className="tekup-portfolio-btn3" href="single-portfolio"><i className="ri-arrow-right-up-line"></i></Link>
//             </div>
//             <div className="tekup-portfolio-data3">
//                 <Link href="single-portfolio">
//                     <h3>{item?.title}</h3>
//                 </Link>
//                 <p>{item?.category}</p>
//             </div>
//         </div>
//     );
// };

// export default RecentProjectsCard;