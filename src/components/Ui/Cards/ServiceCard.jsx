"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styled from "styled-components";

const CardWrapper = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: ${(props) => (props.isMobile ? "auto" : "320px")};
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background: white;
  border: 1px solid #e5e7eb;
  will-change: ${(props) => (props.isMobile ? "none" : "transform, box-shadow")};

  @media (max-width: 768px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;

const IconWrapper = styled(motion.div)`
  position: relative;
  z-index: 1;

  img {
    max-width: 100%;
    height: auto;
    max-width: 60px;
  }
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 15px;
`;

const Description = styled(motion.p)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: ${(props) => (props.isMobile ? 5 : 4)};
  -webkit-box-orient: vertical;
  max-height: ${(props) => (props.isMobile ? "150px" : "120px")};
`;

const ServiceCard = ({ service, className, index, isInView, isMobile }) => {
  const [hovered, setHovered] = useState(false);

  // Calculate delay for staggered animation
  const row = Math.floor(index / 3);
  const col = index % 3;
  const delay = isMobile ? 0 : row * 0.1 + col * 0.1;

  // Card animation variants with 3D effects for non-mobile
  const cardVariants = isMobile
    ? {
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.3,
            ease: "easeOut",
            delay,
          },
        },
      }
    : {
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
      };

  // Icon animation variants
  const iconVariants = isMobile
    ? {
        hidden: { scale: 0, opacity: 0 },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: "easeOut",
            delay: delay + 0.1,
          },
        },
      }
    : {
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
      };

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        delay: delay + (isMobile ? 0.2 : 0.4),
      },
    },
  };

  // Description animation variants
  const descriptionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.3 : 0.5,
        delay: delay + (isMobile ? 0.3 : 0.5),
      },
    },
  };

  // Button animation variants
  const buttonVariants = isMobile
    ? {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.3,
            delay: delay + 0.4,
          },
        },
      }
    : {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: delay + 0.6,
            duration: 0.5,
            type: "spring",
            stiffness: 200,
          },
        },
        hover: {
          scale: 1.05,
          x: 5,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        },
      };

  // Hover animation for the card
  const hoverVariants = isMobile
    ? {}
    : {
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
      };

  return (
    <motion.div className={className} variants={cardVariants} style={{ marginBottom: "30px", perspective: isMobile ? "none" : "1000px" }}>
      <CardWrapper
        initial="rest"
        animate={isMobile ? "rest" : hovered ? "hover" : "rest"}
        variants={hoverVariants}
        onHoverStart={() => !isMobile && setHovered(true)}
        onHoverEnd={() => !isMobile && setHovered(false)}
        isMobile={isMobile}
      >
        {!isMobile && (
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
              background: "linear-gradient(135deg, #0119FF, #0066FF)",
              zIndex: 0,
            }}
          />
        )}

        <IconWrapper
          className="tekup-iconbox-icon3"
          variants={iconVariants}
          animate={isMobile ? "visible" : hovered ? "hover" : "visible"}
        >
          <img
            src={service.icon || "/placeholder.svg"}
            alt={service.title}
            loading="lazy"
            style={{ maxWidth: "60px", height: "auto" }}
          />
        </IconWrapper>

        <DataWrapper className="tekup-iconbox-data3">
          <div>
            <motion.div variants={textVariants}>
              <Link href="/single-service">
                <h5>{service.title}</h5>
              </Link>
            </motion.div>
            <Description variants={descriptionVariants} isMobile={isMobile}>
              {service.description}
            </Description>
          </div>

          <motion.div variants={buttonVariants} whileHover={!isMobile && "hover"}>
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
                animate={{ x: isMobile ? 0 : hovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </motion.svg>
            </Link>
          </motion.div>
        </DataWrapper>
      </CardWrapper>
    </motion.div>
  );
};

export default ServiceCard;



// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { motion } from "framer-motion"

// const ServiceCard = ({ service, className, index, isInView }) => {
//   const [hovered, setHovered] = useState(false)

//   // Calculate row and column for grid-based animations
//   const row = Math.floor(index / 3)
//   const col = index % 3

//   // Create a wave-like staggered animation based on position
//   const delay = row * 0.1 + col * 0.1

//   // Card animation variants with 3D effects
//   const cardVariants = {
//     hidden: {
//       opacity: 0,
//       y: 100,
//       rotateX: 10,
//       rotateY: -10,
//       scale: 0.8,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       rotateX: 0,
//       rotateY: 0,
//       scale: 1,
//       transition: {
//         type: "spring",
//         damping: 15,
//         stiffness: 80,
//         mass: 1,
//         delay: delay,
//         duration: 0.8,
//       },
//     },
//     exit: {
//       opacity: 0,
//       y: -50,
//       scale: 0.9,
//       transition: {
//         duration: 0.4,
//       },
//     },
//   }

//   // Icon animation variants
//   const iconVariants = {
//     hidden: {
//       scale: 0,
//       opacity: 0,
//       rotate: -45,
//     },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         damping: 8,
//         stiffness: 100,
//         delay: delay + 0.3,
//         duration: 0.6,
//       },
//     },
//     hover: {
//       scale: 1.1,
//       rotate: [0, -10, 10, -5, 5, 0],
//       transition: {
//         duration: 0.6,
//         ease: "easeInOut",
//       },
//     },
//   }

//   // Text animation variants
//   const textVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         delay: delay + 0.4,
//         duration: 0.5,
//       },
//     },
//   }

//   // Description animation variants
//   const descriptionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: delay + 0.5,
//         duration: 0.5,
//       },
//     },
//   }

//   // Button animation variants
//   const buttonVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         delay: delay + 0.6,
//         duration: 0.5,
//         type: "spring",
//         stiffness: 200,
//       },
//     },
//     hover: {
//       scale: 1.05,
//       x: 5,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//         damping: 10,
//       },
//     },
//   }

//   // Enhanced hover animation for the card
//   const hoverVariants = {
//     rest: {
//       scale: 1,
//       boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.05)",
//       transition: {
//         duration: 0.3,
//         type: "tween",
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       scale: 1.03,
//       y: -10,
//       boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.12)",
//       transition: {
//         duration: 0.3,
//         type: "spring",
//         stiffness: 300,
//         damping: 15,
//       },
//     },
//   }

//   return (
//     <motion.div className={className} variants={cardVariants} style={{ marginBottom: "30px", perspective: "1000px" }}>
//       <motion.div
//         className="tekup-iconbox-wrap3 bg-white border-all"
//         initial="rest"
//         animate={hovered ? "hover" : "rest"}
//         variants={hoverVariants}
//         onHoverStart={() => setHovered(true)}
//         onHoverEnd={() => setHovered(false)}
//         style={{
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           minHeight: "320px",
//           transformStyle: "preserve-3d",
//           borderRadius: "8px",
//           overflow: "hidden",
//           position: "relative",
//         }}
//       >
//         {/* Animated background gradient on hover */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: hovered ? 0.05 : 0 }}
//           transition={{ duration: 0.3 }}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: "linear-gradient(135deg, #0119FF 0%, #0066FF 100%)",
//             zIndex: 0,
//           }}
//         />

//         <motion.div
//           className="tekup-iconbox-icon3"
//           variants={iconVariants}
//           animate={hovered ? "hover" : "visible"}
//           style={{ position: "relative", zIndex: 1 }}
//         >
//           <img src={service.icon || "/placeholder.svg"} alt={service.title} />
//         </motion.div>

//         <div
//           className="tekup-iconbox-data3"
//           style={{
//             display: "flex",
//             flexDirection: "column",
//             flexGrow: 1,
//             justifyContent: "space-between",
//             position: "relative",
//             zIndex: 1,
//           }}
//         >
//           <div>
//             <motion.div variants={textVariants}>
//               <Link href="/single-service">
//                 <h5>{service.title}</h5>
//               </Link>
//             </motion.div>

//             <motion.p
//               variants={descriptionVariants}
//               style={{
//                 overflow: "hidden",
//                 display: "-webkit-box",
//                 WebkitLineClamp: 4,
//                 WebkitBoxOrient: "vertical",
//                 height: "120px",
//               }}
//             >
//               {service.description}
//             </motion.p>
//           </div>

//           <motion.div variants={buttonVariants} whileHover="hover">
//             <Link
//               href="/single-service"
//               className="tekup-iconbox-btn"
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 marginTop: "10px",
//                 fontWeight: "500",
//               }}
//             >
//               Learn More
//               <motion.svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 style={{ marginLeft: "8px" }}
//                 animate={{ x: hovered ? 5 : 0 }}
//                 transition={{ type: "spring", stiffness: 400 }}
//               >
//                 <line x1="5" y1="12" x2="19" y2="12"></line>
//                 <polyline points="12 5 19 12 12 19"></polyline>
//               </motion.svg>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default ServiceCard